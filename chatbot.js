let botVisible = false;

function getBotResponse(userText) {
  userText = userText.toLowerCase();

  for (let key in data) {
    const item = data[key];
    if (userText.includes(key.toLowerCase()) || userText.includes(item.name.toLowerCase())) {
      return `${item.name}: ${item.total} L water. 💧 Tip: ${item.tip}`;
    }
  }

  if (userText.includes("hello") || userText.includes("hi")) {
    return "👋 Hello! Ask me about water footprints (coffee, rice, shower, car wash...).";
  }
  if (userText.includes("tip")) {
    return "🌱 Quick tip: Take shorter showers, fix leaks, and use efficient appliances.";
  }
  if (userText.includes("save")) {
    return "💡 Save water by:\n1️⃣ Turning off taps\n2️⃣ Using dual flush toilets\n3️⃣ Running full laundry loads.";
  }

  return "🤔 I don’t know that item. Try asking about coffee, rice, shower, milk, or t-shirt.";
}

function toggleChat() {
  const box = document.getElementById("chatbox");
  botVisible = !botVisible;
  if (botVisible) {
    box.classList.add("show");
  } else {
    box.classList.remove("show");
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const userText = input.value.trim();
  if (!userText) return;

  let userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = userText;
  chatBody.appendChild(userMsg);

  let botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.textContent = getBotResponse(userText);
  chatBody.appendChild(botMsg);

  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = "";
}
