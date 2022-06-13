// ==UserScript==
/* globals jQuery, $, waitForKeyElements */
// @name         Pink (Dark)
// @namespace    http://imssystems.tech/
// @version      0.3.0
// @description  change theme of iMS
// @author       You
// @match        https://*.imssystems.tech/*
// @exclude      https://knowledge-base.imssystems.tech/*
// @icon         https://staging.imssystems.tech/favicon.png
// @grant GM_log
// @grant window.onurlchange
// ==/UserScript==

   // -- START OF SETTINGS --
  // ADJUST YOUR SETTINGS HERE

var sidebarColor = '#e14eca' // sidebar color
var sidebarWidth = '250px' // sidebar width

var topColor = '#e14eca' // top bar color
var tabColor = '#e14eca' // tab button color

var modalHeight = '50vh' // minimum modal height
var modalWidth = '85.5vw' // modal width

var backgroundColor = '#1e1e24' // main bg color
var cardColor = '#27293d' // card bg color
var progressColor = '#e14eca'

var notificationBackground = '#1d1d1d' // notification menu bg color
var notificationText = '#FFFFFF' // notification text color

   // -- END OF SETTINGS --

// variable declarations
document.documentElement.style.setProperty('--sidebar-colour', sidebarColor);
document.documentElement.style.setProperty('--top-colour', topColor);
document.documentElement.style.setProperty('--tab-colour', tabColor);
document.documentElement.style.setProperty('--sidebar-width', sidebarWidth);
document.documentElement.style.setProperty('--modal-width', modalWidth);
document.documentElement.style.setProperty('--modal-height', modalHeight);
document.documentElement.style.setProperty('--content-bg-color', backgroundColor);
document.documentElement.style.setProperty('--card-bg-color', cardColor);
document.documentElement.style.setProperty('--progress-color', progressColor);
document.documentElement.style.setProperty('--notification-bg-color', notificationBackground);
document.documentElement.style.setProperty('--notification-fg-color', notificationText);

   // -- LATEST FEATURES --

// new changes
addGlobalStyle('* {box-shadow: none !important;}') // remove all backdrop shadow
addGlobalStyle('.rnc__notification-timer-filler{animation-duration: 15000ms !important;}') // increase notification timer 2s -> 15s
addGlobalStyle('.rnc__base{z-index:100001;}') // put notification alert to top
addGlobalStyle('.fixed-plugin .dropdown .dropdown-menu:after{top:32px;}') // menu icon to start from gear
addGlobalStyle('.max-index{z-index:100000 !important;}') // modal to top
addGlobalStyle('.bg-secondary { background-color: var(--content-bg-color) !important;}') // adjusts dropdown pre-set value bg color (change BU)
//addGlobalStyle('.btn, .navbar .navbar-nav>a.btn, .btn-primary.disabled{border-style:solid; border-width: 1px; border-color: rgb(43, 53, 83); border-radius: 0.4285rem;}') // makes buttons more obvious
addGlobalStyle('.login-page .card-login {transform: scale(1.25);}') // resize login to 125%
addGlobalStyle('.login-page .my-auto {display:none;}') // hide logo div
addGlobalStyle('.container-login {background-color: var(--content-bg-color);}') // adjusts login screen bg-color
addGlobalStyle('canvas {display:none;}') // hide animated background on login screen
addGlobalStyle('.fixed-plugin .dropdown-menu{right:69px !important; top: -12px !important; width: 233px !important;}') // move settings dropdown to top left
addGlobalStyle('.fixed-plugin{position:absolute; right:215px; top: 8px; border-radius: 0px; z-index:1111; height:0;}') // move settings button to navbar

