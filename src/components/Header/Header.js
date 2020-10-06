import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { signOutAction } from '../../redux/user/userActions';

function Header(props) {
	const { numberOfProducts, user, signOutDispatch } = props;

	return (
		<header className='border-bottom header-line d-flex flex-wrap justify-content-sm-between justify-content-center'>
			<div />
			<Link to='/'>
				<img src={Logo} alt='Macaron Corner' className='logo' />
			</Link>

			<div className='align-self-center mr-4 pr-3'>
				{user && user.uid ? <p className='h6'> Hi, {user.displayName}!</p> : null}
				<div className='header-buttons d-flex'>
					{user && user.uid ? (
						<div className='header-buttons-left d-flex flex-row-reverse'>
							<Link to='/favorites'>
								<i className='far fa-heart ml-3' />
							</Link>
							<p className='logout h5' onClick={() => signOutDispatch()}>
								Logout
							</p>
						</div>
					) : (
						<Link to='/login' className='h5 mb-0 pl-5'>
							Login
						</Link>
					)}

					<Link to='/cart' className='d-flex'>
						<ShoppingCart className='ml-3' />

						<p className='ml-2 mb-0 h5'>{numberOfProducts}</p>
					</Link>
				</div>
			</div>
		</header>
	);
}

function mapStateToProps(state) {
	return {
		numberOfProducts: state.cart.products.length,
		user: state.user.data
	};
}
function mapDispatchToProps(dispatch) {
	return {
		signOutDispatch: () => {
			dispatch(signOutAction());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
