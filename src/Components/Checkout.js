import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Checkout extends Component {
	render() {
		return (
			<Form className='container'>
				<form method='get' className='details-form text-center'>
					<label>Name</label>
					<input type='text' className='name' required='required' />
					<br></br>
					<label>Phone no.</label>
					<input type='tel' className='phone' required='required' />
					<br></br>
					<label>Address</label>
					<input type='text' className='address' required='required' />
					<br></br>
					<label>Postcode</label>
					<input type='text' className='postcode' required='required' />
					<br></br>
					<label>Email id</label>
					<input type='email' className='email' required='required' />
					<br></br>
					<input type='radio' id='cash' name='paytype' />
					<label htmlFor='cash' className='payment'>
						Cash on Delivery
					</label>
					<br></br>

					<input type='radio' id='online' name='paytype' />
					<label htmlFor='online' className='payment'>
						Online payment
					</label>
					<br />
					<Link to='/orderplaced'>
						<input type='submit' value='Confirm order' />
					</Link>
				</form>
			</Form>
		);
	}
}

const Form = styled.div`
	label {
		font-family: 'Fredoka one';
		font-size: 1.5rem;
		margin-top: 40px;
	}

	input {
		border-radius: 4px;
		padding: 10px;
		margin-left: 70px;
		width: 270px;
		border-color: black;
		border-width: 0.1rem;
		font-family: 'Fredoka-one', cursive;
	}

	.payment {
		font-family: 'Fredoka one';
		font-size: 20px;
		margin: 15px;
		margin-left: 0.1rem;
	}

	input[type='radio'] {
		display: none;
	}

	input[type='radio'] + label:before {
		align-items: center;
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		margin-right: 1.5rem;
		margin-top: 0.4rem;
		position: relative;
		background-color: #dfdfdf;
		content: '';
		display: inline-block;
		visibility: visible;
		border: 2px solid white;
		cursor: pointer;
	}

	input[type='radio']:checked + label:before {
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		margin-right: 1.5rem;
		margin-top: 0.4rem;
		position: relative;
		background-color: #ffa500;
		content: '';
		display: inline-block;
		visibility: visible;
		border: 2px solid white;
	}

	input[type='radio'] + label {
		margin-top: 0.4rem;
	}

	input[type='submit'] {
		background: var(--mainblue);
		font-size: 1.4rem;
		font-family: 'Fredoka One', cursive;
		color: white;
		text-transform: uppercase;
		border: white 3px;
		border-radius: 0.4rem;
		padding: 0.2rem;
		cursor: pointer;
		display: inline-block;
		transition: all 0.4s ease-in-out;
		width: 26rem;
		&:hover {
			background: #5555ee;
		}
		&:focus {
			outline: none;
		}
	}
`;
