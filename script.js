function send() {
    // Variabes
    var url = document.getElementById('URL').value;
    if (url === '') return alert('Please type a Discord Webhook URL to send!');

    var botUsername = document.getElementById('bu').value;

    var avatarURL = document.getElementById('au').value;

    var content = document.getElementById('content').value;
    if (content === '') return alert('Please insert something to send!');

    // Webhook Data
    const data = {
        "content": content,
        "username": botUsername,
        "avatar_url": avatarURL,
    };

    // Checks If URL Is Valid
    fetch(url).then((data) => {
        if (data.status === 404) {
            alert('Invalid webhook. Please make sure it is the correct URL or that it hasn\'t been deleted!')
        };
    });

    // Post To Discord Webhook
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
};

function delWebhook() {
    // Variable
    var url = document.getElementById('URL').value;
    if (url === '') return alert('Please type a Discord Webhook URL to delete!');

    // Checks If URL Is Valid
    fetch(url).then((data) => {
        if (data.status === 404) {
            alert('This webhook has already been deleted or it is an incorrect URL.')
        };
    });

    // Delete Webhook
    fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(() => {
        alert('Successfully deleted the webhook!');
    });
};

function direct() {
    window.location.href = "https://xoalone.github.io/webhooker/embed.html";
};

function direct2() {
    window.location.href = "https://xoalone.github.io/webhooker/index.html";
};

function sendEmbed() {
    // Variables
    var url = document.getElementById('URL').value;
    if (url === '') return alert('Please type a Discord Webhook URL to delete!');

    var payload = document.getElementById('payload').value;

    // JSON Payload Data
    const jsonData = {
        "payload_json": payload,
    };

    // Post To Discord Webhook
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData),
    });
};
