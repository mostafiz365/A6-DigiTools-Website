import React, { useState } from 'react';

const SelectedCart = ({cartData, selectedCarts, setSelectedCarts}) => {
    const handleRemoveBtn = () => {
        const filterCart = selectedCarts.filter(cart => cart.id !== cartData.id);
        setSelectedCarts(filterCart);

    }

    return (
        <div>
            <div>
                <div className='bg-[#F9FAFC] p-6 flex justify-between items-center rounded-2xl'>
                    <div className='flex items-center gap-5'>
                        <div className='bg-white border border-[#F2F2F2] p-3 rounded-full'>
                            <img src={cartData.icon} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-[#101727]'>{cartData.name}</h4>
                            <p className='font-medium text-[#627382]'>$ {cartData.price}</p>
                        </div>
                        
                    </div>
                    <button onClick={handleRemoveBtn} className='font-bold text-[#FF3980] cursor-pointer'>Remove</button>

                </div>
            </div>
        </div>
    );
};

export default SelectedCart;