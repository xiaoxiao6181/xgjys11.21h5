(function () {
  var host = location.hostname || ''
  var local = !host || host === 'localhost' || host === '127.0.0.1' || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)
  window.__SP_CONFIG__ = {
    apiBaseUrl: local ? '/api/v1' : 'https://api.xj673.shop/api/v1',
    assetOrigin: local ? '' : 'https://api.xj673.shop',
    siteKind: 'mobile',
    pcSiteUrl: 'https://hkexp-ctkpu.ondigitalocean.app',
    mobileSiteUrl: 'https://hkexh-f9c5h.ondigitalocean.app',
  }
})()
