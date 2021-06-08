https://www.nws-alumni.go.yj.fr
module.exports = {
  siteName: 'Worpdress Headless',
  plugins: [
    {
      // use: 'gridsome-source-wordpress',
      use: '@gridsome/source-wordpress',
      options: {
        apiBase: 'wp-json',
        baseUrl: 'https://www.nws-alumni.go.yj.fr',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/:year/:month/:day/:slug',
          post_tag: '/tag/:slug'
        },
        splitPostsIntoFragments: true, // default false
        downloadRemoteImagesFromPosts: true, // default false
        downloadRemoteFeaturedImages: true, // default false
        downloadACFImages: true, // default false
        // baseUrl: 'http://wordpress.loc',
        // apiBase: 'wp-json/wp/v2'
      },
    customEndpoints: [
      {
        typeName: "Users",
        route: '/wp-json/acf/v3/users',
      }
    ]
}
    // À utiliser avec @gridsome/source-wordpress
  ],
  templates: {
    WordPressPost: '/blog/:slug'
  },
}