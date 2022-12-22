import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const Cart = () => {

  const products = useSelector(state => state.cart.products)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map((product, i) => <ProductCard key={i} product={product} />)
      }
    </div>
  );
};

export default Cart;
