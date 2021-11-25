const { QuickClick } = require("weky");

module.exports = {
	name: "quickclick",
	description: "Quickly click a button",
	run: async(client, message, args) => {
		await QuickClick({
			message: message,
			embed: {
				title: 'Quick Click | Weky Development',
				color: '#5865F2',
				footer: 'Naneko Games',
				timestamp: true
			},
			time: 60000,
			waitMessage: 'Die Buttons können jetzt jederzeit erscheinen!',
			startMessage:
				'Die erste Person, die den richtigen Knopf drückt, gewinnt. Du hast dafür **{{time}}** gebraucht!',
			winMessage: 'GG, <@{{winner}}> hat die Taste in **{{time}} Sekunden** gedrückt.',
			loseMessage: 'Niemand drückte rechtzeitig auf den Knopf. Also habe ich das Spiel beenden lassen!',
			emoji: '👆',
			ongoingMessage:
				"In <#{{channel}}> läuft bereits ein Spiel. Sie können keinen neuen anfangen!"
		});
	}
}