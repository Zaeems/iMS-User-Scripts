// ==UserScript==
// @name         iMS - Resizeable Textboxes
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Gives all large textboxes a draggable resize button.
// @author       Zaeem
// @match        https://*.imssystems.tech/admin/*
// @icon         https://www.google.com/s2/favicons?domain=imssystems.tech
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

addGlobalStyle('* textarea.form-control, .card-login.card-white textarea.form-control, .login-page textarea.form-control {resize: vertical;}')

();