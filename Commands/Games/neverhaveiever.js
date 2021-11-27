const { NeverHaveIEver } = require("weky");

module.exports = {
	name: "neverhaveiever",
	description: "Never have I ever",
	aliases: ['nevei'],
	run: async(client, message, args) => {
		await NeverHaveIEver({
			message: message,
			embed: {
				title: 'Never Have I Ever | Weky Development',
				color: '#5865F2',
				footer: 'Naneko Games',
				timestamp: true
			},
			thinkMessage: 'Ich bin am Überlegen..',
			othersMessage: 'Nur mein Geliebtes Meister: <@{{author}}> kann die Button verwenden!',
			buttons: { optionA: 'Yes', optionB: 'No' }
		});
	}
}