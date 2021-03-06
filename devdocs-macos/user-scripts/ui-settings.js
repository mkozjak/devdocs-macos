/* global app */

window.useDarkMode = function (enable) {
  requestAnimationFrame(() => {
    const inDarkMode = !!app.settings.get('dark')
    if (enable && inDarkMode) {
      return
    }
    if (!enable && !inDarkMode) {
      return
    }
    const sp = new app.views.SettingsPage()
    sp.toggleDark(enable)
  })
}

window.useNativeScrollbars = function (enable) {
  requestAnimationFrame(() => {
    const sp = new app.views.SettingsPage()
    sp.toggleLayout('_native-scrollbars', enable)
  })
}
