module.exports = {
  /**
   * Headers of the page
   */
  head: {
    title: 'Enceladus',
    meta: [
      {
        charset: 'utf-8',
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      }, {
        hid: 'description',
        name: 'description',
        content: 'Enceladus launch thread interface',
      }, {
        name: 'apple-mobile-web-app-title',
        content: 'Enceladus',
      }, {
        name: 'application-name',
        content: 'Enceladus',
      }, {
        name: 'msapplication-TitleColor',
        content: '#000000',
      }, {
        name: 'theme-color',
        content: '#ff5100',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      }, {
        rel: 'manifest',
        href: '/site.webmanifest',
      }, {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#ff5100',
      },
    ],
  },

  /**
   * Customize the progress bar color
   */
  loading: false,

  /**
   * Build configuration
   */
  build: {
    /**
     * Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    /**
     * JavaScript extensions
     */
    babel: {
      plugins: [
        'babel-plugin-transform-object-rest-spread',
        'babel-plugin-transform-class-properties',
        'babel-plugin-transform-decorators-legacy',
        'babel-plugin-transform-export-extensions',
        'babel-plugin-transform-do-expressions',
        ['babel-plugin-transform-pipeline-operator', { proposal: 'minimal' }],

        'babel-plugin-transform-inline-consecutive-adds',
        'babel-plugin-minify-constant-folding',
        'babel-plugin-minify-numeric-literals',
        'babel-plugin-transform-merge-sibling-variables',
        'babel-plugin-closure-elimination',
      ]
    },

    postcss: [
      require('postcss-advanced-variables')({
        disable: '@content, @each, @else, @if, @include, @import, @for, @mixin',
      }),
      require('postcss-preset-env')({
        stage: 2,
        features: {
          'nesting-rules': true,
          'color-functional-notation': true,
        },
      }),
      require('postcss-time-machine')({ 'box-sizing': false }),
      require('postcss-short')({
        /**
         * only enabled are:
         * - size
         * - margin/padding
         * - overflow
         * - border-radius
         */
        border: { disable: true },
        color: { disable: true },
        'font-size': { disable: true },
        position: { disable: true },
        'font-weight': { disable: true },
      }),
      require('postcss-calc')(),
    ],
  },
};
