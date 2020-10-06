import { START_LOADING, UPDATE_USER_DATA, UPDATE_USER_ERROR } from '../constants/constants';

import { signInWithGoogle, signOut, signInWithFacebook } from '../../apis/firebase';

export function startLoading() {
	return {
		type: START_LOADING
	};
}

export function updateUserData(payload) {
	return {
		type: UPDATE_USER_DATA,
		payload
	};
}

export function updateUserError(payload) {
	return {
		type: UPDATE_USER_ERROR,
		payload
	};
}

export function signInWithGoogleAction() {
	return (dispatch) => {
		dispatch(startLoading());

		signInWithGoogle()
			.then((result) => {
				const userData = result.user;
				dispatch(updateUserData(userData));
			})
			.catch((error) => {
				dispatch(updateUserError(error));
			});
	};
}

export function signInWithFacebookAction() {
	return (dispatch) => {
		dispatch(startLoading());
		signInWithFacebook()
			.then((result) => {
				const userData = result.user;
				dispatch(updateUserData(userData));
			})
			.catch((error) => {
				dispatch(updateUserError(error));
			});
	};
}

export function signOutAction() {
	return (dispatch) => {
		dispatch(startLoading());

		signOut()
			.then(() => {
				dispatch(updateUserData(null));
			})
			.catch((error) => {
				dispatch(updateUserError(error));
			});
	};
}
