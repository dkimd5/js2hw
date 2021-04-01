const app = new Vue({
	el: '#app',
	data: {
		names: ['Frodo', 'Sam', 'Meriadoc', 'Peregrin']
	},

	methods: {
		clickHandler() {
			console.log('click');
		}
	},

	computed: {
		upperCaseName() {
			return this.names[0].toUpperCase()
		}
	}
});
