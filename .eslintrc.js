module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "airbnb"],
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": 0,
    "no-console": 0,
    quotes: 0,
    "react/jsx-one-expression-per-line": 1,
    "arrow-parens": 0,
    "react/prop-types": 0,
  },
};
