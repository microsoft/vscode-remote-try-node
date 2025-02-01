const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const event = req.headers['x-github-event'];
    
    if (event === 'project') {
        const project = req.body.project;
        const message = `New project added: ${project.name}\nDescription: ${project.body}`;

        const telegramToken = '7049099132:AAFp_1wARz3TS23I3qpE9x5ScbLIVUKHy-w';
        const chatId = '@shishifanyi_bot';
        const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

        axios.post(telegramUrl, {
            chat_id: chatId,
            text: message
        }).then(response => {
            console.log('Message sent to Telegram:', response.data);
        }).catch(error => {
            console.error('Error sending message to Telegram:', error);
        });
    }

    res.status(200).end();
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
