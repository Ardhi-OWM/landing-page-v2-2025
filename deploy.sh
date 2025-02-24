#!/bin/sh
echo "Starting deployment..."

# Navigate to the public_html directory
cd ~/public_html || exit

# Pull the latest changes from GitHub
git pull origin main

# Install dependencies
npm install

# Build the project
npm run build

# Clear old files (optional)
rm -rf ./*

# Move built files to the root directory
cp -r dist/* .

echo "Deployment complete!"
