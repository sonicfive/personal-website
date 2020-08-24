const cssnano = require('cssnano')

  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      cssnano({

        preset: 'default'

      }),
      require('@fullhuman/postcss-purgecss')({

        content: [

          '**.html',
        ],

        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []

      })
    ]
  }
