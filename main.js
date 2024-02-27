const iframe = document.getElementById('iframe');

iframe.addEventListener('load', () => {
	iframe.contentWindow.postMessage({
		accessToken:
			'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJGaXhkIiwicm9sZSI6IlBhcnRuZXIiLCJ1bmlxdWVfbmFtZSI6IkZpeGQiLCJwYXJ0bmVyIjoyLCJuYmYiOjE3MDc5MTQ2NjksImV4cCI6MjAyMzI3NDY2OSwiaWF0IjoxNzA3OTE0NjY5LCJpc3MiOiJJc3N1ZXIiLCJhdWQiOiJBdWRpZW5jZSJ9.tD8Bl00iShNG-GEH2fbuHFEDXSheNwfB_IpNLWqPUfmPLnFLLZUfYfiJLmAm4WdZu9yzqlQ3YtXAla4vX9borQ',
	});
});
