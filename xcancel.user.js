// ==UserScript==
// @name         Redirect twitter -> xcancel
// @description  Redirect x and twitter to xcancel.com
// @namespace    https://github.com/gr3ger/
// @version      1.0
// @author       Greger
// @homepageURL  https://github.com/gr3ger/userscripts
// @updateURL    https://raw.githubusercontent.com/gr3ger/userscripts/main/xcancel.user.js
// @downloadURL  https://raw.githubusercontent.com/gr3ger/userscripts/main/xcancel.user.js
// @match        *://x.com/*
// @match        *://twitter.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = 'https://xcancel.com' + currentPath;
})();
