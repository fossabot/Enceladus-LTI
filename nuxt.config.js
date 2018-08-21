module.exports = {
  /*
  ** Headers of the page
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
      }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: false,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
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
    }
  }
}

