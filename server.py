import os
import io
import base64
from PIL import Image
import rembg
from mcp.server.fastmcp import FastMCP

# Initialize the FastMCP server
mcp = FastMCP("bg-vanish-mcp")

# Initialize rembg session based on USE_GPU environment variable
use_gpu = os.environ.get("USE_GPU", "false").lower() in ("true", "1", "yes")

# Try to use GPU providers if requested, else default to CPU
if use_gpu:
    # We try CUDA and DirectML providers. On Windows, DirectML is excellent for AMD/Intel/Nvidia GPUs
    providers = ['CUDAExecutionProvider', 'DmlExecutionProvider', 'CPUExecutionProvider']
    print("Initializing rembg session with GPU acceleration enabled...")
else:
    providers = ['CPUExecutionProvider']
    print("Initializing rembg session on CPU...")

try:
    session = rembg.new_session(providers=providers)
    # Check what provider is active
    active_providers = session.inner_session.get_providers() if hasattr(session, 'inner_session') else providers
    print(f"Active ONNX Runtime providers: {active_providers}")
except Exception as e:
    print(f"Failed to initialize GPU session ({e}). Falling back to CPU...")
    session = rembg.new_session(providers=['CPUExecutionProvider'])

@mcp.tool()
def remove_background(input_path: str, output_path: str = None, return_base64: bool = False) -> str:
    """
    Remove the background from an image file on the local file system.

    Parameters:
    - input_path: The absolute path to the input image file (e.g., PNG, JPG, JPEG).
    - output_path: The absolute path where the output transparent PNG should be saved. If not provided, it will append '_no_bg.png' in the same directory as the input image.
    - return_base64: If True, returns the processed image as a base64-encoded PNG string in the response.

    Returns:
    - A message detailing the operation result and output file path, plus the base64 string if requested.
    """
    # Normalize paths
    input_path = os.path.abspath(input_path)
    if not os.path.exists(input_path):
        return f"Error: Input file '{input_path}' does not exist."

    try:
        # Load image
        input_image = Image.open(input_path)
        
        # Remove background using the configured session
        output_image = rembg.remove(input_image, session=session)

        # Handle output path
        if not output_path:
            dir_name, file_name = os.path.split(input_path)
            base_name, _ = os.path.splitext(file_name)
            output_path = os.path.join(dir_name, f"{base_name}_no_bg.png")
        else:
            output_path = os.path.abspath(output_path)

        # Save result
        output_image.save(output_path, format="PNG")
        result_message = f"Successfully removed background.\nOriginal: {input_path}\nOutput: {output_path}"

        if return_base64:
            buffered = io.BytesIO()
            output_image.save(buffered, format="PNG")
            img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
            result_message += f"\n\nBase64-encoded output:\ndata:image/png;base64,{img_str}"

        return result_message
    except Exception as e:
        return f"Error removing background: {str(e)}"

@mcp.tool()
def remove_background_base64(image_base64: str) -> str:
    """
    Remove the background from a base64-encoded image and return the result as a base64-encoded PNG.

    Parameters:
    - image_base64: The base64-encoded image data (supports optional 'data:image/...;base64,' prefix).

    Returns:
    - The base64-encoded transparent PNG image data prefixed with 'data:image/png;base64,'.
    """
    try:
        # Clean prefix if it is present
        if "," in image_base64:
            image_base64 = image_base64.split(",")[1]

        # Decode base64 image
        img_data = base64.b64decode(image_base64)
        input_image = Image.open(io.BytesIO(img_data))

        # Remove background using the configured session
        output_image = rembg.remove(input_image, session=session)

        # Encode back to base64
        buffered = io.BytesIO()
        output_image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        return f"data:image/png;base64,{img_str}"
    except Exception as e:
        return f"Error removing background from base64 data: {str(e)}"

if __name__ == "__main__":
    mcp.run()
