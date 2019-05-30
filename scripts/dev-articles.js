/* eslint-disable no-console */

// Mock GitHub API, GET: /repos/${author}/${repo_name}/contents/articles
const fs = require('fs')
const mkdirp = require('mkdirp')
const { authorGitHubUserName, repositoryName } = require('../config/settings')
const argv = require('minimist')(process.argv.slice(2))

const outDirBase = argv.o || argv.out || 'build-dev'
const ARTICLES_DIR = './articles'
// TODO:
// to dry with apis/Articles_
//                           \
const OUT_DIR = `./${outDirBase}/repos/${authorGitHubUserName}/${repositoryName}/contents/articles`

const filenames = fs.readdirSync(ARTICLES_DIR)
mkdirp.sync(OUT_DIR)

filenames.filter(name => /\.md$/.test(name)).forEach(name => {
  const rawContent = fs.readFileSync(`${ARTICLES_DIR}/${name}`, { encoding: 'utf8' })
  fs.writeFileSync(`${OUT_DIR}/${name}`, rawContent, { encoding: 'utf8' })
  console.log(`Success write file ${OUT_DIR}/${name} !`)
})
