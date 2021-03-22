class GoodsItem {
	constructor(title, price) {
		this.title = title;
		this.price = price;
	}

	render() {
		return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
	}
}

class GoodsList {
	constructor() {
		this.goods = [];
	}

	fetchGoods() {
		this.goods = [
			{ title: 'Shirt', price: 150 },
			{ title: 'Socks', price: 50 },
			{ title: 'Jacket', price: 350 },
			{ title: 'Shoes', price: 250 },
		];
	}

	render() {
		let listHtml = '';
		this.goods.forEach(good => {
			const goodItem = new GoodsItem(good.title, good.price);
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
list.fetchGoods();
list.render();


class Basket {
	addProduct() { };
	removeProduct() { };
	totalPrice() { };
}

class BasketItem {

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