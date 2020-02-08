const app = new Vue({
	el: '#safecard-app',
	data: {
		colors: [
			'rgb(57, 104, 203)',
			'rgb(201, 124, 216)',
			'rgb(22, 231, 226)',
			'rgb(254, 34, 83)',
			'rgb(249, 235, 16)',
			'rgb(176, 218, 190)'
		],
		cards: {
			'fake_token': {
				token: 'fake_token',
				nickname: 'card_nickname',
				value: 400.33,
				policies: {
					categories: {
						'music': true,
						'streaming': true,
						'food': true,
						'shopping': true,
						'games': true,
						'inapp': true
					}
				},
				activity: [
					{
						date: '',
						merchant: 'IDK*',
						amount: '10.00',
						status: 'COMPLETE'
					}
				]
			}
		}
	}
});
