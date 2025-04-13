// FAQ Expand/Collapse
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            answer.style.display = 'none';
            question.setAttribute('aria-expanded', 'false');
            question.classList.remove('active');
        } else {
            answer.style.display = 'block';
            question.setAttribute('aria-expanded', 'true');
            question.classList.add('active');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const toggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.price');

toggle.addEventListener('change', () => {
  prices.forEach(price => {
    const monthly = price.getAttribute('data-monthly');
    const yearly = price.getAttribute('data-yearly');
    price.textContent = toggle.checked ? `$${yearly}` : `$${monthly}`;
  });
});