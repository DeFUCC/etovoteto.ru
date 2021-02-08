const path = require('path')
const rollup = require('rollup')
const { terser } = require('rollup-plugin-terser')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const replace = require('@rollup/plugin-replace')

module.exports = class {
  data() {
    return {
      permalink: '/js/this.js',
    }
  }

  async render() {
    const inputOptions = {
      input: {
        index: path.join(__dirname, 'main.js'),
      },
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('development'),
          'process.env.VUE_ENV': JSON.stringify('browser'),
          __VUE_OPTIONS_API__: false,
          __VUE_PROD_DEVTOOLS__: false,
        }),
        commonjs(),
        resolve.default(),
      ],
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
