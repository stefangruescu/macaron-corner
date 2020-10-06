import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './Login.css';
import { connect } from 'react-redux';

import { signInWithFacebookAction, signInWithGoogleAction } from '../../redux/user/userActions';

class Login extends Component {
	componentDidUpdate(prevProps) {
		const { history } = this.props;
		if (this.props.user !== prevProps.user) {
			history.push('/');
		}
	}

	render() {
		const { signInWithGoogleDispatch, signInWithFacebookDispatch } = this.props;

		return (
			<div className='login-page'>
				<Link to='/'>
					<img src={Logo} alt='logo' className='mb-5' />
				</Link>

				<h1 className='h2'>Login</h1>
				<p>Please choose the provider</p>

				<button
					className='btn btn-outline-dark d-flex align-items-center'
					onClick={() => signInWithGoogleDispatch()}
				>
					<Google className='w-50 mr-3' />
					<span className='text-nowrap pr-3'>Login with Google</span>
				</button>
				<button
					className='btn btn-outline-dark d-flex align-items-center'
					onClick={() => signInWithFacebookDispatch()}
				>
					<Facebook className='w-50 mr-3' />
					<span className='text-nowrap'>Login with Facebook</span>
				</button>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		signInWithGoogleDispatch: () => dispatch(signInWithGoogleAction()),
		signInWithFacebookDispatch: () => dispatch(signInWithFacebookAction())
	};
}

function mapStateToProps(state) {
	return {
		user: state.user.data
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
