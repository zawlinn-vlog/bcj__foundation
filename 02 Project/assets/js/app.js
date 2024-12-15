"use strict";

// slide down fun

function slideDown(el) {
  $(el).slideDown(500);
}
function slideUp(el) {
  $(el).slideUp(500);
}

function clearClass(n) {
  $(".navbars-menu__link").each(function (ind, el) {
    $(el).removeClass(n);
  });
}

function toggleClass(el, cname) {}

function init() {
  //   slideUp(".navbars-submenu");
}

$(document).ready(function () {
  init();

  $(".navbars-link").on("click", function (e) {
    e.preventDefault();
    // const el = this.parentElement;
    console.log();

    toggleClass(this, "active");
  });
});
