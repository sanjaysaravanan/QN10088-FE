import React, { Component } from 'react';
import { pizzaData } from './data';

const PizzaContext = React.createContext();

class PizzaProvider extends Component {
	state = {
		pizzas: pizzaData,
		cart: [],
		cartSubTotal: 0,
		cartTotal: 0,
		cartTax: 0,
	};

	componentDidMount() {
		this.setPizzas();
	}

	setPizzas = () => {
		let pizzas = [];
		pizzaData.forEach((item) => {
			const singleItem = { ...item };
			pizzas = [...pizzas, singleItem];
		});
		this.setState(() => {
			return { pizzas };
		}, this.checkCartItems);
	};

	getPizza = (id) => {
		const pizza = this.state.pizzas.find((item) => item.id === id);
		return pizza;
	};

	addToCart = (id) => {
		let tempPizzas = [...this.state.pizzas];
		const index = tempPizzas.indexOf(this.getPizza(id));
		const pizza = tempPizzas[index];
		pizza.inCart = true;
		pizza.count = 1;
		const price = pizza.price;
		pizza.total = price;

		this.setState(() => {
			return {
				pizzas: [...tempPizzas],
				cart: [...this.state.cart, pizza],
			};
		}, this.addTotals);
	};

	increment = (id) => {
		let tempCart = [...this.state.cart];
		const selectedPizza = tempCart.find((item) => {
			return item.id === id;
		});
		const index = tempCart.indexOf(selectedPizza);
		const pizza = tempCart[index];
		pizza.count = pizza.count + 1;
		pizza.total = pizza.count * pizza.price;
		this.setState(() => {
			return {
				cart: [...tempCart],
			};
		}, this.addTotals);
	};

	decrement = (id) => {
		let tempCart = [...this.state.cart];
		const selectedPizza = tempCart.find((item) => {
			return item.id === id;
		});
		const index = tempCart.indexOf(selectedPizza);
		const pizza = tempCart[index];
		pizza.count = pizza.count - 1;
		if (pizza.count === 0) {
			this.removePizza(id);
		} else {
			pizza.total = pizza.count * pizza.price;
			this.setState(() => {
				return { cart: [...tempCart] };
			}, this.addTotals);
		}
	};

	getTotals = () => {
		let subTotal = 0;
		this.state.cart.map((item) => (subTotal += item.total));
		const tempTax = subTotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const delivery = parseFloat((subTotal * 0.05).toFixed(2));
		const total = subTotal + tax;
		return {
			subTotal,
			tax,
			delivery,
			total,
		};
	};

	addTotals = () => {
		const totals = this.getTotals();
		this.setState(
			() => {
				return {
					cartSubTotal: totals.subTotal,
					cartTax: totals.tax,
					cartTotal: totals.total,
					delivery: totals.delivery,
				};
			},
			() => {
				// console.log(this.state);
			}
		);
	};

	removePizza = (id) => {
		let tempPizzas = [...this.state.pizzas];
		let tempCart = [...this.state.cart];

		const index = tempPizzas.indexOf(this.getPizza(id));
		let removedPizza = tempPizzas[index];
		removedPizza.inCart = false;
		removedPizza.count = 0;
		removedPizza.total = 0;

		tempCart = tempCart.filter((pizza) => {
			return pizza.id !== id;
		});

		this.setState(() => {
			return {
				cart: [...tempCart],
				pizzas: [...tempPizzas],
			};
		}, this.addTotals);
	};

	clearCart = () => {
		this.setState(
			() => {
				return { cart: [] };
			},
			() => {
				this.setPizzas();
				this.addTotals();
			}
		);
	};

	render() {
		return (
			<PizzaContext.Provider
				value={{
					...this.state,
					addToCart: this.addToCart,
					increment: this.increment,
					decrement: this.decrement,
					removePizza: this.removePizza,
					clearCart: this.clearCart,
				}}
			>
				{this.props.children}
			</PizzaContext.Provider>
		);
	}
}

const PizzaConsumer = PizzaContext.Consumer;
export { PizzaProvider, PizzaConsumer };
