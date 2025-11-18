#!/bin/bash

# ArkadyaApps - Production Build Script
# This script builds the frontend for deployment to Cloudflare Pages

set -e  # Exit on error

echo "🚀 Starting ArkadyaApps Production Build..."
echo ""

# Navigate to frontend directory
cd /app/frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🔨 Building production bundle..."
echo ""

# Build the application
yarn build

echo ""
echo "✅ Build completed successfully!"
echo ""
echo "📊 Build Statistics:"
echo "-------------------"

# Display build folder size
if [ -d "build" ]; then
    BUILD_SIZE=$(du -sh build | cut -f1)
    echo "Total build size: $BUILD_SIZE"
    echo ""
    
    # Count files
    FILE_COUNT=$(find build -type f | wc -l)
    echo "Total files: $FILE_COUNT"
    echo ""
    
    # Check for required files
    echo "📋 Checking required files:"
    
    if [ -f "build/index.html" ]; then
        echo "  ✅ index.html"
    else
        echo "  ❌ index.html (MISSING!)"
    fi
    
    if [ -f "build/_redirects" ]; then
        echo "  ✅ _redirects"
    else
        echo "  ❌ _redirects (MISSING!)"
    fi
    
    if [ -f "build/_headers" ]; then
        echo "  ✅ _headers"
    else
        echo "  ❌ _headers (MISSING!)"
    fi
    
    if [ -d "build/static" ]; then
        echo "  ✅ static folder"
    else
        echo "  ❌ static folder (MISSING!)"
    fi
    
    echo ""
    echo "🎉 Ready for deployment!"
    echo ""
    echo "📤 Next steps:"
    echo "1. Go to https://dash.cloudflare.com"
    echo "2. Navigate to Pages > Create a project"
    echo "3. Choose 'Direct Upload'"
    echo "4. Upload the entire 'build' folder"
    echo ""
    echo "📂 Build location: /app/frontend/build"
    echo ""
    echo "📖 For detailed instructions, see:"
    echo "   /app/CLOUDFLARE_DEPLOYMENT.md"
    echo ""
else
    echo "❌ Build folder not found!"
    exit 1
fi
