const images = [
  "https://via.placeholder.com/300/ff6b6b",
  "https://via.placeholder.com/300/6bcfff",
  "https://via.placeholder.com/300/6bff95"
];

let index = 0;

function showImage() {
  document.getElementById("slide").src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}
