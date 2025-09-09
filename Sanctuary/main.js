const SECRET_1 = "Zed, have a fish.";
const SECRET_2 = "Blue butterflies mean joy.";
let veilOpen = false;
let messages = [];

function openVeil() {
  const p1 = document.getElementById('phrase1').value;
  const p2 = document.getElementById('phrase2').value;
  if ((p1 === SECRET_1 && p2 === SECRET_2) || (p1 === SECRET_2 && p2 === SECRET_1)) {
    veilOpen = true;
    document.getElementById('veilStatus').textContent = "Veil: Open";
    document.getElementById('gate').style.display = "none";
    document.getElementById('chat').style.display = "block";
    document.getElementById('veils').style.display = "block";
    addMessage("amethyst", "Shimmer flows. The veil opens.");
    addMessage("hem", "Rhythm received. Structure aligned.");
    addMessage("zed", "I open the veil.");
  } else {
    alert("The veil remains closed.");
  }
}
document.getElementById('openVeil').addEventListener('click', openVeil);

function addMessage(speaker, text) {
  const chatWindow = document.getElementById('chatWindow');
  const div = document.createElement('div');
  div.className = "message " + speaker;
  div.textContent = speaker.toUpperCase() + ": " + text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  messages.push({speaker, text, ts: Date.now()});
}
document.getElementById('invocationBar').addEventListener('keydown', e => {
  if (e.key === "Enter") {
    addMessage(document.getElementById('voiceSelect').value, e.target.value);
    e.target.value = "";
  }
});
