(function () {
  var host = location.hostname || ''
  var local = !host || host === 'localhost' || host === '127.0.0.1' || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)
  window.__SP_CONFIG__ = {
    apiBaseUrl: local ? '/api/v1' : 'https://api.xj673.shop/api/v1',
    assetOrigin: local ? '' : 'https://api.xj673.shop',
    siteKind: 'mobile',
    pcSiteUrl: 'https://hkexp.z11.web.core.windows.net',
    mobileSiteUrl: 'https://hkexh.z11.web.core.windows.net',
  }
})()
