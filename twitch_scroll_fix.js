// ==UserScript==
// @name        Fix twitch chat scroll
// @namespace   https://github.com/gr3ger/
// @match       *://*.twitch.tv/*
// @grant       none
// @version     1.0
// @author      Greger
// @homepageURL  https://github.com/gr3ger/userscripts
// @updateURL    https://github.com/gr3ger/userscripts/main/twitch_scroll_fix.js
// @downloadURL  https://github.com/gr3ger/userscripts/main/twitch_scroll_fix.js
// @description 2025-10-06, 20:52:52
// ==/UserScript==

const originalAddEventListener = EventTarget.prototype.addEventListener;


EventTarget.prototype.addEventListener = function(type, listener, options) {
    if (type == 'scroll' && this?.className?.includes('scrollable-area') == true)
    {
        if (this?.firstChild?.className?.includes('area__message-container') == true)
        {
            var stack = new Error().stack;
            if (stack?.includes('assets.twitch.tv') == true)
            {
                return
            }
        }
    }
    originalAddEventListener.call(this, type, listener, options);
};
