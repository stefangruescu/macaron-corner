import React, { Component } from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import { Link } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/favoritesActions';

class ProductItem extends Component {
	isInFavorite = (arr, id) => {
		let isInFavorites = false;
		arr.map((product) => {
			if (product.id === id) isInFavorites = product.addedToFavorite;
			return product;
		});
		return isInFavorites;
	};

	render() {
		const { name, price, currency, image, id, favorites } = this.props;

		return (
			<div className='product-item col-12 col-md-4 mb-3 mt-3 d-flex flex-column align-items-center'>
				<Link to={`/product/${id}`} className='d-flex flex-column align-items-center'>
					<img src={image} alt='productPhoto' className='mb-2' />
					<p className='mb-1 text-center'>{name}</p>
					<p className='text-center'>{currency + price}</p>
				</Link>
				<div className='d-flex align-items-center '>
					<button
						className='btn btn-outline-dark mr-3'
						onClick={() =>
							this.props.addToCart({
								product: {
									id,
									name,
									price,
									currency,
									image
								}
							})}
					>
						ADD TO CART
					</button>

					<button
						style={{ border: 'none', background: 'none' }}
						onClick={() => {
							return !this.isInFavorite(favorites, id)
								? this.props.addToFavoritesWithDispatch({
										favorite: {
											id,
											name,
											price,
											currency,
											image,
											addedToFavorite: true
										}
									})
								: this.props.removeFromFavoritesWithDispatch(id);
						}}
					>
						{!this.isInFavorite(favorites, id) ? (
							<i className='far fa-heart' />
						) : (
							<i className='fas fa-heart' style={{ background: 'white', color: 'red' }} />
						)}
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		favorites: state.favoriteCart.favorites
	};
}
function mapDispatchToProps(dispatch) {
	return {
		addToCart: (payload) => dispatch(addToCart(payload)),
		addToFavoritesWithDispatch: (payload) => dispatch(addToFavorites(payload)),
		removeFromFavoritesWithDispatch: (payload) => dispatch(removeFromFavorites(payload))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
