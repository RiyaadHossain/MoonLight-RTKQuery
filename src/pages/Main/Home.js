import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { brandToggle, toggle } from "../../features/filter/filterSlice";

const Home = () => {

  const dispatch = useDispatch()
  const { stock, brands } = useSelector(state => state.filter)
  const { isFetching, isError, data, error } = useGetProductsQuery()
  const products = data?.data

  const activeClass = "text-white  bg-indigo-500 border-white";

  if(isFetching) return <p>Loading...</p>
  if (isError) return <p>{error}</p>

  let content;

  if (products?.length && (stock || brands?.length || true)) {
    content = products.filter(product => {
      if (brands.length) {
        return brands.includes(product.brand)
      }
      return product
    }).filter(product => {
      if (stock) {
        return product.status
      }
      return product
    }).map((product, i) => <ProductCard key={i} product={product} />)
  }

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
        >
          In Stock
        </button>
        <button onClick={() => dispatch(brandToggle('amd'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : null}`}>
          AMD
        </button>
        <button onClick={() => dispatch(brandToggle('intel'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
