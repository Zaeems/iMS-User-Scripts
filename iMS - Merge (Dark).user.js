// ==UserScript==
/* globals jQuery, $, waitForKeyElements */
// @name         iMS - Merge (Dark)
// @namespace    http://imssystems.tech/
// @version      0.1.2
// @description  try to take over the world!
// @author       You
// @include      https://*.imssystems.tech/*
// @icon         https://staging.imssystems.tech/favicon.png
// @grant GM_log
// @grant window.onurlchange
// ==/UserScript==

window.onload = function(){
    GM_log('window loaded');
    document.body.className="";
};

window.onurlchange = function(){
    GM_log('url changed');
    document.body.className="";
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// make main scrollbar purple, with transparent-purple background
addGlobalStyle('::-webkit-scrollbar-thumb {background-color: #e14eca;}')
addGlobalStyle('::-webkit-scrollbar-track {background-color: #fbe9f9;}')

// make green and red texts darker, to be more readable
addGlobalStyle('.text-success {color: #008000!important;}')
addGlobalStyle('.text-danger {color: #ff0000!important;}')
addGlobalStyle('.btn-success.btn-link {color: #00b390;}')
addGlobalStyle('.btn-info.btn-link {color: #1d8cf8 !important;}')
addGlobalStyle('.btn-warning.btn-link {color: #ff8d72 !important;}')
addGlobalStyle('.btn-danger.btn-link {color: #ff0057 !important;}')

// adjust sortBy to be more visible
addGlobalStyle('.ReactTable .rt-thead .rt-th.-cursor-pointer>div:first-of-type:after, .ReactTable .rt-thead .rt-th.-cursor-pointer>div:first-of-type:before {opacity: 0.7;}')

// make default sidebar color purple
addGlobalStyle('.sidebar {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=red], .sidebar[data=red] {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=orange], .sidebar[data=orange] {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=green], .sidebar[data=green] {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=blue], .sidebar[data=blue] {background: linear-gradient(0deg,#e14eca,#e14eca);}')

// make border-top purple
addGlobalStyle('.main-panel[data=blue]{border-top: 2px solid #e14eca;}')
addGlobalStyle('.main-panel[data=green]{border-top: 2px solid #e14eca;}')
addGlobalStyle('.main-panel[data=orange]{border-top: 2px solid #e14eca;}')
addGlobalStyle('.main-panel[data=red]{border-top: 2px solid #e14eca;}')

    // FULLSIDEBAR
addGlobalStyle('.sidebar {height: 200%!important; margin-top: 0px;border-radius: 0px;}') // Improved sidebar
addGlobalStyle('.footer .nav {margin-left: 15rem;}') // Shove footer to side to accomodate sidebar resize
addGlobalStyle('.navbar .navbar-brand {margin-left: 11rem;}') // Shove navbar to side to accomodate sidebar resize

    // MODAL
addGlobalStyle(':root {--sidebar-width: 230px;}')
addGlobalStyle('.sidebar {width: var(--sidebar-width);}')
addGlobalStyle('.modal-dialog {margin-left: calc(var(--sidebar-width) + 30px); margin-top: 1rem;}')

    // REMOVEINPUTCARET
addGlobalStyle('input { caret-color: transparent; }') // remove input caret

    // REMOVE Toggle button
addGlobalStyle('.navbar-minimize-fixed { display:none; }')

    // RESIZABLETEXTBOXES
addGlobalStyle('textarea.form-control {resize: vertical;}')

    // TABCOLOR
addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-color: #e14eca;}')
addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-image: linear-gradient(to bottom left,#e14eca,#e14eca,#1d8cf8);}')

    // Fix body + footer going blue
addGlobalStyle('.main-panel>.content {background-color: #1e1e24;}')
addGlobalStyle('.footer {background-color: #1e1e24;}')
