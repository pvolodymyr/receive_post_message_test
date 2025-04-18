const config = {
	accessToken:
		'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJDb1BhcnRzIiwicm9sZSI6IlBhcnRuZXIiLCJ1bmlxdWVfbmFtZSI6IkNvUGFydHMiLCJwYXJ0bmVyIjoiQ29QYXJ0cyIsIm5iZiI6MTc0NDYyNzYwNywiZXhwIjoyMDU5OTg3NjA3LCJpYXQiOjE3NDQ2Mjc2MDcsImlzcyI6Iklzc3VlciIsImF1ZCI6IkF1ZGllbmNlIn0.oul_Gy0iWPH87vNNr3wgjAL7cbjqB7FTO8H4OglEYwa2hT4l-ap9Zq5Ti2YbK9MjZSWoefJUhXG3sFePvOexLg',
	userDetails: {
		firstName: 'AQA Partner Order',
		lastName: 'AQA Partner Order',
		email: 'test@chaiz.com',
		address: '200 W 54th St, New York, NY 10019, USA',
		addressApartment: '1',
		city: 'New York',
		state: 'NY',
		zip: '10019',
		phoneNumber: '1111111111',
	},
	searchResultPlanIds: [1542541],
};

if (window.Chaiz) {
	const iframe = window.Chaiz.createPaymentIframe(config);
	iframe.mount('paymentIframeTargetElement');
}
