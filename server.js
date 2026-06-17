/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const path = require('path');
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

// 画像・PDF を base64(dataURL) で受け取るため上限を引き上げる
app.use(express.json({ limit: '20mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// --- インメモリのメッセージストア（PoC: 再起動で消える） ---
let messages = [];
let nextId = 1;

// メッセージ一覧を取得
app.get('/api/messages', (req, res) => {
	res.json(messages);
});

// メッセージを投稿（テキスト・添付ファイルどちらか、または両方）
app.post('/api/messages', (req, res) => {
	const { sender, text, file } = req.body || {};
	if (sender !== 'user' && sender !== 'pro') {
		return res.status(400).json({ error: 'sender は "user" か "pro" を指定してください' });
	}
	if (!text && !file) {
		return res.status(400).json({ error: 'text か file のいずれかが必要です' });
	}

	// 添付ファイルは { name, type, dataUrl } 形式の base64 dataURL で受け取る
	let attachment = null;
	if (file) {
		if (typeof file.dataUrl !== 'string' || !file.dataUrl.startsWith('data:')) {
			return res.status(400).json({ error: 'file.dataUrl は data: 形式で指定してください' });
		}
		attachment = {
			name: typeof file.name === 'string' ? file.name : 'file',
			type: typeof file.type === 'string' ? file.type : '',
			dataUrl: file.dataUrl
		};
	}

	const message = {
		id: nextId++,
		sender,
		text: typeof text === 'string' ? text : '',
		file: attachment,
		ts: Date.now()
	};
	messages.push(message);
	res.status(201).json(message);
});

// 会話をリセット（デモ用）
app.delete('/api/messages', (req, res) => {
	messages = [];
	nextId = 1;
	res.status(204).end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
