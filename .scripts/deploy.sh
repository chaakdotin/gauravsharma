#!/bin/bash
set -e

echo "Deployment started..."

# Pull the latest version of the app
git pull --rebase

echo "New changes copied to server !"

echo "Remove Old Dependencies..."
rm -rf node_modules package-lock.json

echo "Installing Dependencies..."
npm install

echo "Creating Production Build..."
# For ReactJS VueJS and Nuxt JS
npm run build

# For NextJS
# npm run export

echo "Deployment Finished!"