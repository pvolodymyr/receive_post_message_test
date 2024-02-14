const iframe = document.getElementById('iframe');

iframe.addEventListener('load', function () {
	console.log('🚀 ~ iframe loaded');

	iframe.contentWindow.postMessage({
		message: 'token',
		token: 'some token',
	});
});

window.postMessage({
	message: 'token',
	token: 'some token',
});
