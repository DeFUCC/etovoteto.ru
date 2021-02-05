const theme = '_theme'
const embedYouTube = require('eleventy-plugin-youtube-embed')

module.exports = (config) => {
  config.addPlugin(embedYouTube)
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
