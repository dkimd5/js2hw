const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		goods: [],
		filteredGoods: [],
		searchLine: '',
		cart: [],
		isVisibleCart: false,
	},

	methods: {
		fetchTodos() {
			return fetch(`${API_URL}/catalogData.json`)
				.then(response => response.json())
				.then(response => {
					this.filteredGoods = response;
					this.goods = response;
				})
		},

		filterGoods(good_name) {
			const regexp = new RegExp(good_name, 'i');
			this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
		},

		cartShown() {
			if (this.cart.length() > 0) {
				this.isVisibleCart = true;
			}
		}

	},

	mounted() {
		this.fetchTodos();
	}

})