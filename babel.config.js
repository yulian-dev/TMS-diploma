module.exports = function (api) {
  const presets = [
    "@babel/preset-react",
    "@babel/preset-env"
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-syntax-jsx"
  ];

  /** this is just for minimal working purposes,
   * for testing larger applications it is
   * advisable to cache the transpiled modules in
   * node_modules/.bin/.cache/@babel/register* */
  api.cache(false);

  return {
    presets,
    plugins
  };
};