const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = prod => {
  const options = {
    minimize: prod,
    modules: true,
    importLoaders: 2,
    localIdentName: prod ? '[hash:base64:32]' : '[path][name]__[local]___[hash:base64:8]',
  }
  const rule = { test: /\.styl$/ }
  if (prod) {
    rule.use = [
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader', options },
      'postcss-loader',
      'stylus-loader',
    ]
  } else {
    rule.use = [
      'style-loader',
      { loader: 'css-loader', options },
      'postcss-loader',
      'stylus-loader',
    ]
  }
  return rule
}