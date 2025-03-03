const messageInput = document.getElementById("message-input");
const chatBody = document.getElementById("chat-body");
const sendMessageBtn = document.getElementById("send-message");
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const userData = {
  message: null,
};

const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("my-[6px]", "justify-end", "flex", classes);
  div.innerHTML = content;
  return div;
};

const generateBotReply = () => {};

const handleOutGoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  messageInput.value = " ";
  const userMassage = `<p
            class="text-sm bg-purple-600 text-white px-4 py-2 rounded-t-xl rounded-bl-xl flex-wrap break-words inline-block max-w-[80%] m-0 "
          >
           ${userData.message}
          </p>`;
  const outGoingMessageDiv = createMessageElement(userMassage, "user-message");
  chatBody.appendChild(outGoingMessageDiv);

  setTimeout(() => {
    const userMassage = `<div class="flex items-start justify-start">
            <i
              class="ri-chat-smile-2-line text-lg bg-purple-600 text-white rounded-full px-2 py-1"
            ></i>
          </div>
          <div>
            <div
              class="bg-gray-100 px-4 py-3 rounded-t-xl rounded-br-xl flex gap-1 animate-[fade_1.8s_ease-in-out_infinite] ml-2"
            >
              <p class="dot w-[6px] h-[6px] rounded-full bg-gray-400"></p>
              <p class="dot w-[6px] h-[6px] rounded-full bg-gray-400"></p>
              <p class="dot w-[6px] h-[6px] rounded-full bg-gray-400"></p>
            </div>
          </div>`;
    const incomingMessage = createMessageElement(userMassage, "bot-message");
    chatBody.appendChild(incomingMessage);
    incomingMessage.classList.remove("justify-end");
    generateBotReply();
  }, 600);
};

messageInput.addEventListener("keydown", (e) => {
  const message = e.target.value.trim();
  if (e.key === "Enter" && message) {
    e.preventDefault();
    handleOutGoingMessage(e);
  }
});

sendMessageBtn.addEventListener("click", (e) => handleOutGoingMessage(e));
