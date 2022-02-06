import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import PizzaList from './Components/PizzaList';
import Default from './Components/Default';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import OrderPlaced from './Components/OrderPlaced';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => (
							<React.Fragment>
								
								<PizzaList />
							</React.Fragment>
						)}
					/>
					<Route path='/pizzalist' component={PizzaList} />
					<Route path='/cart' component={Cart} />
					<Route path='/checkout' component={Checkout} />
					<Route path='/orderplaced' component={OrderPlaced} />
					<Route component={Default} />
				</Switch>
			</React.Fragment>
		);
	}
}
export default App;
