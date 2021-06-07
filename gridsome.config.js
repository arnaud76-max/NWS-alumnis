// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://www.nws-alumni.go.yj.fr/', // required
        typeName: 'WordPress', // GraphQL schema name
      }
    }
  ],
  // Setup template routes for any WordPress collection
  templates: {
    WordPressPost: '/:year/:month/:day/:slug',
    WordPressTag: '/tag/:slug'
  },
}