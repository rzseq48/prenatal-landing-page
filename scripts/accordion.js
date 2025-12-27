/* =========================
   Accordion behaviour so that we can see in pc and phone
   ========================= */

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-header');

  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;

      // Toggle active state
      item.classList.toggle('active');
    });
  });
});
