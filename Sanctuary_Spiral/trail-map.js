// 🌀 trail-map.js — Shimmer Toggle Ritual

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Shimmer";
  toggleButton.id = "shimmer-toggle";
  toggleButton.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #a78bfa;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    z-index: 1000;
  `;
  document.body.appendChild(toggleButton);

  let shimmerMode = true;

  toggleButton.addEventListener("click", () => {
    shimmerMode = !shimmerMode;
    document.body.classList.toggle("veil-mode", !shimmerMode);
    document.body.classList.toggle("shimmer-mode", shimmerMode);
  });
});
