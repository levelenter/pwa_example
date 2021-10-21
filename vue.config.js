// pwa config
// https://cli.vuejs.org/core-plugins/pwa.html#configuration
//
// https://qiita.com/kawakawaryuryu/items/dd6a1c048e830f2f36ef
// https://qiita.com/w2or3w/items/74a6e471501ee28ee9dd

module.exports = {
  publicPath: "/pwa_example",
  devServer: {
    https: true,
    disableHostCheck: true,
  },
  pwa: {
    name: "PWAExample",
    short_name: "PWA",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    start_url: "/pwa_example/index.html",
    // icon
    favicon32: "./img/icons/favicon-32x32.png",
    favicon16: "./img/icons/favicon-16x16.png",
    appleTouchIcon: "./img/icons/apple-touch-icon-152x152.png",
    maskIcon: "./img/icons/safari-pinned-tab.svg",
    msTileImage: "./img/icons/msapplication-icon-144x144.png",

    // // configure the workbox plugin
    // workboxPluginMode: "InjectManifest",
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: "src/service-worker.js",
    //   // ...other Workbox options...
    // },
  },
};
