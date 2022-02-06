import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class OrderPlaced extends Component {
	render() {
		return (
			<Div>
				<h1>Thank you</h1>
				<h3>Your order has been placed</h3>
				<Link to='/'>
					<img src={'logo.svg'} width='300px' height='300px' alt='' />
				</Link>
			</Div>
		);
	}
}

const Div = styled.div`
	h1 {
		font-family: cursive;
		font-size: 4rem;
		text-align: center;
		margin-top: 2rem;
		font-style: italic;
		font-weight: bolder;
		color: #2a2a72;
	}

	h3 {
		font-family: cursive;
		font-size: 3rem;
		text-align: center;
		font-style: italic;
		font-weight: bold;
	}
	img {
		margin-left: 40%;
	}
`;
