// Simple AI chatbot logic

const chatEl = document.getElementById("chat");
const inputEl = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Add message to chat window
function addMessage(text, from = "bot") {
  const msg = document.createElement("div");
  msg.className = from === "user" ? "msg-user" : "msg-bot";
  msg.textContent = (from === "user" ? "You: " : "Bot: ") + text;
  chatEl.appendChild(msg);
  chatEl.scrollTop = chatEl.scrollHeight;
}

// Very simple "AI" that matches patterns in the text
function generateReply(userText) {
  const text = userText.toLowerCase().trim();

  if (!text) {
    return "Say something and I'll try to respond.";
  }

  // Greeting
  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return "Hi! How are you feeling today?";
  }

  // How are you
  if (text.includes("how are you")) {
    return "I'm just code, but I'm running fine. How are you?";
  }

  // Name
  if (text.includes("your name")) {
    return "I'm a tiny JavaScript chatbot you just created.";
  }

  // Simple sentiment
  if (text.includes("sad") || text.includes("depressed") || text.includes("unhappy")) {
    return "I'm sorry you're feeling that way. Want to tell me more about it?";
  }

  if (text.includes("happy") || text.includes("great") || text.includes("good")) {
    return "Nice! I like hearing that things are going well.";
  }

  // Fallback: reflect back part of the sentence
  const words = text.split(/\s+/);
  if (words.length > 3) {
    const lastPart = words.slice(-3).join(" ");
    return `Why do you say "${lastPart}"?`;
  }

  return "Interesting. Tell me more.";
}

// Handle sending messages
function handleSend() {
  const userText = inputEl.value;
  if (!userText.trim()) return;

  addMessage(userText, "user");
  inputEl.value = "";

  const reply = generateReply(userText);
  addMessage(reply, "bot");
}

sendBtn.addEventListener("click", handleSend);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
});

// Initial message
addMessage("Hi, I'm your JavaScript AI chatbot. Say hi!");
