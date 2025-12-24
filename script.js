// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');

  hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });

  // Typing effect 

  const el = document.getElementById('typed');
  const text = "Welcome to Kymata's Library";
  let i = 0;
  let cursorVisible = true;

  // Cursor blink loop (runs independently)
  setInterval(() => {
    cursorVisible = !cursorVisible;
    render();
  }, 500); // blink speed

  // Typing loop
  function typeWriter() {
    if (i < text.length) {
      i++;
      render(); // update text + cursor every step
      setTimeout(typeWriter, 80); // typing speed
    }
  }

  // Render function: shows typed text + cursor
  function render() {
    const cursor = cursorVisible ? "|" : "";
    el.textContent = text.slice(0, i) + cursor;
  }

  typeWriter();






});

