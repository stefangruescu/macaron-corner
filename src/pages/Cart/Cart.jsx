import React from 'react';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { removeFromCart } from '../../redux/cart/cartActions';

function Cart(props) {
	return (
		<Layout>
			<div className='cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center'>
				{props.products.length ? (
					<div className='w-100'>
						<div className='d-flex justify-content-between text-center h4 text-bold'>
							<p className='w-25'>Product</p>
							<p className='w-25'>Price</p>
							<p className='w-25'>Quantity</p>
							<p className='w-25'>Total</p>
						</div>
						{props.products.map((product) => {
							return (
								<div
									className='d-flex justify-content-between align-items-center text-center'
									key={product.id}
								>
									<div className='w-25 d-flex flex-column justify-content-center align-items-center'>
										<img src={product.image} alt='Produs' />
										<p>{product.name}</p>
									</div>
									<p className='w-25'>
										{product.price} {product.currency}
									</p>
									<p className='w-25'>{product.quantity}</p>
									<div className='w-25 d-flex justify-content-center'>
										<p className='mr-2'>
											{product.price * product.quantity} {product.currency}
										</p>
										<Close
											onClick={() => {
												props.removeFromCartWithDispatch(product.id);
											}}
										/>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className='d-flex flex-column align-items-center'>
						<p className='h3 mb-5'>You don't have products in cart!</p>
						<Link to='/'>
							<button className='btn btn-outline-dark'>Back to home</button>
						</Link>
					</div>
				)}
			</div>
		</Layout>
	);
}

function mapStateToProps(state) {
	return {
		products: state.cart.products
	};
}

function mapDispatchToProps(dispatch) {
	return {
		removeFromCartWithDispatch: (payload) => dispatch(removeFromCart(payload))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
