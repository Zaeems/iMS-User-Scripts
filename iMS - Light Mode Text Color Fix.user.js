// ==UserScript==
// @name         iMS - Light Mode Text Color Fix
// @namespace    http://imssystems.tech/
// @version      0.1.1
// @description  Gives all large textboxes a draggable resize button.
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

addGlobalStyle('.text-success {color: #0ab71f!important;}')
addGlobalStyle('.card .card-header .card-category {color: #000000;}')
addGlobalStyle('.white-content .card:not(.card-white) .card-body .card-category, .white-content .card:not(.card-white) .card-body .card-description, .white-content .card:not(.card-white) .card-body .card-title, .white-content .card:not(.card-white) .card-header .card-title {color: #000000;}')
