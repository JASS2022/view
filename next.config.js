module.exports = {
  webpack(config) {
    config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'

    // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    config.experiments = { asyncWebAssembly: true, syncWebAssembly: true, layers: true }

    config.externals = {
      'wasmer_wasi_js_bg.wasm': true
    }

    config.mode = 'development'

    return config
  },
}