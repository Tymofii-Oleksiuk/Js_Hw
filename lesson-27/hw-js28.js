const lazyImages = document.querySelectorAll('.lazy-image');

lazyImages.forEach(img => {
  img.classList.add('placeholder');
});

function loadImage(img) {
  img.src = img.dataset.src;
  img.onload = () => {
    img.classList.add('loaded');
    img.classList.remove('placeholder');
  };
}

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      obs.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1 
});

lazyImages.forEach(img => observer.observe(img));
