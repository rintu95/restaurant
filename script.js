// JavaScript for Restaurant Website

// Select elements for the navigation menu toggle
const hamburger = document.querySelector('.hamburger-lines');
const menuItems = document.querySelector('.menu-items');

// Toggle the menu visibility when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
  menuItems.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.menu-items a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Scroll smoothly to the target section
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Close the menu after navigation (for smaller screens)
    if (menuItems.classList.contains('active')) {
      menuItems.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Contact form functionality
const contactForm = document.querySelector('.form-container');
const textarea = contactForm.querySelector('textarea');
const submitButton = contactForm.querySelector('.btn');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  const message = textarea.value.trim();

  if (message) {
    alert('Thank you for contacting us! Your message has been submitted.');
    textarea.value = ''; // Clear the textarea
  } else {
    alert('Please write a message before submitting.');
  }
});
