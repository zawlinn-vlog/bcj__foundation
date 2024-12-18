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

  $(".navbars-wrapper").click(function (e) {
    /* Main Menu */
    if (e.target.closest(".navbars-parent")) {
      defSlide(e.target.closest(".navbars-menu"), "parent", "sub", "child");

      $(".navbars-icon").removeClass("fa-chevron-up");

      $(e.target).parent().children(".navbars-icon").addClass("fa-chevron-up");

      // console.log("hello");
    }

    /* SUB MENU */

    if (e.target.classList.contains("navbars-child")) {
      $(".navbars-child").removeClass("active");

      $(e.target).addClass("active");
    }
  });

  // console.log($('.navbars-child'))
});
