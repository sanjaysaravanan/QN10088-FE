import React, { Component } from 'react';
import Title from '../Title';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import { PizzaConsumer } from '../../context';
import CartList from './CartList';

export default class Cart extends Component {
	render() {
		return (
			<section>
				<PizzaConsumer>
					{(value) => {
						const { cart } = value;
						if (cart.length > 0) {
							return (
								<React.Fragment>
									<Title title='Your Cart' />
									<CartList value={value} />
									<CartTotals value={value} />
								</React.Fragment>
							);
						} else {
							return <EmptyCart />;
						}
					}}
				</PizzaConsumer>
			</section>
		);
	}
}
