// === Smooth Live Search Filter ===
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const links = document.querySelectorAll('.links a');

  links.forEach(link => {
    const text = link.textContent.toLowerCase();
    if (text.includes(query)) {
      link.classList.remove('hide');
    } else {
      link.classList.add('hide');
    }
  });
});

// === Animated Counters ===
const counters = document.querySelectorAll('.counter');
const speed = 120;

function animateCounters() {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

// Trigger animation when stats sidebar enters viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  });
});
observer.observe(document.querySelector('#stats'));
