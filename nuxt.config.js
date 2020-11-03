export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt_example",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "plugins/fontawesome-free/css/all.min.css" },
      {
        rel: "stylesheet",
        href:
          "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      },
      { rel: "stylesheet", href: "dist/css/adminlte.min.css" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
      }
    ],
    script: [
      { src: "plugins/jquery/jquery.min.js", body: true },
      { src: "plugins/bootstrap/js/bootstrap.bundle.min.js", body: true },
      { src: "dist/js/adminlte.min.js", body: true },
      { src: "dist/js/demo.js", body: true }
    ],
    bodyAttrs: { class: "hold-transition sidebar-mini layout-fixed" }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
