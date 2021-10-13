$(document).ready(function(){
    "use strict";
    console.log("main.js loaded");

    paper.install(window);
    paper.setup(document.getElementById("mainCanvas"));

   

    paper.view.draw();

});
