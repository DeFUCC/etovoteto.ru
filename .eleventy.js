module.exports = (config) => {
  config.addWatchTarget('./site/_styles/')
  config.addWatchTarget('./site/js/')
  config.addPassthroughCopy({ 'site/fonts': 'css/fonts' })
  config.addPassthroughCopy({ 'site/js': 'js' })
  return {
    dir: {
      input: 'site',
      includes: '_includes',
      output: 'build',
      data: '_data',
    },
  }
}
