const slider = document.querySelector(".slider_1");
const slides = document.querySelector(".slider_1 .slides");
const slide = document.querySelectorAll(".slider_1 .slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1 && window.innerWidth > 992) {
    currentIndex = 0;
    slides.style.transform = `translateX(${33.33}%)`;
  } else {
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
  if (currentIndex > slide.length - 1 && window.innerWidth > 768) {
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
