const path = require('path')
const rollup = require('rollup')
const { terser } = require('rollup-plugin-terser')

module.exports = class {
  data() {
    return {
      permalink: 'js/main.js',
      eleventyExcludeFromCollections: true,
    }
  }

  async render() {
    const inputFile = path.join(__dirname, 'main.js')
    const inputOptions = {
      input: {
        index: inputFile,
      },
    }
    const outputOptions = {
      format: 'iife',
      plugins: [terser()],
    }

    const bundle = await rollup.rollup(inputOptions)

    const { output } = await bundle.generate(outputOptions)

    return output[0].code
  }
}
