/* =========================
   Accordion behaviour
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
