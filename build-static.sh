#!/bin/bash

# This script builds the project as a static website

# Build the client-side application only using the static config
echo "Building static website..."
npx vite build --config vite.config.static.ts

echo "Static build completed."
echo "Files are available in the static-build/ directory"
echo "You can deploy these files to any static hosting provider."