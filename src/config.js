require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Tech Heroes',
    description: 'The greatest app in all the world.',
    head: {
      titleTemplate: 'Tech Heroes: %s',
      meta: [
        {name: 'description', content: 'The greatet app in all the world.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Tech Heroes'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Tech Heroes'},
        {property: 'og:description', content: 'The greatet app in all the world.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@tjmasterson'},
        {property: 'og:creator', content: '@tjmasterson'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
