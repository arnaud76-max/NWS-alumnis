https://www.nws-alumni.go.yj.fr
module.exports = {
  siteName: 'Worpdress Headless',
  plugins: [
    {
      // use: 'gridsome-source-wordpress',
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://www.nws-alumni.go.yj.fr',
        // baseUrl: 'http://wordpress.loc',
        // apiBase: 'wp-json/wp/v2'
      }
    },
    // À utiliser avec @gridsome/source-wordpress
  ],
  templates: {
    WordPressPost: '/blog/:slug'
  },
}