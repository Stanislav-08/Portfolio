// Automatically set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple front-end contact form handler
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  // Opens user's default email client with pre-filled details (works on static hosting without a backend)
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;

  formStatus.textContent = 'Opening your email client...';
  contactForm.reset();
});
