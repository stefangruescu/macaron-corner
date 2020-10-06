import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/constants';

const initialState = {
	products: []
};

export function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			let productInCart = false;

			const updatedProducts = state.products.map((product) => {
				if (product.id === action.payload.product.id) {
					productInCart = true;

					return {
						...product,
						quantity: product.quantity + 1
					};
				} else {
					return product;
				}
			});

			if (!productInCart) {
				return Object.assign({}, state, {
					products: [
						...state.products,
						{
							...action.payload.product,
							quantity: 1
						}
					]
				});
			} else {
				return Object.assign({}, state, {
					products: updatedProducts
				});
			}

		case REMOVE_FROM_CART:
			return {
				...state,
				products: [ ...state.products.filter((product) => product.id !== action.payload) ]
			};

		default:
			return state;
	}
}
