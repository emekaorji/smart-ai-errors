var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

async function handleError(error, apiKey) {
	var raw = JSON.stringify({
		prompt: error,
		apiKey: apiKey,
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	};

	const response = await fetch(
		'https://yoloyoloyolo.netlify.app/.netlify/functions/smart-ai-errors',
		requestOptions
	);

	const result = await response.text();
	console.log(result);
	return result;
}

// module.exports = handleError;
