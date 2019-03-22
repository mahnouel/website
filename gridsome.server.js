// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function(api) {
//   api.loadSource(store => {
//     // Use the Data store API here: https://gridsome.org/docs/data-store-api
//   });
// };

class MyPlugin {
  static defaultOptions() {
    return {
      option: "value"
    };
  }

  // constructor(api, options) {
  //   console.log(api, options);
  //   api.loadSource(store => {
  //     // Use Data Store API here
  //     console.log(store);
  //   });
  //   api.chainWebpack(config => {
  //     // modify config here
  //     console.log(config);
  //   });
  //   api.configureServer(app => {
  //     app.get("/my-endpoint", (req, res) => {
  //       res.send("Hello, world!");
  //     });
  //   });
  // }
}
module.exports = MyPlugin;
