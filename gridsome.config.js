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
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/output/**/*.md",
        typeName: "Output",
        route: "/:year/@/:slug"
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
        route: "/:year/til/:month:day/:slug"
      }
    }
  ]
};
