// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Extend asset and source file extensions
  config.resolver.sourceExts = ["js", "jsx", "json", "ts", "tsx", "cjs", "mjs"]; // Add script file extensions
  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== "ttf"
  ); // Remove 'ttf' from assetExts to avoid conflicts
  config.resolver.assetExts.push("glb", "gltf", "bin", "png", "jpg", "ttf"); // Add glTF, images, and fonts like TTF

  return config;
})();
