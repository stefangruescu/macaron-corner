import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/favoritesActions';

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {}
		};
	}

	isInFavorite = (arr, id) => {
		let isInFavorites = false;
		arr.map((product) => {
			if (product.id === id) isInFavorites = product.addedToFavorite;
			return product;
		});
		return isInFavorites;
	};

	componentDidMount() {
		const { match } = this.props;
		const productId = match.params.productId;
		const categoryValues = Object.values(products);
		const productItems = categoryValues.reduce((acc, category) => {
			return [ ...acc, ...category.items ];
		}, []);
		const currentProduct = productItems.find((product) => {
			return Number(productId) === product.id;
		});
		this.setState({ product: currentProduct });
	}

	render() {
		const { product } = this.state;
		const { favorites } = this.props;

		return (
			<Layout>
				<div className='product-page container-fluid container-min-max-width'>
					<h1 className='my-5 h2'>{product.name}</h1>
					<div className='product-info d-flex'>
						<div className='image-wrapper d-flex mr-5'>
							<img src={product.image} alt='Product presentation' />
						</div>
						<div className='product-details'>
							<p className='h2 product-price'>
								{product.price} {product.currency}
							</p>
							<div className='product-buttons'>
								<button
									className='btn btn-dark mb-4 font-weight-bold'
									onClick={() => {
										this.props.addToCart({
											product: {
												id: product.id,
												name: product.name,
												price: product.price,
												currency: product.currency,
												image: product.image
											}
										});
									}}
								>
									ADD TO CART
								</button>
								<button
									style={{ border: 'none', background: 'none' }}
									onClick={() => {
										return !this.isInFavorite(favorites, product.id)
											? this.props.addToFavoritesWithDispatch({
													favorite: {
														id: product.id,
														name: product.name,
														price: product.price,
														currency: product.currency,
														image: product.image,
														addedToFavorite: true
													}
												})
											: this.props.removeFromFavoritesWithDispatch(product.id);
									}}
								>
									{!this.isInFavorite(favorites, product.id) ? (
										<i className='far fa-heart' />
									) : (
										<i className='fas fa-heart' style={{ background: 'white', color: 'red' }} />
									)}
								</button>
							</div>
							<p>
								<span className='font-weight-bold'>Size</span>: {product.size}
							</p>
							<p>
								<span className='font-weight-bold'>Color</span>: {product.colour}
							</p>
							<p>
								<span className='font-weight-bold'>Material</span>: {product.material}
							</p>
							<p>
								<span className='font-weight-bold'>Brand</span>: {product.brand}
							</p>
							<p className='font-weight-bold mb-1'>Description:</p>
							<p>{product.description}</p>
						</div>
					</div>
				</div>
			</Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
