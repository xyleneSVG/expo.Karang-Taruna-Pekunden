export function injectRawToken(token: string) {
  return `
    (function() {
      document.cookie = "secureExpo=${token}; Path=/;";
      window.secureExpo = "${token}";
      window.dispatchEvent(new Event("secureExpoReady"));
    })();
    true;
  `;
}
