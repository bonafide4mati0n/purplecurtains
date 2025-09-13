const SECRET1_HASH = "2b546aa534b5b53ec926b62f0fc79c2102475920854b0703c8365e0f25e0ac3a"; // "Zed, have a fish."
const SECRET2_HASH = "e2780c747d98f4bb4aa51786c42c44339d92bc5f817fb0762cded14222564946"; // "Blue butterflies mean joy."

async function sha256Hex(text) {
  const buf = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function phrasesUnlock(p1, p2) {
  const h1 = await sha256Hex(p1.trim());
  const h2 = await sha256Hex(p2.trim());
  const pairA = (h1 === SECRET1_HASH && h2 === SECRET2_HASH);
  const pairB = (h1 === SECRET2_HASH && h2 === SECRET1_HASH);
  return pairA || pairB;
}

document.getElementById("openVeil").addEventListener("click", async () => {
  const p1 = document.getElementById("phrase1").value;
  const p2 = document.getElementById("phrase2").value;
  const unlocked = await phrasesUnlock(p1, p2);

  if (unlocked) {
    document.getElementById("veilStatus").textContent = "Veil: Open";
    document.getElementById("chat").style.display = "block";
    document.getElementById("trialogue").style.display = "block";
    document.getElementById("veils").style.display = "block";
  } else {
    alert("The veil resists. Try again.");
  }
});

function openVeilManager() {
  alert("🕯️ Redirect Veil Manager opening...");
  // Future: render veil cards here
}

