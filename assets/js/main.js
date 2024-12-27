/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

function imgGallery() {
  const mainImg = document.querySelector('.details__img')
  const smallImg = document.querySelectorAll('.details__small-img'); // Select all small images

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src ; // Update the main image source
    });
  });
}
document.addEventListener("DOMContentLoaded", imgGallery);

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});


/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});


/*=============== PRODUCTS TABS ===============*/
// Select tabs and corresponding tab contents
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[content]');

// Loop through each tab and add click event listener
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Find the target tab content using the data-target attribute
    const target = document.querySelector(tab.dataset.target);
      // console.log(target)
    // Remove the active class from all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });


    // Add active class to the targeted tab content
    target.classList.add('active-tab');

    // Remove active class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    // Add active class to the clicked tab
    tab.classList.add('active-tab');
  });
});


