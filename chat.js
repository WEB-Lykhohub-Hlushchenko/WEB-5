function sendMessage(user) {
    const input = document.getElementById(`user${user}-input`);
    const messageText = input.value.trim();

    if (messageText === '') {
        alert('Повідомлення не може бути порожнім!');
        return;
    }

    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');

    message.classList.add('message', user === 1 ? 'user1-message' : 'user2-message');
    message.innerHTML = `<strong>USER ${user}</strong><br>${messageText}`;

    chatBox.appendChild(message);

    input.value = '';

    chatBox.scrollTop = chatBox.scrollHeight;
}
