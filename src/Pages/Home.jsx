import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useProducts';
import LoadingSpinner from '../Spinner/LoadingSpinner';

const Home = () => {
    const { products, error, loading } = useProducts();
    const featuredProducts = products.slice(0, 6);
    // console.log(products)
    return (
        < div >

            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>Feature Products</h1>
                <Link className='btn btn-outline' to='/products'>See All Products</Link>
            </div>
            {
                loading ? <LoadingSpinner /> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        featuredProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            }
        </div >
    );
};

export default Home;