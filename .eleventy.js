const theme = '_theme'

module.exports = (config) => {
  config.addWatchTarget(`./site/${theme}/_styles/`)
  config.addWatchTarget(`./site/${theme}/_scripts/`)
  config.addPassthroughCopy({ [`site/${theme}/_fonts`]: 'css/fonts' })
  return {
    dir: {
      input: 'site',
      includes: `${theme}/_includes`,
      output: 'build',
      data: `${theme}/_data`,
    },
  }
}
