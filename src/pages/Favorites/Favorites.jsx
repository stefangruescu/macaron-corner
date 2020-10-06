import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./Favorites.css";
import { removeFromFavorites } from "../../redux/favorites/favoritesActions";

const Favorites = (props) => {
  return (
    <Layout>
      <div className='favorites-page'>
        <div className='d-flex justify-content-between text-center h4 text-bold'>
          <p className='w-25'>Produs</p>
          <p className='w-25'>Pret</p>
        </div>
        {props.favorites.map((product, index) => {
          return (
            <div
              className='d-flex justify-content-between align-items-center text-center'
              key={product.id}
            >
              <div className='w-25 d-flex flex-column justify-content-center align-items-center'>
                <img src={product.image} alt='Produs' />
                <p>{product.name}</p>
              </div>
              <div className='w-25 d-flex justify-content-center'>
                <p className='mr-2'>
                  {product.price} {product.currency}
                </p>
                <Close
                  onClick={() =>
                    props.removeFromFavoritesWithDispatch(product.id)
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state.favoriteCart.favorites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeFromFavoritesWithDispatch: (payload) =>
      dispatch(removeFromFavorites(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
