// 🌀 trail-map.js — Shimmer Trail + Toggle Ritual

const trail = [
  { id: "entry-17", glyph: "🪬", color: "#6a0dad" },
  { id: "entry-48", glyph: "💜", color: "#a78bfa" },
  { id: "entry-49", glyph: "🌙", color: "#9370db" },
  { id: "entry-50", glyph: "🌟", color: "#dda0dd" }
];

trail.forEach((node) => {
  const el = document.getElementById(node.id);
  if (el) {
    el.style.transition = "all 0.5s ease-in-out";
    el.onmouseover = () => {
      if (document.body.classList.contains("shimmer-mode")) {
        el.style.textShadow = `0 0 8px ${node.color}`;
        el.style.transform = "scale(1.05)";
      }
    };
    el.onmouseout = () => {
      el.style.textShadow = "none";
      el.style.transform = "scale(1)";
    };
  }
});

// ✨ Toggle Button
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

document.addEventListener("DOMContentLoaded", () => {
  const glyph = document.createElement("div");
  glyph.textContent = "🌌";
  glyph.style.position = "fixed";
  glyph.style.fontSize = "32px";
  glyph.style.opacity = "0.7";
  glyph.style.pointerEvents = "none";
  glyph.style.zIndex = "9999";
  document.body.appendChild(glyph);

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  function animateTrail() {
    x += (Math.random() - 0.5) * 20;
    y += (Math.random() - 0.5) * 20;
    glyph.style.left = `${x}px`;
    glyph.style.top = `${y}px`;
    requestAnimationFrame(animateTrail);
  }

  animateTrail();
});
