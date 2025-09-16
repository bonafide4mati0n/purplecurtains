// 🌗 style-mode-toggle.js — toggle between shimmer view and silence veil

document.getElementById("toggleStyle").addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("silence-veil");

  if (body.classList.contains("silence-veil")) {
    body.style.backgroundColor = "#f4f4f4";
    body.style.color = "#333";
  } else {
    body.style.backgroundColor = "#fdf6ff";
    body.style.color = "#4b0082";
  }
});
