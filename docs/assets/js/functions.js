$(function() {

  "use strict";

  /*===============================================
    Preloaders
  ===============================================*/
  var $body = $("body");

  $(window).on("load", function () {
    $body.addClass("loaded");
  });

  if ($body.attr("data-preloader") === "1") {
    $body.append($("<div class='preloader preloader-1'><div><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "2") {
    $body.append($("<div class='preloader preloader-2'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div></div>"));
  }
  else if ($body.attr("data-preloader") === "3") {
    $body.append($("<div class='preloader preloader-3'><div><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "4") {
    $body.append($("<div class='preloader preloader-4'><div><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "5") {
    $body.append($("<div class='preloader preloader-5'><div><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "6") {
    $body.append($("<div class='preloader preloader-6'><div><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "7") {
    $body.append($("<div class='preloader preloader-7'><div><span></span><span></span><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "8") {
    $body.append($("<div class='preloader preloader-8'><div><span></span><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "9") {
    $body.append($("<div class='preloader preloader-9'><div><span class='spinner-box'><span></span><span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "10") {
    $body.append($("<div class='preloader preloader-10'><div><h6 class='heading-uppercase'>Loading</h6><span class='spinner'></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "11") {
    $body.append($("<div class='preloader preloader-11'><div><span class='spinner'><span></div></div>"));
  }

});
