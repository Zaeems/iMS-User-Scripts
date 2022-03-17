// ==UserScript==
/* globals jQuery, $, waitForKeyElements */
// @name         iMS - FULL Sidebar
// @namespace    http://imssystems.tech/
// @version      0.2.1
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

function toggleOnLoad(){
    document.getElementById('switch-1').click(); // enables full sidebar on login
}

addGlobalStyle('.sidebar {height: 200%!important; margin-top: 0px;}')
addGlobalStyle('.footer .nav {margin-left: 15rem;}')
addGlobalStyle('.navbar .navbar-brand {margin-left: 11rem;}')
addGlobalStyle('.sidebar {border-radius: 0px;}')
addGlobalStyle('.text-light {color: #adb5bd00!important;}')
toggleOnLoad()
();
