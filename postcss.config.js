
module.exports = ({ options }) => ({
  map: options.map,
  plugins: [

    // Install the discard comments plugin
    require('postcss-discard-comments')(),

    // Install the preset-env plugin
    process.env.npm_lifecycle_event == 'build:compile'
      && require('postcss-preset-env')({
        stage: 0,
        autoprefixer: {
          grid: true
        }
      }),

    // Install the cssnano plugin
    process.env.npm_lifecycle_event == 'build:minify'
      && require('cssnano')({
        preset: 'advanced'
      }),

  ].filter(Boolean)
});
