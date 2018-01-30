module.exports = (config, env, helpers) => {
  if (env !== 'production') {
    config.devtool = 'cheap-module-eval-source-map';
  }
};
