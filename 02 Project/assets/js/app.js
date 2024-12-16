"use strict";

// slide down fun

function slideDown(el) {
  $(el).slideDown(500);
}
function slideUp(el) {
  $(el).slideUp(500);
}

function slideUp(el) {
  $(el).slideUp(500);
}

function init() {
  slideUp(".navbars-sub");
}

$(document).ready(function () {
  init();

  $(".navbars-link").click(function (e) {
    console.log($(this).next().hasClass("navbars-sub"));

    if ($(this).next().hasClass("navbars-sub")) {
      $(".navbars-sub").each((ind, el) => {
        console.log(el, ind);
        slideUp(el);

        $(el).find(".navbars-link").removeClass("active");
      });

      $(this).next().slideDown(500);

      $(this).next().find(".navbars-link:first").addClass("active");

      $(".navbars-parent").removeClass("active");

      $(e.target).addClass("active");
    }
  });
});
