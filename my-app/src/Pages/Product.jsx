import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts';

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Convert productId to a number if it's not already
  const numericProductId = Number(productId);
  
  // Find the product in all_product
  const product = all_product.find((e) => e.id === numericProductId);

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
}

export default Product;
