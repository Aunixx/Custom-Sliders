// Slider No 1
const slider = document.querySelector(".slider_1");
const slides = document.querySelector(".slider_1 .slides");
const slide = document.querySelectorAll(".slider_1 .slide");
const prevBtn = document.querySelector(".slider-wrapper-1 .prev");
const nextBtn = document.querySelector(".slider-wrapper-1 .next");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1 && window.innerWidth > 992) {
    currentIndex = 0;
    slides.style.transform = `translateX(${33.33}%)`;
  } else if (currentIndex < 1) {
    currentIndex = 0;
    slides.style.transform = `translateX(${10}%)`;
  }
  slide.forEach((s, index) => {
    if (index === currentIndex) {
      s.classList.add("middle");
      s.classList.remove("left", "right");
    } else if (index === currentIndex - 1) {
      s.classList.add("left");
      s.classList.remove("middle", "right");
    } else if (index === currentIndex + 1) {
      s.classList.add("right");
      s.classList.remove("middle", "left");
    } else {
      s.classList.remove("middle", "left", "right");
    }
  });
  if (window.innerWidth < 992) {
    if (window.innerWidth > 768) {
      if (currentIndex < 1) {
        slides.style.transform = `translateX(${33.33}%)`;
      } else if (currentIndex < 2) {
        slides.style.transform = `translateX(${0}%)`;
      } else {
        slides.style.transform = `translateX(-${
          (currentIndex - 1) * 300 - 30
        }px)`;
      }
    } else {
      slides.style.transform = `translateX(-${currentIndex * 300 - 30}px)`;
    }
  } else {
    slides.style.transform = `translateX(-${(currentIndex - 1) * 33.33}%)`;
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > slide.length - 1) {
    currentIndex = slide.length - 1;
  }

  slide.forEach((s, index) => {
    if (index === currentIndex) {
      s.classList.add("middle");
      s.classList.remove("left", "right");
    } else if (index === currentIndex - 1) {
      s.classList.add("left");
      s.classList.remove("middle", "right");
    } else if (index === currentIndex + 1) {
      s.classList.add("right");
      s.classList.remove("middle", "left");
    } else {
      s.classList.remove("middle", "left", "right");
    }
  });
  if (window.innerWidth < 992) {
    if (window.innerWidth > 768) {
      if (currentIndex < 2) {
        slides.style.transform = `translateX(${0}%)`;
      } else {
        slides.style.transform = `translateX(-${
          (currentIndex - 1) * 300 - 30
        }px)`;
      }
    } else {
      slides.style.transform = `translateX(-${currentIndex * 300 - 30}px)`;
    }
  } else {
    slides.style.transform = `translateX(-${(currentIndex - 1) * 33.33}%)`;
  }
});

// Slider No 2
const slider2 = document.querySelector(".slider_2");
const slides2 = document.querySelector(".slider_2 .slides");
const slide2 = document.querySelectorAll(".slider_2 .slide");
const prevBtn2 = document.querySelector(".slider-wrapper-2 .prev");
const nextBtn2 = document.querySelector(".slider-wrapper-2 .next");

let currentIndex2 = 0;

prevBtn2.addEventListener("click", () => {
  currentIndex2--;
  if (currentIndex2 < 1) {
    currentIndex2 = 0;
  }
  slide2.forEach((slide, index) => {
    const diff = Math.abs(currentIndex2 - index);
    if (diff === 0) {
      slide.classList.add("middle-slide");
      slide.classList.remove("adjacent-slide");
      slide.classList.remove("other-slide");
    } else if (
      diff === 1 &&
      (currentIndex2 !== 0 || index !== slides.length - 1)
    ) {
      slide.classList.add("adjacent-slide");
      slide.classList.remove("middle-slide");
      slide.classList.remove("other-slide");
    } else {
      slide.classList.remove("middle-slide");
      slide.classList.remove("adjacent-slide");
      slide.classList.add("other-slide");
    }
  });

  if (currentIndex2 < 1) {
    slides2.style.transform = `translateX(${40}%)`;
  } else if (currentIndex2 < 2) {
    slides2.style.transform = `translateX(${20}%)`;
  } else {
    slides2.style.transform = `translateX(-${(currentIndex2 - 2) * 16}%)`;
  }
  if (window.innerWidth < 1024 && window.innerWidth > 600) {
    if (currentIndex2 < 1) {
      slides2.style.transform = `translateX(${230}px)`;
    } else if (currentIndex2 < 2) {
      slides2.style.transform = `translateX(${100}px)`;
    } else {
      slides2.style.transform = `translateX(-${
        ((currentIndex2 - 2) * window.innerWidth) / 6
      }px`;
    }
  } else if (window.innerWidth < 600 && window.innerWidth > 500) {
    if (currentIndex2 < 1) {
      slides2.style.transform = `translateX(-${0}px`;
    } else {
      slides2.style.transform = `translateX(-${
        100 + currentIndex2 * (window.innerWidth / 6)
      }px`;
    }
  } else if (window.innerWidth < 500) {
    if (currentIndex2 < 1) {
      slides2.style.transform = `translateX(-${0}px`;
    } else {
      slides2.style.transform = `translateX(-${
        100 + currentIndex2 * (window.innerWidth / 5.5)
      }px`;
    }
  } else {
    if (currentIndex2 < 2) {
      slides2.style.transform = `translateX(${currentIndex2 * 230}px)`;
    } else if (currentIndex2 < 3) {
      slides2.style.transform = `translateX(${4}%)`;
    } else {
      slides2.style.transform = `translateX(-${(currentIndex2 - 2) * 180}px`;
    }
  }
});

