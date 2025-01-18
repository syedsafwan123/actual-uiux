import { testimonials } from './testimonials.js';

document.addEventListener("DOMContentLoaded", () => {
  const testimonialContent = document.querySelector(".testimonial-content");
  const prevBtn = document.querySelector(".arrow.left-arrow");
  const nextBtn = document.querySelector(".arrow.right-arrow");

  let currentIndex = 0;

  // Dynamically render testimonials
  const renderTestimonials = () => {
    testimonialContent.innerHTML = testimonials
      .map(
        (testimonial, index) => `
          <div class="testimonial-item ${index === currentIndex ? "active" : ""}">
            <p>"${testimonial.message}"</p>
            <h4>${testimonial.name}</h4>
            <span>${testimonial.email}</span>
          </div>
        `
      )
      .join("");
  };

  const showTestimonial = (index) => {
    const items = document.querySelectorAll(".testimonial-item");
    items.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  };

  const fadeEffect = () => {
    const items = document.querySelectorAll(".testimonial-item");
    items[currentIndex].classList.remove("active");
    setTimeout(() => {
      items[currentIndex].classList.add("active");
    }, 500);
  };

  prevBtn.addEventListener("click", () => {
    fadeEffect();
    currentIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    fadeEffect();
    currentIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
  });

  // Render and initialize
  renderTestimonials();
  showTestimonial(currentIndex);
});
