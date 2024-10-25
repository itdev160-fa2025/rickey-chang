var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: 'Kim',
        message: 'Hey, what are you doing today?'
    },
    {
        type: messageType.in,
        user: 'Rickey',
        message: "I got homework to do. What's up?"
    },
    {
        type: messageType.out,
        user: 'Kim',
        message: 'Nothing, just wondering if you want to go grab some food.'
    },
    {
        type: messageType.in,
        user: 'Rickey',
        message: 'Nah, maybe next time.'
    }
];

function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message) {
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEL = document.createElement('div');
    messageEL.appendChild(messageText);

    messageEL.className = message.type;
    return messageEL;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEL = document.getElementById('message-container');

    switch(event.target.id) {
        case 'send-button':
            user = 'Kim';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Rickey';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    if(messageInput.value != '') {
        var message = new Message(type, user, messageInput.value);
        message.push(message);

        var el =createMessageElement(message);
        messageContainerEL.appendChild(el);
        messageInput.value = '';
    }
}

function loadSeedData() {
    for (var i = 0; i <Date.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message);

        messageContainerEL.appendChild(el);
    }
}

var init = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();