import * as Cookie from 'tiny-cookie'

export default {
  install: function (app) {
    app.config.globalProperties.$cookie = this
    // app.config.globalProperties.cookie = this
  },
  set: function (name, value, daysOrOptions) {
    var opts = daysOrOptions
    if (Number.isInteger(daysOrOptions)) {
      opts = { expires: daysOrOptions }
    }
    return Cookie.set(name, value, opts)
  },

  get: function (name) {
    return Cookie.get(name)
  },

  delete: function (name, options) {
    var opts = { expires: -1 }
    if (options !== undefined) {
      opts = Object.assign(options, opts)
    }
    this.set(name, '', opts)
  }
}
