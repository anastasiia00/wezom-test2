$('.section').slick({
  infinite: true,
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow: '<button type="button" class="slick-next"><img src="../image/right.svg" alt=""></button>',
  prevArrow: '<button type=""button class="slick-prev"><img src="../image/left.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 1470,
      settings: {
        slidesToShow: 4,
      }
    },

    {
      breakpoint: 1140,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      }
    },
    {
      breakpoint: 860,
      settings: {
          slidesToShow: 2,
      }
    },
    {
      breakpoint: 676,
      settings: {
          slidesToShow: 1,
      }
    }

  ]
});