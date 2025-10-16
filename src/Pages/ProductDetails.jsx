import React from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import { updateList } from '../utilis/localStorage';

const ProductDetails = () => {
    const { id } = useParams();
    const { products, loading } = useProducts();
    const product = products.find(p => String(p.id) === id);
    if (loading) return <p>Loading.....</p>
    const { name, image, category, price, description } = product || {}

    // const handleAddToWishList = () => {
    //     const existingList = JSON.parse(localStorage.getItem('wishlist')) || [];
    //     let updateList = [];
    //     if (existingList) {
    //         const isDuplicate = existingList.some(p => p.id === product.id);
    //         if (isDuplicate) {
    //             return alert('This Item All Ready Added')
    //         }

    //         updateList = [...existingList, product]

    //     }
    //     else {
    //         updateList.push(product)
    //     }
    //     localStorage.setItem('wishlist', JSON.stringify(updateList));


    // }


    return (
        <div className="card bg-base-100 border w-10/12 mx-auto shadow-sm ">
            <figure className='h-[400px] overflow-hidden'>
                <img className='w-full object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p >Category:{category}</p>
                <p>Price:{price}</p>
                <p>Description:{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => updateList(product)} className="btn btn-outline">Add To WishList</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;