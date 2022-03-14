// ==UserScript==
// @name         iMS - Remove Input Caret
// @namespace    http://imssystems.tech/
// @version      0.1.0
// @description  Removes input caret from all input boxes.
// @author       Zaeem
// @match        https://*.imssystems.tech/admin/*
// @icon         https://staging.imssystems.tech/favicon.png
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('input { caret-color: transparent; }')

();
