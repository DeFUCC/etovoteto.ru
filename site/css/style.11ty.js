const fs = require('fs')
const path = require('path')
const util = require('util')
const stylus = require('stylus')

const readFile = util.promisify(fs.readFile)

const inputFile = path.join(__dirname, 'index.styl')

module.exports = class {
  data() {
    return {
      permalink: 'css/style.css',
      eleventyExcludeFromCollections: true,
    }
  }

  async render() {
    const str = await readFile(inputFile, { encoding: 'utf-8' })

    const styl = stylus(str).set('filename', inputFile)

    return styl.render()
  }
}
