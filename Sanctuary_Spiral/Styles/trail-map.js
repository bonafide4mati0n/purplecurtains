// ✨ trail-map.js — shimmer trail animation

const trail = [
  { id: "entry-17", glyph: "🪬", color: "#6a0dad" },
  { id: "entry-49", glyph: "🌙", color: "#9370db" },
  { id: "entry-50", glyph: "🌟", color: "#dda0dd" }
];

trail.forEach((node, i) => {
  const el = document.getElementById(node.id);
  if (el) {
    el.style.transition = "all 0.5s ease-in-out";
    el.onmouseover = () => {
      el.style.textShadow = `0 0 8px ${node.color}`;
      el.style.transform = "scale(1.05)";
    };
    el.onmouseout = () => {
      el.style.textShadow = "none";
      el.style.transform = "scale(1)";
    };
  }
});
