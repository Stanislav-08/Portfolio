// Change this once; it updates the profile card and the contact form.
const EMAIL = 'hello@example.com';

document.getElementById('year').textContent = new Date().getFullYear();

const mail = document.querySelector('[data-email]');
mail.textContent = EMAIL;
mail.href = `mailto:${EMAIL}`;

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) return;

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = 'Opening your email app…';
  form.reset();
});