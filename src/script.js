const messageInput = document.getElementById("message-input");
const chatBody = document.getElementById("chat-body");

const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("m-[6px]", "flex", "justify-end", classes);
  div.innerHTML = content;
  return div;
};

const handleOutGoingMessage = (message) => {
  const userMassage = `<p
            class="text-sm bg-purple-600 text-white px-4 py-2 rounded-t-xl rounded-bl-xl m-0 "
          >
           ${message}
          </p>`;
  const outGoingMessageDiv = createMessageElement(userMassage, "user-message");
  chatBody.appendChild(outGoingMessageDiv);
};

messageInput.addEventListener("keydown", (e) => {
  const message = e.target.value.trim();
  if (e.key === "Enter" && message) {
    e.preventDefault();
    handleOutGoingMessage(message);
  }
});
