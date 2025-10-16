import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadWishList, removeFromWishList } from '../utilis/localStorage';

const WishList = () => {
    const [wishList, setWishList] = useState(() => loadWishList());
    const [sortOrder, setSortOrder] = useState('none');

    if (!wishList.length) return <p className='text-3xl font-bold text-center mt-40'> No Data Available</p>
    const sortedItem = (() => {
        if (sortOrder === 'price-asc') {
            return [...wishList].sort((a, b) => a.price - b.price)
        }
        else if (setSortOrder === 'price-desc') {
            return [...wishList].sort((a, b) => b.price - a.price)
        }
        else {
            return wishList
        }
    })()

    const handleRemove = (id) => {
        //  remove from local storage 
        removeFromWishList()
        // for ui instant update 
        setWishList(prev => prev.filter(p => p.id !== id))





    }

    // generate chart data 
    const totalsByCategory = {}

    wishList.forEach(product => {
        const category = product.category
        totalsByCategory[category] = (totalsByCategory[category] || 0) + product.price;

    })
    const chartData = Object.keys(totalsByCategory).map(category => ({
        category: category,
        total: totalsByCategory[category],
    }))
    console.log(chartData)

    return (
        <div className='space-y-6'>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>WishList Products: <span className='font-bold text-sm'>({wishList.length}) Products Found</span></h1>

                <label className='form-control w-full max-w-xs'>
                    <select className='select select-border' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                        <option value="none">Sort By Price</option>
                        <option value="price-asc">Low-&gt;High</option>
                        <option value="price-desc">High-&gt;Low</option>

                    </select>
                </label>
            </div>

            <div className='space-y-3 '>
                {
                    sortedItem.map(p => <div key={p.id} className="card card-side bg-base-100 shadow-sm border-2">
                        <figure>
                            <img className='w-40 h-28 object-cover'
                                src={p.image}
                                alt={p.image} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{p.name}</h2>
                            <p className='text-base-content/70'>{p.category}</p>
                            <div className="flex items-center pr-4 gap-4 justify-end pb-10">
                                <div className='font-semibold'>${p.price}</div>
                                <button onClick={() => handleRemove(p.id)} className="btn btn-outline">Remove</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* chart  */}
            <div className='space-y-3'>
                <h3 className='text-xl font-semibold'>WishList Summary</h3>
                <div className='bg-base-100 rounded-xl h-80 p-4'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}

                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {/* <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} /> */}
                            <Bar dataKey='total' fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div >
    );
};

export default WishList;