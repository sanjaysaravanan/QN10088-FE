import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { Nav } from './Nav';

export default class Navbar extends Component {
	render() {
		return (
			<Nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
				<Link to='/'>
					<img
						src={'logo.svg'}
						alt='Home'
						className='navbar-brand'
						width='70px'
						height='70px'
					/>
					{/* <img src={'pizza.png'} alt='Home' className='navbar-brand' /> */}
				</Link>
				<ul className='navbar-nav align-items-center'>
					<li className='nav-item ml-5'>
						<Link to='/' className='nav-link'>
							PIZZY
						</Link>
					</li>
				</ul>

				<Link to='/cart' className='ml-auto'>
					<ButtonContainer>
						My Cart
						<span>
							<img src={'cart.svg'} width='40px' height='40px' alt=''/>
						</span>
					</ButtonContainer>
				</Link>
			</Nav>
		);
	}
}
