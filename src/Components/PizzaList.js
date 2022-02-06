import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { PizzaConsumer } from '../context';
import Pizza from './Pizza';
export default class PizzaList extends Component {
	render() {
		return (
			<React.Fragment>
				<PizzaWrapper className='py-5'>
					<div className='container'>
						<Title title='Our Menu'></Title>
						<div className='row'>
							<PizzaConsumer>
								{(value) => {
									return value.pizzas.map((pizza) => {
										return <Pizza key={pizza.id} pizza={pizza} />;
									});
								}}
							</PizzaConsumer>
						</div>
					</div>
				</PizzaWrapper>
			</React.Fragment>
		);
	}
}

const PizzaWrapper = styled.section``;
