module.exports = ({ config }) => {
  // Typescript support
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: "ts-loader",
    options: { appendTsSuffixTo: [/\.vue$/] }
  });
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
