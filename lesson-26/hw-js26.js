const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const handleResize = () => {
  const min = Number(slider.min) || 1;
  const max = Number(slider.max) || 100;
  const minWidth = 100;
  const maxWidth = 600;
  const percent = (slider.value - min) / (max - min);
  const width = minWidth + percent * (maxWidth - minWidth);
  image.style.width = width + "px";
};

slider.addEventListener("input", _.debounce(handleResize, 50));

// --- Плавне переміщення box за курсором з debounce від lodash ---
const box = document.getElementById("box");
box.style.width = "100px";
box.style.height = "100px";
box.style.background = "#1976d2";
box.style.position = "absolute";
box.style.left = "0px";
box.style.top = "0px";

function moveBox(event) {
  box.style.left = event.clientX + "px";
  box.style.top = event.clientY + "px";
}

document.addEventListener("mousemove", _.debounce(moveBox, 100));