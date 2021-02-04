module.exports = (config) => {
  config.addWatchTarget('./site/css/')
  return {
    dir: {
      input: 'site',
      includes: '../includes',
      output: 'build',
      data: '../data',
    },
  }
}
