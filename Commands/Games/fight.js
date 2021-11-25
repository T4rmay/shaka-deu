const { Fight } = require("weky")

module.exports = {
	name: "fight",
	description: "Fight someone",
	category: "Games",
	run: async(client, message, args) => {
		if (!message.mentions.members.first()) {
			return message.reply("🚫 | Meister, Sie müssen jemanden erwähnen!")
		}
		await Fight({
			message: message,
			opponent: message.mentions.users.first(),
			embed: {
				title: 'Fight | Weky Development',
				color: '#5865F2',
				footer: 'Naneko Games',
				timestamp: true
			},
			buttons: {
			  hit: 'Hit',
			  heal: 'Heal',
			  cancel: 'Stop',
			  accept: 'Accept',
			  deny: 'Deny'
			},
			acceptMessage: '<@{{challenger}}> hat <@{{opponent}}> zu einem Kampf herausgefordert!',
			winMessage: 'GG, <@{{winner}}> hat den Kampf gewonnen! :tada:',
			endMessage: '<@{{opponent}}> hat nicht rechtzeitig geantwortet. Also habe ich das Spiel beenden lassen!',
			cancelMessage: '<@{{opponent}}> weigerte sich, mit dir zu kämpfen!',
			fightMessage: '{{player}} Sie sind als erstes dran!',
			opponentsTurnMessage: 'Bitte warten Sie, bis sich Ihre Gegner bewegen!',
			highHealthMessage: 'Sie können nicht heilen, wenn Ihre HP über 80 liegt!',
			lowHealthMessage: 'Du kannst den Kampf nicht abbrechen, wenn deine HP unter 50 liegt!',
			returnWinner: false,
			othersMessage: 'Nur mein geliebtes Meister: {{author}} kann die Button verwenden!'
		});
	}
}