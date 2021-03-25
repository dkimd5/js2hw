function makeGETRequest(url) {
	return new Promise((resolve, reject) => {
		let xhr;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(xhr.responseText);
			}
		}

		xhr.open('GET', url, true);
		xhr.send();
	})
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
	constructor(title, price) {
		this.title = title;
		this.price = price;
	}

	render() {
		return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
	}
}

class GoodsList {
	constructor() {
		this.goods = [];
	}

	fetchGoods() {
		return new Promise(resolve => {
			makeGETRequest(`${API_URL}/catalogData.json`).then(
				productsArr => {
					this.goods = JSON.parse(productsArr);
				});
			resolve(this);
		})
	}


	render() {
		let listHtml = '';
		this.goods.forEach(good => {
			const goodItem = new GoodsItem(good.product_name, good.price);
			listHtml += goodItem.render();
		});
		document.querySelector('.goods-list').innerHTML = listHtml;
	}

	totalCost() {
		let sum = 0;
		this.goods.forEach(p => sum += p.price);
		return sum;
	}
}

const list = new GoodsList();

list.fetchGoods().then(result => result.render());


class Basket {
	constructor() {
		this.items = [];
	}
	addItem(basketItem) {
		this.items.push(basketItem);
	};
	deleteItem(id) {
		this.items.splice(this.items.indexOf(this.items.id), 1);
	}
}

class BasketItem {
	constructor(good) {
		this.good = good;
	}


}

class Hamburger {
	constructor(size = 'big', stuffing = 'potato') {
		this.size = size;
		this.stuffing = stuffing;
		if (this.size == 'big') {
			this.price = 100;
			this.calories = 40;
		} else if (this.size == 'small') {
			this.price = 50;
			this.calories = 20;
		}
		if (this.stuffing == 'cheese') {
			this.price += 10;
			this.calories += 20;
		} else if (this.stuffing == 'salad') {
			this.price += 20;
			this.calories += 5;
		} else if (this.stuffing == 'potato') {
			this.price += 15;
			this.calories += 10;
		}
	}

	addTopping() {
		this.price += 15;
	}

	removeTopping() {
		this.price -= 15;
	}

	addMayoneze() {
		this.price += 20;
		this.calories += 5;
	}

	removeMayoneze() {
		this.price -= 20;
		this.calories -= 5;
	}

	totalPrice() {
		return this.price;
	}

	totalCalories() {
		return this.calories;
	}
}

const hamburger = new Hamburger('small', 'salad');
hamburger.addTopping();
hamburger.addMayoneze();
hamburger.removeTopping();
console.log(`Цена: ${hamburger.totalPrice()}, Калорийность: ${hamburger.totalCalories()}`);


