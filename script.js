/**
 * PB02 GYM - Interactive Website Script
 */

document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Mobile Menu Navigation Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      // Optional accessible aria attribute toggle
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  // 2. Active Page Navigation Link Highlighting
  const currentPage = window.location.pathname.split("/").pop();
  const navItems = document.querySelectorAll(".nav-links a");

  navItems.forEach(item => {
    const itemHref = item.getAttribute("href");
    if (currentPage === itemHref || (currentPage === "" && itemHref === "index.html")) {
      item.classList.add("active");
    }
  });

  // 3. Contact Form Submission Handling
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevents page reload

      // Capture Input Values Safely
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic Validation Check
      if (name === "" || phone === "" || message === "") {
        alert("Please fill out all the fields before submitting.");
        return;
      }

      // Display Success Confirmation to user
      alert(`Thank you, ${name}! Your request has been received. Our PB02 Gym team will contact you shortly via phone.`);
      
      // Reset form fields natively
      contactForm.reset();
    });
  }
});
