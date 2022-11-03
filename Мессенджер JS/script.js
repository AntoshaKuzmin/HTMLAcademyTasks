var chatContent = document.querySelector('.chat-content');
var messages = chatContent.children;
var chatForm = document.querySelector('.chat-form');
var chatFormInput = chatForm.querySelector('.chat-form-input');
var messageTemplate = document.querySelector('#message-template').content;
var newMessageTemplate = messageTemplate.querySelector('.chat-message');


var addCheckHandler = function (message) {
  var closeButton = message.querySelector('.chat-message-button');
  closeButton.addEventListener('click', function () {
    message.remove();
  });
};

for (var i = 0; i < messages.length; i++) {
  addCheckHandler(messages[i]);
}


chatForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var taskText = chatFormInput.value;
  var task = newMessageTemplate.cloneNode(true);
  var taskDescription = task.querySelector('p');
  taskDescription.textContent = taskText;
  addCheckHandler(task);
  chatContent.appendChild(task);
  chatFormInput.value = '';
}); 