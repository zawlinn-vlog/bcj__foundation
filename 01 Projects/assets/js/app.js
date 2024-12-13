'use script';

$(document).ready(function () {
  let startPoint = 0;

  /*  START NAVBAR  */
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);

    if (position > 200) {
      $('nav').addClass('navmenus');
    } else {
      $('nav').removeClass('navmenus');
    }
  });

  $('.navbuttons').on('click', function () {
    $(this).toggleClass('crossxs');
  });

  /* END NAVBAR */

  /* START PROPERTY SECTION */

  $('.propertylists').click(function () {
    // $('.propertylists').each(function (ind, val) {
    //   $(val).removeClass('activeitems');
    // });
    $(this).addClass('activeitems').siblings().removeClass('activeitems');

    let ftvalue = $(this).attr('data-filter');
    console.log(ftvalue);

    if (ftvalue == 'all') {
      $('.filters').show();
    } else {
      $('.filters').hide();
      $('.filters').not(`.${ftvalue}`).hide();
      $('.filters').filter(`.${ftvalue}`).show();
    }
  });

  lightbox.option({
    showImageNumberLabel: false,
  });
  /* END PROPERTY SECTION */
});
