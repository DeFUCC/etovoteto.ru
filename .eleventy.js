module.exports = (config) => {
  config.addWatchTarget('/site/_styles/')
  config.addWatchTarget('/site/_scripts/')
  config.addPassthroughCopy({ 'site/fonts': 'css/fonts' })
  return {
    dir: {
      input: 'site',
      includes: '_includes',
      output: 'build',
      data: '_data',
    },
  }
}
