// ==UserScript==
/* globals jQuery, $, waitForKeyElements */
// @name         iMS - FULL Sidebar
// @namespace    http://imssystems.tech/
// @version      0.1.8
// @description  Makes the sidebar height double
// @author       You
// @match        https://*.imssystems.tech/*
// @icon         https://staging.imssystems.tech/favicon.png
// ==/UserScript==

/*function toggleOnLoad(){
    document.getElementsByClass("minimize-sidebar")[0].click();
}*/

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
/*function toggleOnLoad(){
  $(document).ready(function() {
    var doc = $(document).find("switch-1");
    doc.each(function() {
       if ($(this).class() == "custom-control-input") {
         $(this).click();
       }
    });
  });
}*/

function toggleOnLoad(){
document.getElementById('switch-1').click(); // = 'true';
}

addGlobalStyle('.sidebar {height: 200%!important; margin-top: 0px;}')
addGlobalStyle('.footer .nav {margin-left: 15rem;}')
addGlobalStyle('.navbar .navbar-brand {margin-left: 11rem;}')
toggleOnLoad()

();
