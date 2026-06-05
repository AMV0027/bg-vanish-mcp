# Background Vanish MCP Server

A local Model Context Protocol (MCP) server that provides tools for isolating backgrounds from images (creating transparent PNGs). It runs entirely locally using `rembg` (U2NET) and the official `mcp` Python SDK.

## Features

- **Local-first**: Uses `rembg` which downloads the U2NET model (~176MB) locally on first run. No API keys or cloud service dependencies.
- **File System Integration**: Works directly with local file paths.
- **Base64 support**: Can process images sent as base64 strings directly.

## Tools

### 1. `remove_background`
Removes the background from an image file on the local file system.
- **Arguments**:
  - `input_path` (string, required): Absolute path to the input image file (e.g. JPG, PNG).
  - `output_path` (string, optional): Absolute path where the transparent PNG should be saved. Defaults to `<input_filename>_no_bg.png`.
  - `return_base64` (boolean, optional): If `true`, returns the base64-encoded string of the output.
- **Returns**: A confirmation message with path info and optional base64 representation.

### 2. `remove_background_base64`
Removes background from a base64-encoded image directly.
- **Arguments**:
  - `image_base64` (string, required): Base64-encoded image data. Supports optional data URI prefix (e.g. `data:image/png;base64,...`).
- **Returns**: A transparent PNG image encoded in base64.

---

## Setup & Installation

### 1. Python Environment Setup
Ensure Python 3.10+ is installed. Then set up the virtual environment:
```bash
python -m venv .venv
.venv\Scripts\activate
pip install -e .
```
Or directly install the required packages:
```bash
pip install mcp rembg pillow hatchling
```

### 2. Configure Claude Desktop
Add this to your Claude Desktop configuration file (typically located at `%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "bg-vanish-mcp": {
      "command": "C:/Companies/MCP-servers/bg-remover-mcp/.venv/Scripts/python.exe",
      "args": [
        "C:/Companies/MCP-servers/bg-remover-mcp/server.py"
      ],
      "env": {
        "USE_GPU": "true"
      }
    }
  }
}
```

> [!NOTE]
> On the very first image processing request, `rembg` will automatically download the U2NET model to your user home folder (`~/.u2net/u2net.onnx`). This may take a few moments depending on your network connection.
