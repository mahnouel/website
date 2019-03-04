// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Manuel K",
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        route: "/blog/:year/:slug"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/**/*.md",
        typeName: "Content"
      }
    }
  ]
};
