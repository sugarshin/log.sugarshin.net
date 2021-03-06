const unified = require('unified')
const stringify = require('remark-stringify')
const strip = require('strip-markdown')
const { basePlugins } = require('.')

const renderer = unified()
  .use(basePlugins)
  .use(stringify)
  .use(strip)

module.exports = function stripMarkdown(value) {
  return renderer.processSync(value).contents
    // https://github.com/remarkjs/strip-markdown/issues/13
    .replace(/&#x3A;/g, ':')
}
