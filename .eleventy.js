const theme = '_theme'
const embedYouTube = require('eleventy-plugin-youtube-embed')

module.exports = (config) => {
  config.addPlugin(embedYouTube)
  config.addWatchTarget(`./site/${theme}/_styles/`)
  config.addWatchTarget(`./site/${theme}/_scripts/`)
  config.addPassthroughCopy({ [`site/${theme}/_fonts`]: 'css/fonts' })
  config.addPassthroughCopy({ [`site/img`]: 'img' })
  config.addPassthroughCopy({ [`static`]: '/' })

  config.setPugOptions({
    filters: {
      slug: function (text, opt) {
        console.log(opt, text)
        return text.toUpperCase()
      },
    },
  })
  return {
    dir: {
      input: 'site',
      includes: `${theme}/_includes`,
      output: 'build',
      data: `${theme}/_data`,
    },
  }
}
