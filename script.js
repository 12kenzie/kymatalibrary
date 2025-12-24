// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');

  hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });
});