// Scroll animations for sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.8s ease-out';
  observer.observe(section);
});
const response = await fetch("http://127.0.0.1:5000/plan-trip", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ destination, days, interests }),
});
