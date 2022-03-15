// ==UserScript==
// @name         iMS - Resizeable Textboxes
// @namespace    http://imssystems.tech/
// @version      0.1.4
// @description  Gives all large textboxes a draggable resize button.
// @author       Zaeem
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

addGlobalStyle('* textarea.form-control, .card-login.card-white textarea.form-control, .login-page textarea.form-control {resize: vertical;}')

();
