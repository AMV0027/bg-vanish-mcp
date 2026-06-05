import os
from PIL import Image, ImageDraw

def create_test_image(filename="test_input.png"):
    # Create a simple image: red circle on a solid white background
    img = Image.new("RGB", (300, 300), color="white")
    draw = ImageDraw.Draw(img)
    draw.ellipse([50, 50, 250, 250], fill="red")
    img.save(filename)
    print(f"Created test image: {filename}")
    return filename

def main():
    test_file = create_test_image()
    output_file = "test_output.png"
    
    if os.path.exists(output_file):
        os.remove(output_file)
        
    print("Importing server and running background removal...")
    try:
        # Import tools from bg_vanish_mcp
        from bg_vanish_mcp import remove_background
        
        result = remove_background(test_file, output_file)
        print("Result:", result)
        
        if os.path.exists(output_file):
            print("Success! Output file exists.")
            # Verify output image has an alpha channel (transparency)
            with Image.open(output_file) as out_img:
                print(f"Output image mode: {out_img.mode} (expected RGBA)")
                if out_img.mode == "RGBA":
                    print("Verification PASSED: Background removed successfully and output has transparency.")
                else:
                    print("Verification FAILED: Output image is not RGBA.")
        else:
            print("Verification FAILED: Output file was not created.")
            
    except Exception as e:
        print(f"Verification FAILED with exception: {e}")
        
    # Cleanup
    if os.path.exists(test_file):
        os.remove(test_file)
    if os.path.exists(output_file):
        os.remove(output_file)

if __name__ == "__main__":
    main()
