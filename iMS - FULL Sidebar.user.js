// ==UserScript==
// @name         iMS - FULL Sidebar
// @namespace    http://imssystems.tech/
// @version      0.1.3
// @description  Makes the sidebar height double
// @author       You
// @match        https://*.imssystems.tech/*
// @icon         https://staging.imssystems.tech/favicon.png
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

addGlobalStyle('.sidebar {height: 200%!important;}')
addGlobalStyle('.footer .nav-item:first-child a {padding-left: 10rem;}')
();
