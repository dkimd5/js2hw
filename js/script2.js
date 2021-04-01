class GoodsItem {
	constructor(title, price) {
		this.product_name = title;
		this.price = price;
	}
}

class GoodsList {
	constructor() {
		this.goods = [];
		this.filteredGoods = [];
	}

	filterGoods(value) {
		const regexp = new RegExp(value, 'i');
		this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
		this.render();
	}

}


document.querySelector('.search-button').addEventListener('click', (e) => {
	const value = searchInput.value;
	list.filterGoods(value);
});

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		goods: [],
		filteredGoods: [],
		searchLine: ''
	},

	methods: {
		fetchTodos() {
			return fetch(`${API_URL}/catalogData.json`)
				.then(response => response.json())
				.then(response => {
					this.filteredGoods = response;
					this.goods = response;
				})
		}

	},

	mounted() {
		this.fetchTodos();
	}

})