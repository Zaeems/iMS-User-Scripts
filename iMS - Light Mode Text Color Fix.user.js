// ==UserScript==
// @name         iMS - Light Mode Text Color Fix
// @namespace    http://imssystems.tech/
// @version      0.1.2
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

addGlobalStyle('.text-success {color: #008000!important;}')
addGlobalStyle('.text-danger {color: #ff0000!important;}')
addGlobalStyle('.card .card-header .card-category {color: #000000;}')
addGlobalStyle('.white-content .card:not(.card-white) .card-body .card-category, .white-content .card:not(.card-white) .card-body .card-description, .white-content .card:not(.card-white) .card-body .card-title, .white-content .card:not(.card-white) .card-header .card-title {color: #000000;}')
addGlobalStyle('.text-muted {color: #000000!important;}')
addGlobalStyle('::-webkit-scrollbar-thumb {background-color: #ff00006b;}')
addGlobalStyle('::-webkit-scrollbar-track {background-color: #f7d6d666;}')
