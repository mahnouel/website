// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Manuel K",
  transformers: {
    remark: {
      plugins: ["remark-highlight.js"]
    }
  },
  plugins: [
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "BlogPost",
        feedOptions: {
          title: "Manuel K",
          feed_url: "https://m-k.io/rss.xml",
          site_url: "https://m-k.io"
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: `https://m-k.io${node.path}`,
          author: node.fields.author
        }),
        output: {
          dir: "./static",
          name: "rss.xml"
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/blog/**/*.md",
        typeName: "BlogPost",
        route: "/:lang/:year/:slug"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/information/**/*.md",
        typeName: "Information"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/learning/**/*.md",
        typeName: "Learning",
        route: "/:lang/:year/til/:month:day/:slug"
      }
    }
  ]
};
