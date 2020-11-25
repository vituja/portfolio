const path = require("path")
const PrerenderSPAPlugin = require("prerender-spa-plugin")

module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Jan Vítů | Developer"
      return args
    })
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, "dist"),
          // List of routes to prerender
          ["/"],
          {
            // options
          }
        )
      ]
    }
  }
}
