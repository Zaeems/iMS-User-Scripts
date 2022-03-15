// ==UserScript==
// @name         iMS - Tab Color
// @namespace    http://imssystems.tech/
// @version      0.0.1
// @description  Changes tab color to sidebar
// @author       Zaeem
// @match        https://*.imssystems.tech/admin/*
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

addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-color: #e14eca;}')

();