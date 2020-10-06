import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import Category from './pages/Category/Category';
import Favorites from './pages/Favorites/Favorites';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import './utils/utility-classes.css';
import Terms from './pages/Terms&Conditions/Terms';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className='app'>
				<Switch>
					<Route path='/login' component={Login} />
					<Route exact path='/' component={Home} />
					<Route path='/cart' component={Cart} />
					<Route path='/favorites' component={Favorites} />
					<Route path='/about' component={About} />
					<Route path='/category/:categoryName' component={Category} />
					<Route path='/product/:productId' component={Product} />
					<Route path='/terms' component={Terms} />
					<Route path='*' component={Page404} />
				</Switch>
			</div>
		);
	}
}

export default App;
