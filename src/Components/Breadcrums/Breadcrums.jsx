import React, { useContext } from 'react';
import breadcrum_arrow from '../Assets/breadcrum_arrow.png';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import './Breadcrums.css';

const Breadcrums = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Finding the product with the extracted ID from the URL
  const product = all_product.find((product) => product.id === parseInt(productId));

  if (!product) {
    // Handle the case where the product is not found
    return <div>Breadcrumb not found</div>;
  }

  return (
    <div className='breadcrums'>
      <p>
        HOME <img src={breadcrum_arrow} alt='' /> SHOP <img src={breadcrum_arrow} alt='' /> {product.category}{' '}
        <img src={breadcrum_arrow} alt='' /> {product.name}
      </p>
    </div>
  );
};

export default Breadcrums;

