#!/bin/bash
# Build script for Vercel deployment

# Build the client
cd client
npm run build

# Build the server
cd ../server
npm run build

# Copy files to the output directory
mkdir -p dist
cp -r client/dist dist/client
cp -r server/dist dist/server