//

'use strict';

// $(document).ready(function () {
//   // const getWidth = $('.nav-item').width();
//   // // console.log(getWidth);

//   // $('.bottom-line').width(getWidth);
//   let pos = 0;

//   function activeBtn(el) {
//     const getWidth = $(el).width();
//     const xloc = el.getBoundingClientRect();

//     $(el).addClass('navbar-item__active');

//     $('.bottom-line').css({
//       width: getWidth,
//       left: xloc.x,
//       bottom: xloc.top,
//       zIndex: 3,
//       opacity: 1,
//     });
//   }

//   activeBtn($('.navbar-item').get(0));

//   $('.navbar-item').each(function () {
//     $(this).on('click', function () {
//       $('.navbar-item').removeClass('navbar-item__active');

//       activeBtn(this);

//       // const getWidth = $(this).width();
//       // const xloc = this.getBoundingClientRect();

//       // console.log(getWidth, xloc);

//       // $(this).addClass('navbar-item__active');

//       // console.log(pos);

//       // $('.bottom-line').css({
//       //   width: getWidth,
//       //   left: xloc.x,
//       //   bottom: xloc.top,
//       //   zIndex: 3,
//       // });
//     });
//   });
// });

$(document).ready(function () {
  // SHOW ALL
  function showAll() {
    $('.property-img__container').html(' ');

    let i = 0,
      j = 0,
      cat = ['home', 'decoration', 'furniture', 'office'],
      html,
      count = 0;

    function htmlEl(name, num, arr, count) {
      html = `

        <figure class="property-img__cover m-0" data-lightbox="images">
          <img src="assets/img/gallery/${name}${num}.jpg" alt="Property Image" data-cat="${arr}"   class="property__img property-pic__${count}" /> 
        </figure>
       `;
    }
    // create el
    const createEl = function (name, num) {
      if (count <= 3) {
        htmlEl(name, num, cat[0], count);
      } else if (count >= 4 && count <= 7) {
        htmlEl(name, num, cat[1], count);
      } else if (count >= 8 && count <= 11) {
        htmlEl(name, num, cat[2], count);
      } else {
        htmlEl(name, num, cat[3], count);
      }
      count++;

      $('.property-img__container').append(html);
    };
    // for loop js

    while (i < 15) {
      i++;
      if (i <= 9) {
        createEl('image', i);
      } else {
        j++;
        createEl('home', j);
      }
    }
  }

  showAll();

  $('#all').on('click', showAll);

  //

  // SHOW FILTER

  $('.btn-property').click(function () {
    $('.btn-property').each(function () {
      $(this).removeClass('btn-property__active');
    });

    $(this).addClass('btn-property__active');

    const getIndex = this.id.toLowerCase();

    if (getIndex !== 'all') {
      $('.property__img').filter(function () {
        $(this).toggle($(this).data().cat.toLowerCase().indexOf(getIndex) > -1);
        console.log($(this).data().cat, getIndex);
      });
    }
  });
});
