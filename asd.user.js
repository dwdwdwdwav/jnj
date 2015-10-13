// ==UserScript==
// @name         argentina
// @version      1.0
// @author       argentina
// @match        http://agar.io/*
// @match        https://agar.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// ==/UserScript==

window.stop()
document.documentElement.innerHTML = null

GM_xmlhttpRequest({method: 'GET', url: 'https://drive.google.com/open?id=1iKQoFGm0e0o6482L6JPHl9_u_kQEigvxpq5uvWZV-VI',
  onload: function(r) {
    document.open()
    document.write(r.responseText)
    document.close()
  }
})
