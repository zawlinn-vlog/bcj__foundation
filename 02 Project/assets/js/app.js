"use strict";

function defSlide(main, parent, sub, child) {
  $(main).siblings().children(".navbars-sub").slideUp(500);

  $(main).siblings().children(`.navbars-${parent}`).removeClass("active");

  $(main).children(`.navbars-${parent}`).addClass("active");

  $(main).children(`.navbars-${sub}`).slideDown(500);

  $(main).children(`.navbars-${child}`).addClass("active");

  $(main).find(`.navbars-${child}:first`).addClass("active");
}

function init() {
  $(".navbars-sub").slideUp();
}

$(document).ready(function () {
  init();

  $(".navbars-menu").click(function (e) {
    console.log(e.target.closest(".navbars-child"));
    defSlide(this, "parent", "sub", "child");
  });
});