// previous
//addGlobalStyle('.page-item.active>.page-link{background: var(--content-bg-color) !important;}') // adjust pagination active list item bg color from purple -> variable
addGlobalStyle('.navbar .navbar-wrapper {margin-left: calc(var(--sidebar-width)/4);}') // adjust page title past sidebar
//addGlobalStyle('.btn, .navbar .navbar-nav>a.btn, .btn-primary.disabled{background: var(--card-bg-color);}') // make buttons black
addGlobalStyle('div>i.tim-icons, div>i.fas{background-color: var(--card-bg-color);}') // change icon background color
addGlobalStyle('div.info-icon { background-image:none !important; background-color: var(--card-bg-color) !important; }') // change icon background color
addGlobalStyle('.notification-menu {background-color: var(--notification-bg-color);') // chang notification menu backgorund color
addGlobalStyle('.text-default {color: var(--notification-fg-color) !important;') // change notification font color
addGlobalStyle('.react-select__menu {background-color: var(--notification-bg-color) !important;') // change dropdown menu background color
addGlobalStyle('.dropdown-menu {background: var(--card-bg-color) !important;') // change more dropdown menu background color

   // -- OLDER FEATURES --
addGlobalStyle('div>i.tim-icons, div>i.fas{background-color: var(--card-bg-color);}') // change icon background color
addGlobalStyle('div.info-icon { background-image:none !important; background-color: var(--card-bg-color) !important; }') // change icon background color
addGlobalStyle('.card{background-color: var(--card-bg-color);}') // set card bg color
addGlobalStyle('.block {display:none;}') // hide block display on users profile page
addGlobalStyle('.modal-content {background-color:var(--card-bg-color) !important;}') // set modal bg color to card bg color
addGlobalStyle('.progress-bar{background-color: var(--progress-color);}') // progress bar color -> variable
addGlobalStyle('.google-map {height:80vh;}') // resize google map (width is automatic)

// modal (and respectively sidebar) resize
addGlobalStyle('.modal-content {min-height:var(--modal-height);}') // set modal height
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
addGlobalStyle('.sidebar {background: var(--sidebar-colour);}')
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

// full sidebar
addGlobalStyle('.sidebar {height: 200%!important; margin-top: 0px;border-radius: 0px;}') // Improved sidebar
addGlobalStyle('.footer .nav {margin-left: 15rem;}') // Shove footer to side to accomodate sidebar resize
addGlobalStyle('.navbar .navbar-brand {margin-left: 11rem;}') // Shove navbar to side to accomodate sidebar resize
addGlobalStyle('.sidebar {margin-left:0px;}') // Start sidebar at left of screen
addGlobalStyle('.navbar-minimize-fixed { display:none; }') // remove toggle button
addGlobalStyle('.minimize-sidebar { display:none; }') // remove toggle button

// resizable textboxes
addGlobalStyle('textarea.form-control {resize: vertical;}')
addGlobalStyle('input { caret-color: transparent; }') // remove input caret

// tab color
addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-color: var(--tab-colour);}')
addGlobalStyle('.nav-pills.nav-pills-info .nav-item .nav-link.active, .nav-pills.nav-pills-info .nav-item .nav-link.active:focus, .nav-pills.nav-pills-info .nav-item .nav-link.active:hover{background-image: var(--tab-colour);}')

// fix body + footer going blue
addGlobalStyle('.main-panel>.content {background-color: var(--content-bg-color);}')
addGlobalStyle('.footer {background-color: var(--content-bg-color);}')

   // -- FUNCTIONS --

window.onload = function(){
    GM_log('window loaded');
    document.body.className="";
    waitForElm('.modal-dialog').then((elm) => {
        makeModal();
    });
};

window.onurlchange = function(){
    GM_log('url changed');
    document.body.className="";
    waitForElm('.modal-dialog').then((elm) => {
        makeModal();
    });
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

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            console.log('modal opened');
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function waitForDelete(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector) == null) {
            console.log('modal removed');
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector) == null) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
function waitRemove() {
    waitForDelete('.modal-dialog').then((elm) => {
        console.log('modal removed')
        waitForElm('.modal-dialog').then((elm) => {
            makeModal();
        });
    });
}
function makeModal() {
    console.log('modal classd');
    document.getElementsByClassName('modal-dialog')[0].parentElement.parentElement.parentElement.classList.add("max-index");
    waitRemove();
}

   // -- END OF SCRIPT --
