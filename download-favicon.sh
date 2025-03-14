#!/bin/bash

# Download New Zealand flag
curl -o nz-flag.png "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" || exit 1

# Install ImageMagick if not present (commented out as it requires admin privileges)
# sudo apt-get update && sudo apt-get install -y imagemagick

# Convert to various sizes
convert nz-flag.png -resize 32x32 public/icon.png
convert nz-flag.png -resize 180x180 public/apple-icon.png
convert nz-flag.png -resize 32x32 public/favicon.ico

# Clean up
rm nz-flag.png

echo "Favicon files have been created in the public directory" 