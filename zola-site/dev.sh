#!/bin/bash
# Development script to run Tailwind and Zola concurrently

echo "Starting development environment..."
echo "Make sure to run 'npm install' first if you haven't already"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing npm dependencies..."
    npm install
fi

# Build Tailwind CSS once
echo "Building Tailwind CSS..."
npm run build:css

echo ""
echo "Starting Tailwind CSS watcher in background..."
npm run watch:css &
TAILWIND_PID=$!

echo "Starting Zola server..."
echo "Visit http://127.0.0.1:1111"
zola serve

# Clean up when script exits
trap "kill $TAILWIND_PID" EXIT