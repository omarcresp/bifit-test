const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
      purgecss({ content: ['./src/**/*.vue', './src/index.html'] }),
      cssnano({ preset: 'default' })
    ]
}
