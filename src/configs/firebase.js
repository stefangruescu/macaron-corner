import React from 'react';
require('dotenv');

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: 'abibas-shop.firebaseapp.com',
	databaseURL: 'https://abibas-shop.firebaseio.com',
	projectId: 'abibas-shop',
	storageBucket: 'abibas-shop.appspot.com',
	messagingSenderId: '937394197189',
	appId: '1:937394197189:web:d7671c69d043436bba96ac'
};
export default firebaseConfig;