nextBtn2.addEventListener("click", () => {
  currentIndex2++;
  if (currentIndex2 > slide2.length - 1) {
    currentIndex2 = slide2.length - 1;
  }

  slide2.forEach((slide, index) => {
    const diff = Math.abs(currentIndex2 - index);
    if (diff === 0) {
      slide.classList.add("middle-slide");
      slide.classList.remove("adjacent-slide");
      slide.classList.remove("other-slide");
    } else if (
      diff === 1 &&
      (currentIndex2 !== 0 || index !== slides.length - 1)
    ) {
      slide.classList.add("adjacent-slide");
      slide.classList.remove("middle-slide");
      slide.classList.remove("other-slide");
    } else {
      slide.classList.remove("middle-slide");
      slide.classList.remove("adjacent-slide");
      slide.classList.add("other-slide");
    }
  });

  if (window.innerWidth < 1024 && window.innerWidth > 600) {
    if (currentIndex2 < 2) {
      slides2.style.transform = `translateX(${window.innerWidth / 8}px)`;
    } else if (currentIndex2 < 3) {
      slides2.style.transform = `translateX(${0}%)`;
    } else {
      slides2.style.transform = `translateX(-${
        ((currentIndex2 - 2) * window.innerWidth) / 6
      }px`;
    }
  } else if (window.innerWidth < 600 && window.innerWidth > 500) {
    slides2.style.transform = `translateX(-${
      100 + currentIndex2 * (window.innerWidth / 6)
    }px`;
  } else if (window.innerWidth < 500 && window.innerWidth > 400) {
    slides2.style.transform = `translateX(-${
      100 + currentIndex2 * (window.innerWidth / 5.8)
    }px`;
  } else if (window.innerWidth < 400) {
    slides2.style.transform = `translateX(-${
      100 + currentIndex2 * (window.innerWidth / 5.5)
    }px`;
  } else {
    if (currentIndex2 < 2) {
      slides2.style.transform = `translateX(${currentIndex2 * 230}px)`;
    } else if (currentIndex2 < 3) {
      slides2.style.transform = `translateX(${4}%)`;
    } else {
      slides2.style.transform = `translateX(-${(currentIndex2 - 2) * 180}px`;
    }
  }
});

// Slider No 3

var swiper = new Swiper(".slider_3", {
  slidesPerView: 1.5,
  spaceBetween: 42,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
console.log(swiper);

// Slider No 4

var swiper4 = new Swiper(".slider-4", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper42 = new Swiper(".slider-4-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let avatars = document.querySelectorAll(".avatar");

swiper42.on("slideChange", () => {
  let next = swiper42.realIndex + 1;
  let prev = swiper42.realIndex - 1;
  let active = swiper42.realIndex;
  console.log(swiper42);
  avatars.forEach((avatar) => {
    avatar.classList.remove("avatar-active");
    avatar.classList.remove("avatar-prev");
    avatar.classList.remove("avatar-next");
  });
  if (next < swiper42.slides.length) {
    avatars[next].classList.add("avatar-next");
  }
  if (swiper42.realIndex > 0) {
    avatars[prev].classList.add("avatar-prev");
  }
  avatars[active].classList.add("avatar-active");
});

// Slider No 5

var swiper5 = new Swiper(".slider_5", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
