const { defineConfig } = require('cypress');

module.exports = defineConfig({
	projectId: 'qmg57i',
	chromeWebSecurity: false,
	e2e: {
		baseUrl: 'https://notes-serverless-app.com',
		env: {
			viewportWidthBreakpoint: 768,
		},
		video: true,
	},
});
