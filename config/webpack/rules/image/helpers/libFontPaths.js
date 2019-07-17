const path = require('path')
const { nodeModulesPath } = require('../../../../paths')

module.exports = [
  path.resolve(nodeModulesPath, 'octicons/octicons'),
  path.resolve(nodeModulesPath, 'bootswatch/fonts'),
  path.resolve(nodeModulesPath, 'font-awesome/fonts'),
]