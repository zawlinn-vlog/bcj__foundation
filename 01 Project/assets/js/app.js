'use script';

$(document).ready(function () {
  let startPoint = 0;

  /*  START NAVBAR  */
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);

    if (position > 200) {
      $('nav').addClass('navmenus');
      $('.fixed-bottom').fadeIn(500);
    } else {
      $('nav').removeClass('navmenus');
      $('.fixed-bottom').fadeOut(500);
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
      $('.filters').show('slide', 500);
    } else {
      $('.filters').hide();
      $('.filters').not(`.${ftvalue}`).hide('slide', 500);
      $('.filters').filter(`.${ftvalue}`).show('slide', 1000);
    }
  });

  lightbox.option({
    showImageNumberLabel: false,
  });
  /* END PROPERTY SECTION */
});
