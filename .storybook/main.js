const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],
  babel: async (options) => ({
    ...options,
    presets: [["react-app", { flow: true, typescript: false }]]
  }),
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });
    config.resolve.extensions.push(".js", ".jsx");
    return config;
  }
};
