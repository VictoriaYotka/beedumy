function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

const common = {
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToScroll: 1,
  swipe: true,
  pauseOnHover: true,
  // initialSlide: 1,
};

// homepage
const categoriesSectionSettings = {
  ...common,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5.99,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 923,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const requestedCoursesSectionSettings = {
  ...common,
  autoplaySpeed: 2000,
  slidesToShow: 2.99,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const teachersSectionSettings = {
  ...common,
  autoplaySpeed: 2000,
  slidesToShow: 3.99,
  responsive: [
    {
      breakpoint: 923,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const feedbackSectionSettings = {
  ...common,
  autoplaySpeed: 2000,
  slidesToShow: 3.99,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 923,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const articleSectionSettings = {
  ...common,
  autoplaySpeed: 2000,
  slidesToShow: 2.99,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// categories page

const categoriesPageSettings = {
  ...common,
  autoplaySpeed: 2000,
  slidesToShow: 2.99,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const carouselsSettings = {
  getRandomInt,
  categoriesSectionSettings,
  requestedCoursesSectionSettings,
  teachersSectionSettings,
  feedbackSectionSettings,
  articleSectionSettings,
  categoriesPageSettings,
};

export default carouselsSettings;
