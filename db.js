const messages = [
  "hey man u free?",
  "ena panra? saptiya",
  "enada pesavey matra :(",
];

async function getMessages() {
  const allMessages = messages.map((msg) => `<li>${msg}</li>`).join("");
  return `<ul>${allMessages}</ul>`;
}

module.exports = { getMessages };
