// ==UserScript==
/* globals jQuery, $, waitForKeyElements */
// @name         iMS - Merge (Dark)
// @namespace    http://imssystems.tech/
// @version      0.1.3
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

// -- START OF SETTINGS
// ADJUST YOUR SETTINGS HERE

// This is the color for the sidebar
addGlobalStyle(':root {--sidebar-colour: linear-gradient(0deg,#e14eca,#e14eca);}')

// This is the color for the top bar
addGlobalStyle(':root {--top-colour: 2px solid #e14eca;}')

// This is the color for the tab buttons
addGlobalStyle(':root {--tab-colour: #e14eca;}')


// -- END OF SETTINGS --

addGlobalStyle('.google-map {height:80vh;}') // resize google map (width is automatic)

    // modal (and respectively sidebar) resize
addGlobalStyle('.modal-content {height:95vh;}') // increase modal height
addGlobalStyle('.modal-content {width:85.5vw;}') // increase modal width
addGlobalStyle(':root {--sidebar-width: 250px;}') // introduce sidebar-width variable
addGlobalStyle('.sidebar {width: var(--sidebar-width);}') // set sidebar width to variable value
addGlobalStyle('.modal-dialog {margin-left: calc(var(--sidebar-width) + 30px); margin-top: 1rem;}') // make modal start next to sidebar

    // make green and red texts darker, to be more readable
addGlobalStyle('.text-success {color: #008000!important;}')
addGlobalStyle('.text-danger {color: #ff0000!important;}')
addGlobalStyle('.btn-success.btn-link {color: #00b390;}')
addGlobalStyle('.btn-info.btn-link {color: #1d8cf8 !important;}')
addGlobalStyle('.btn-warning.btn-link {color: #ff8d72 !important;}')
addGlobalStyle('.btn-danger.btn-link {color: #ff0057 !important;}')
addGlobalStyle('.ReactTable .rt-thead .rt-th.-cursor-pointer>div:first-of-type:after, .ReactTable .rt-thead .rt-th.-cursor-pointer>div:first-of-type:before {opacity: 0.7;}') // adjust sortBy to be more visible

    // make main scrollbar purple, with transparent-purple background
addGlobalStyle('::-webkit-scrollbar-thumb {background-color: #e14eca;}')
addGlobalStyle('::-webkit-scrollbar-track {background-color: #fbe9f9;}')

    // adjust sidebar color
addGlobalStyle('.sidebar {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=blue], .sidebar[data=blue] {background: var(--sidebar-colour);}') // blue -> variable
addGlobalStyle('.off-canvas-sidebar[data=green], .sidebar[data=green] {background: var(--sidebar-colour);}') // green -> variable
addGlobalStyle('.off-canvas-sidebar[data=orange], .sidebar[data=orange] {background: var(--sidebar-colour);}') // orange -> variable
addGlobalStyle('.off-canvas-sidebar[data=red], .sidebar[data=red] {background: var(--sidebar-colour);}') // red -> variable
addGlobalStyle('.off-canvas-sidebar[data=primary], .sidebar[data=primary] {background: var(--sidebar-colour);}') // purple -> variable

    // adjust top border color
addGlobalStyle('.main-panel[data=blue]{border-top: var(--top-colour);}') // blue -> variable
addGlobalStyle('.main-panel[data=green]{border-top: var(--top-colour);}') // green -> variable
addGlobalStyle('.main-panel[data=orange]{border-top: var(--top-colour);}') // orange -> variable
addGlobalStyle('.main-panel[data=red]{border-top: var(--top-colour);}') // red -> variable
addGlobalStyle('.main-panel[data=primary]{border-top: var(--top-colour);}') // purple -> variable

    // FULLSIDEBAR
addGlobalStyle('.sidebar {height: 200%!important; margin-top: 0px;border-radius: 0px;}') // Improved sidebar
addGlobalStyle('.footer .nav {margin-left: 15rem;}') // Shove footer to side to accomodate sidebar resize
addGlobalStyle('.navbar .navbar-brand {margin-left: 11rem;}') // Shove navbar to side to accomodate sidebar resize
addGlobalStyle('.sidebar {margin-left:0px;}') // Start sidebar at left of screen
addGlobalStyle('.nav>li>a>p {font-size: 12px;}') // increase sidebar font size by 2px
addGlobalStyle('b.caret {display: none;}') // hide sidebar caret

    // REMOVE Toggle button
addGlobalStyle('.navbar-minimize-fixed { display:none; }')

    // RESIZABLETEXTBOXES
addGlobalStyle('textarea.form-control {resize: vertical;}')
addGlobalStyle('input { caret-color: transparent; }') // remove input caret

    // TABCOLOR
addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-color: var(--tab-colour);}')
addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-image: var(--tab-colour);}')

    // Fix body + footer going blue
addGlobalStyle('.main-panel>.content {background-color: #1e1e24;}')
addGlobalStyle('.footer {background-color: #1e1e24;}')
