const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('goods-list', {
	props: ['goods'],
	template: `
		<div class="goods-list">
			<goods-item v-for="good in goods" :good="good"></goods-item>
		</div>
	`
});

Vue.component('goods-item', {
	props: ['good'],
	template: `
		<div class="goods-item">
			<h3>{{good.product_name}}</h3>
			<p>{{good.price}}</p>
		</div>
	`
});

Vue.component('search-goods', {
	props: {
		searchLine: String,
		filteredGoods: Array,
		goods: Array,
	},

	template: `
		<div class="search-wrap">
			<input type="text" v-model="searchLine" class="goods-search" />
			<button class="search-button" type="button" v-on:click="filterGoods(searchLine)">Искать</button>
		</div>
	`,

	methods: {
		filterGoods(good_name) {
			console.log("starting");
			const regexp = new RegExp(good_name, 'i');
			this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
		},
	}
});

Vue.component('cart-goods', {
	props: ['isVisibleCart'],
	template: `
		<button class="cart-button" type="button" v-show="isVisibleCart">Корзина</button>
	`
});

Vue.component('todo-list-item', {
	props: {
		todo: {
			type: Object,
			required: true,
		}
	},

	template: `
		<label>
			<input
				type="checkbox"
				v-model="todo.done"
			>

			<del v-if="todo.done">
				{{ todo.text }}
			</del>
			<span v-else>
				{{ todo.text }}
			</span>
		</label>`,
});


const app = new Vue({
	el: '#app',
	data() {
		return {
			goods: [],
			filteredGoods: [],
			searchLine: '',
			cart: [],
			isVisibleCart: false,
			todos: [
				{ text: "Learn JavaScript", done: false },
				{ text: "Learn Vue", done: false },
				{ text: "Play around in JSFiddle", done: true },
				{ text: "Build something awesome", done: true }
			]
		}
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



		cartShown() {
			if (this.cart.length() > 0) {
				this.isVisibleCart = true;
			}
		},
	},

	mounted() {
		this.fetchTodos();
	}

});

