/* Google Ads lead tracking (AW-10990620522) — RealScout signup clicks + phone taps.
   Shared across Dr. Jan Duffy's office sites. Safe to load once per page. */
(function () {
  if (window.__djdAdsConv) return;
  window.__djdAdsConv = true;
  var ID = 'AW-10990620522';
  var REALSCOUT = 'AW-10990620522/oggzCNmKmKUdEOqe3vgo';
  var PHONE = 'AW-10990620522/PHRcCNyKmKUdEOqe3vgo';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', ID);
  /* The gtag library (~160 KB) loads after the page has painted: on the first tap, key
     press or scroll, or when the browser is idle after load. Commands above and any
     conversion clicks queue in dataLayer until then, so tracking is unchanged. */
  var loaded = false;
  function loadGtag() {
    if (loaded) return;
    loaded = true;
    ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(function (ev) {
      window.removeEventListener(ev, loadGtag, true);
    });
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(s);
  }
  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(function (ev) {
    window.addEventListener(ev, loadGtag, { capture: true, passive: true, once: true });
  });
  function whenIdle() {
    if ('requestIdleCallback' in window) window.requestIdleCallback(loadGtag, { timeout: 4000 });
    else setTimeout(loadGtag, 2500);
  }
  if (document.readyState === 'complete') whenIdle();
  else window.addEventListener('load', whenIdle, { once: true });
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href') || '';
    var t = /realscout\.com/i.test(h) ? REALSCOUT : /^tel:/i.test(h) ? PHONE : null;
    if (t) window.gtag('event', 'conversion', { send_to: t, transport_type: 'beacon' });
  }, true);
})();
