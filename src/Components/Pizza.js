import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PizzaConsumer } from '../context';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default class Pizza extends Component {
	render() {
		const { id, title, img, info, price, inCart } = this.props.pizza;

		return (
			<PizzaWrapper className='col-9 mx-auto my-auto col-md-6 col-lg-4'>
				<div className='card'>
					<PizzaConsumer>
						{(value) => {
							return (
								<div className='img-container p-5'>
									<img src={img} alt='pizza' className='card-img-top' />
									<h3 className='pizza-title text-center'>{title}</h3>
									<div className='pizza-info text-center'>{info}</div>
									<div className='pizza-price'> ${price}</div>
									<Link to='/'>
										<ButtonContainer
											className='cart-btn'
											disabled={inCart ? true : false}
											onClick={() => {
												console.log('added to cart');
												value.addToCart(id);
											}}
										>
											{inCart ? (
												<p className='mb-0' disabled>
													in cart
												</p>
											) : (
												<p className='mb-0' disabled>
													add to cart
												</p>
											)}
										</ButtonContainer>
									</Link>
								</div>
							);
						}}
					</PizzaConsumer>
				</div>
			</PizzaWrapper>
		);
	}
}

const PizzaWrapper = styled.div`
.card {
	border-color: transparent;
	transition: all 1s linear;
}

/* .card-footer {
	background: transparent;
	border-top: transparent;
	transition: all 1s linear;
} */

&:hover {
	.card {
		border: 0.04rem solid rgba(0, 0, 0, 0.2);
		box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
	}
	/* .card-footer {
		background: rgba(247, 247, 247);
	} */
}

.img-container {
	position: relative;
	overflow: hidden;
}
.card-img-top {
	transition: all 0.5s linear;
}
.img-container:hover .card-img-top {
	transform: scale(1.06);
}

.pizza-price {
	/* position: absolute; */
	padding: 0.3rem 0.6rem;
	background: transparent;
	font-size: 1.2rem;
	border-radius: 0.7rem;
	text-align: center;
	font-family: 'fredoka one';
}

.cart-btn {
	position: absolute;
	padding: 0.3rem 0.6rem;
	background: var(--mainblue);
	font-size: 1.2rem;
	border-radius: 0.7rem;
	transition: all 0.5s ease-in-out;
	border: none;
	width: 76%;
}

.img-container:hover .cart-btn {
	transform: translate(0, 0);
}
.cart-btn:hover {
	background: #5555ee;
	cursor: pointer;
}
`;
	
