const messageInput = document.getElementById("message-input");
const chatBody = document.getElementById("chat-body");
const sendMessageBtn = document.getElementById("send-message");

const userData = {
  message: null,
};

const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("m-[6px]", "flex", "justify-end", classes);
  div.innerHTML = content;
  return div;
};

const handleOutGoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  const userMassage = `<p
            class="text-sm bg-purple-600 text-white px-4 py-2 rounded-t-xl rounded-bl-xl flex-wrap break-words inline-block max-w-[80%] m-0 "
          >
           ${userData.message}
          </p>`;
  const outGoingMessageDiv = createMessageElement(userMassage, "user-message");
  chatBody.appendChild(outGoingMessageDiv);
};

messageInput.addEventListener("keydown", (e) => {
  const message = e.target.value.trim();
  if (e.key === "Enter" && message) {
    e.preventDefault();
    handleOutGoingMessage(e);
  }
});

sendMessageBtn.addEventListener("click", (e) => handleOutGoingMessage(e));
