const images = document.querySelectorAll("img[data-src]");

console.log("images", images);

const loadImage = (img) => {
  img.src = img.dataset.src;
};

const observerImg = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observerImg.unobserve(entry.target); //todo: Видаляє елемент зі списку відслідковуваних елементів
        console.log(`Елемент ${entry.target.alt} видно!`);
      }
    });
  },
  {
    threshold: 0.9, //todo: Викликається, коли 90% об'єкта видно
  }
);

images.forEach((img) => observerImg.observe(img));
console.log(
  "-----------------------------------------------------------------"
);
