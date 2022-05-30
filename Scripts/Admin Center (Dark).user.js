// ==UserScript==
/* globals jQuery, $, waitForKeyElements */
// @name         Admin Center (Dark)
// @namespace    http://imssystems.tech/
// @version      0.2.1
// @description  try to take over the world!
// @author       You
// @match      https://*.imssystems.tech/*
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

var sidebarColor = '#1c1c1c' // sidebar color - prev #e14eca
var sidebarWidth = '250px' // sidebar width
var sidebarHeaderFontSize = '0.9rem' // sidebar headers' font size
var sidebarSubHeaderFontSize = '0.76rem' // sidebar subheaders' font size

var topColor = '#1c1c1c' // top bar color
var tabColor = '#1c1c1c' // tab button color
var inactiveTabColor = '#000000' // inactive tab's color

var modalHeight = '95vh' // modal height
var modalWidth = '85.5vw' // modal width

var backgroundColor = '#222222' // main bg color - prev #1e1e24
var cardColor = '#141414' // card bg color - prev #27293d
var progressColor = '#b8b8b8'

// -- END OF SETTINGS --

// variable declarations
document.documentElement.style.setProperty('--sidebar-colour', sidebarColor);
document.documentElement.style.setProperty('--top-colour', topColor);
document.documentElement.style.setProperty('--tab-colour', tabColor);
document.documentElement.style.setProperty('--sidebar-width', sidebarWidth);
document.documentElement.style.setProperty('--modal-width', modalWidth);
document.documentElement.style.setProperty('--modal-height', modalHeight);
document.documentElement.style.setProperty('--sidebar-header-font-size', sidebarHeaderFontSize);
document.documentElement.style.setProperty('--sidebar-subheader-font-size', sidebarSubHeaderFontSize);
document.documentElement.style.setProperty('--content-bg-color', backgroundColor);
document.documentElement.style.setProperty('--card-bg-color', cardColor);
document.documentElement.style.setProperty('--inactive-tab-color', inactiveTabColor);
document.documentElement.style.setProperty('--progress-color', progressColor);

    // new changes
//addGlobalStyle('span, div, a, th, td, p, h1, h2, h3, h4, h5, h6, input {font-family: Verdana !important;}') // change fonts to verdana
//addGlobalStyle('.sidebar .nav li>a{text-transform:none;}') // remove uppercase sidebar
//addGlobalStyle('b.caret {display: none;}') // hide sidebar caret
//addGlobalStyle('.sidebar .nav>li>a>p{font-size: var(--sidebar-header-font-size);}') // make header larger
//addGlobalStyle('.sidebar .nav li>a{font-size: var(--sidebar-subheader-font-size);}') // make subheader larger
addGlobalStyle('.card{background-color: var(--card-bg-color);}') // set card bg color
addGlobalStyle('.block {display:none;}') // hide block display on users profile page
addGlobalStyle('.progress-bar{background-color: var(--progress-color);}')
addGlobalStyle('.modal-content {background-color:var(--card-bg-color) !important;}') // set modal bg color to card bg color
addGlobalStyle('div>i.tim-icons, div>i.fas{background-color: var(--card-bg-color);}')
addGlobalStyle('div.info-icon { background-image:none !important; background-color: var(--card-bg-color) !important; }')

    // previous
addGlobalStyle('.google-map {height:80vh;}') // resize google map (width is automatic)
    // modal (and respectively sidebar) resize
addGlobalStyle('.modal-content {height:var(--modal-height;)}') // set modal height
addGlobalStyle('.modal-content {width:var(--modal-width);}') // set modal width
addGlobalStyle('.sidebar {width: var(--sidebar-width);}') // set sidebar width to variable value
addGlobalStyle('.modal-dialog {margin-left: calc(var(--sidebar-width) + 10px); margin-top: 1rem;}') // make modal start next to sidebar
    // make green and red texts darker, to be more readable
addGlobalStyle('.text-success {color: #008000!important;}')
addGlobalStyle('.text-danger {color: #ff0000!important;}')
addGlobalStyle('.btn-success.btn-link {color: #00b390;}')
addGlobalStyle('.btn-info.btn-link {color: #1d8cf8 !important;}')
addGlobalStyle('.btn-warning.btn-link {color: #ff8d72 !important;}')
addGlobalStyle('.btn-danger.btn-link {color: #ff0057 !important;}')
addGlobalStyle('.ReactTable .rt-thead .rt-th.-cursor-pointer>div:first-of-type:after, .ReactTable .rt-thead .rt-th.-cursor-pointer>div:first-of-type:before {opacity: 0.7;}') // adjust sortBy to be more visible
    // make main scrollbar bg color same as body
addGlobalStyle('::-webkit-scrollbar-track {background-color: var(--content-bg-color);}')
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
    // REMOVE Toggle button
addGlobalStyle('.navbar-minimize-fixed { display:none; }')
    // RESIZABLETEXTBOXES
addGlobalStyle('textarea.form-control {resize: vertical;}')
addGlobalStyle('input { caret-color: transparent; }') // remove input caret
    // TABCOLOR
addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-color: var(--tab-colour);}')
addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-image: var(--tab-colour);}')
addGlobalStyle('.nav-pills .nav-item .nav-link {background-color: var(--inactive-tab-color);}')
    // Fix body + footer going blue
addGlobalStyle('.main-panel>.content {background-color: var(--content-bg-color);}')
addGlobalStyle('.footer {background-color: var(--content-bg-color);}')
