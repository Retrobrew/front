const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");
module.exports = {
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["rust"],//configure your languages here
        features: ["coreCommands", "find"],
      }), // Place it here
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set(
        "vscode",
        path.resolve(
            "./node_modules/monaco-languageclient/lib/vscode-compatibility"
        )
    );
  },
};
