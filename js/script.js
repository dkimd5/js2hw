// function makeGETRequest(url) {
// 	return new Promise((resolve, reject) => {
// 		let xhr;
// 		if (window.XMLHttpRequest) {
// 			xhr = new XMLHttpRequest();
// 		} else if (window.ActiveXObject) {
// 			xhr = new ActiveXObject("Microsoft.XMLHTTP");
// 		}

// 		xhr.onreadystatechange = () => {
// 			if (xhr.readyState === 4 && xhr.status === 200) {
// 				resolve(xhr.responseText);
// 			}
// 		}

// 		xhr.open('GET', url, true);
// 		xhr.send();
// 	})
// }

// const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
	constructor(title, price) {
		this.title = title;
		this.price = price;
	}

	render() {
		return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
	}
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsList {
	constructor() {
		this.goods = [];
		this.filteredGoods = [];
	}
	//TODO: распарсить данные, сделать в вью вставку в html вместо метода render
	// fetchGoods() {
	// 	const response = await fetch(`${API_URL}/catalogData.json`);
	// 	const data = await response.json();
	// 	console.log('Data: ', data);
	// return fetch(`${API_URL}/catalogData.json`)
	// 	.then(response => {
	// 		let test = response.json();
	// 		console.log(test);
	// 		return test;
	// 	})
	// 	.then(data => console.log(data))
	// }
	// new Promise((resolve, reject) => {
	// return new Promise(resolve => {
	// 	makeGETRequest(`${API_URL}/catalogData.json`).then(
	// 		productsArr => {
	// 			this.goods = JSON.parse(productsArr);
	// 			this.filteredGoods = JSON.parse(productsArr)
	// 		});
	// 	resolve(this);
	// })


	// 	render() {
	// 		let listHtml = '';
	// 		this.filteredGoods.forEach(good => {
	// 			const goodItem = new GoodsItem(good.product_name, good.price);
	// 			listHtml += goodItem.render();
	// 		});
	// 		document.querySelector('.goods-list').innerHTML = listHtml;
	// 	}

	// 	totalCost() {
	// 		let sum = 0;
	// 		this.goods.forEach(p => sum += p.price);
	// 		return sum;
	// 	}

	// 	filterGoods(value) {
	// 		const regexp = new RegExp(value, 'i');
	// 		this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
	// 		this.render();
	// 	}

}
async function fetchGoods() {
	const response = await fetch(`${API_URL}/catalogData.json`);
	const data = await response.json();
	console.log('Data: ', data);
	return data;
}

const list = new GoodsList();
fetchGoods().then(res => {
	console.log(res)
});


// const list = new GoodsList();

// list.fetchGoods().then(result => result.render());


// class Basket {
// 	constructor() {
// 		this.items = [];
// 	}
// 	addItem(basketItem) {
// 		this.items.push(basketItem);
// 	};
// 	deleteItem(id) {
// 		this.items.splice(this.items.indexOf(this.items.id), 1);
// 	}
// }

// class BasketItem {
// 	constructor(good) {
// 		this.good = good;
// 	}


// }

// class Hamburger {
// 	constructor(size = 'big', stuffing = 'potato') {
// 		this.size = size;
// 		this.stuffing = stuffing;
// 		if (this.size == 'big') {
// 			this.price = 100;
// 			this.calories = 40;
// 		} else if (this.size == 'small') {
// 			this.price = 50;
// 			this.calories = 20;
// 		}
// 		if (this.stuffing == 'cheese') {
// 			this.price += 10;
// 			this.calories += 20;
// 		} else if (this.stuffing == 'salad') {
// 			this.price += 20;
// 			this.calories += 5;
// 		} else if (this.stuffing == 'potato') {
// 			this.price += 15;
// 			this.calories += 10;
// 		}
// 	}

// 	addTopping() {
// 		this.price += 15;
// 	}

// 	removeTopping() {
// 		this.price -= 15;
// 	}

// 	addMayoneze() {
// 		this.price += 20;
// 		this.calories += 5;
// 	}

// 	removeMayoneze() {
// 		this.price -= 20;
// 		this.calories -= 5;
// 	}

// 	totalPrice() {
// 		return this.price;
// 	}

// 	totalCalories() {
// 		return this.calories;
// 	}
// }

// const hamburger = new Hamburger('small', 'salad');
// hamburger.addTopping();
// hamburger.addMayoneze();
// hamburger.removeTopping();
// console.log(`Цена: ${hamburger.totalPrice()}, Калорийность: ${hamburger.totalCalories()}`);

// searchButton.addEventListener('click', (e) => {
// 	const value = searchInput.value;
// 	list.filterGoods(value);
// });


// //ДЗ №4
// let text = "Lorem 'ipsum' dolor sit amet consectetur adipisicing e'lit. 'Assumendan'eque laboriosam libero numquam'. Enim hic rem pariatur 'nobis' necessitatibus neque perferendis 'fugit ducimus' vel cum illum ratione 'numquam' m'inus qui cumque, fugiat dolorum 'cupid'itate', amet quas consectetur eos tempora 'repudiandae' molestias. Quibusdam est minima voluptate perferendis itaque maiores hic, debitis accusantium harum aut modi necessitatibus, placeat veniam asperiores consequatur ut? Neque maiores 'sint' tempora iusto laborum voluptatem, 'repellendu's quas non inventore id dolore ullam recusandae esse adipisci. Architecto sed illo commodi qui 'facere' quidem perspiciat'is 'tempora sint dolor eum non tempore' quod magni veritatis quos, 'dignissimos animi cum' suscipit assumenda.";

// const regexp = /(\s)'(.*?)'(\s|\.|,)/gi;
// console.log(text.replace(regexp, '$1"$2"$3'));



const app = new Vue({
	el: '.app',
	data: {
		goods: [],
		filteredGoods: [],
		searchLine: ''
	},

	methods: {
		fetchTodos() {
			return fetch(`${API_URL}/catalogData.json`)
				.then(response => console.log(response.json()))
			// new Promise((resolve, reject) => {
			// 	let xhr;
			// 	if (window.XMLHttpRequest) {
			// 		xhr = new XMLHttpRequest();
			// 	} else if (window.ActiveXObject) {
			// 		xhr = new ActiveXObject("Microsoft.XMLHTTP");
			// 	}

			// 	xhr.onreadystatechange = () => {
			// 		if (xhr.readyState === 4 && xhr.status === 200) {
			// 			resolve(xhr.responseText);
			// 		}
			// 	}

			// 	xhr.open('GET', url, true);
			// 	xhr.send();
			// })
		}
	},

	mounted() {
		this.makeGETRequest(`{API_URL}/catalogData.json`, (goods) => {
			this.goods = goods;
			this.filteredGoods = goods;
		});
	}
});
