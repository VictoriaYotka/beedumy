const common = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  swipe: true,
  pauseOnHover: true,
  // rtl: true,
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
        initialSlide: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        initialSlide: 1,
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
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        initialSlide: 1,
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
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 923,
      settings: {
        slidesToShow: 3,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
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
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 923,
      settings: {
        slidesToShow: 3,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
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
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
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
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
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
  categoriesSectionSettings,
  requestedCoursesSectionSettings,
  teachersSectionSettings,
  feedbackSectionSettings,
  articleSectionSettings,
  categoriesPageSettings,
};

export default carouselsSettings;
