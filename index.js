const url = `${
	process.env.NODE_ENV === 'production'
		? 'https://yoloyoloyolo.netlify.app'
		: 'http://localhost:8888'
}/.netlify/functions/smart-ai-errors`;

async function handleError(error, apiKey) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			prompt: `Say in human language not more than 5 words: ${error}`,
			apiKey: apiKey,
		}),
	});
	const result = await response.json();
	return result;
}

module.exports = handleError;
