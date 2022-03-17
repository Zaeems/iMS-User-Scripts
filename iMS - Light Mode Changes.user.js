// ==UserScript==
// @name         iMS - Light Mode Changes
// @namespace    http://imssystems.tech/
// @version      0.2.2
// @description  Makes light mode superior.
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

// make main scrollbar red, with transparent-red background
addGlobalStyle('::-webkit-scrollbar-thumb {background-color: #ff00006b;}')
addGlobalStyle('::-webkit-scrollbar-track {background-color: #f7d6d666;}')

// make fonts more readable (black main text)
addGlobalStyle('.white-content .modal .modal-dialog .modal-content .modal-body h1, .white-content .modal .modal-dialog .modal-content .modal-body h2, .white-content .modal .modal-dialog .modal-content .modal-body h3, .white-content .modal .modal-dialog .modal-content .modal-body h4, .white-content .modal .modal-dialog .modal-content .modal-body h5, .white-content .modal .modal-dialog .modal-content .modal-body h6, .white-content .modal .modal-dialog .modal-content .modal-body p {color: #000000;}')
addGlobalStyle('.text-muted {color: #000000!important;}')

// make green and red texts darker, to be more readable
addGlobalStyle('.text-success {color: #008000!important;}')
addGlobalStyle('.text-danger {color: #ff0000!important;}')

// make fonts more readable (black titles)
addGlobalStyle('.white-content .ReactTable .rt-td, .white-content .ReactTable .rt-thead .rt-th {color: rgb(0 0 0)!important;}')
addGlobalStyle('.white-content .card:not(.card-white) .card-body .card-category, .white-content .card:not(.card-white) .card-body .card-description, .white-content .card:not(.card-white) .card-body .card-title, .white-content .card:not(.card-white) .card-header .card-title {color: #000000;}')
addGlobalStyle('.card .card-header .card-category {color: #000000;}')

// make fonts more readable (grey-ish subtitles)
addGlobalStyle('.ReactTable .rt-td {color: hsl(0deg 0% 25% / 80%)!important;}')

// change font to trebuchet
addGlobalStyle('body {font-family: "Trebuchet MS"}')

// adjust sortBy to be more visible
addGlobalStyle('.ReactTable .rt-thead .rt-th.-cursor-pointer>div:first-of-type:after, .ReactTable .rt-thead .rt-th.-cursor-pointer>div:first-of-type:before {opacity: 0.7;}')

// make default sidebar color purple
addGlobalStyle('.sidebar {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=red], .sidebar[data=red] {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=orange], .sidebar[data=orange] {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=green], .sidebar[data=green] {background: linear-gradient(0deg,#e14eca,#e14eca);}')
addGlobalStyle('.off-canvas-sidebar[data=blue], .sidebar[data=blue] {background: linear-gradient(0deg,#e14eca,#e14eca);}')

// end
();
