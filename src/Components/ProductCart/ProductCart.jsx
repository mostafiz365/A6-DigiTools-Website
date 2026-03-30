import React, { useState } from 'react';
import CheckImg from '../../assets/Check.png'
import { toast } from 'react-toastify';

const ProductCart = ({data, selectedCarts, setSelectedCarts}) => {

    const [buyBtn, setBuyBtn] = useState(false);

    const handleBuyBtn = () => {
        setBuyBtn(true);

        setSelectedCarts([...selectedCarts, data]);
        toast.success(`${data.name} add to cart!`);

    }
    return (
        <div>
            <div className='p-6 border-2 border-[#F2F2F2] space-y-4 rounded-2xl relative hover:scale-105 duration-500'>
                <div>
                    <img className='border border-[#F2F2F2] rounded-full p-3' src={data.icon} alt="" />
                </div>
                <div className={`badge ${data.tag === 'Best Seller' && "bg-[#FEF3C6] text-[#BB4D00]"} ${data.tag === 'Popular' && "bg-[#E1E7FF] text-[#4F39F6]"} ${data.tag === 'New' && "bg-[#DBFCE7] text-[#0A883E]"} font-medium rounded-full px-3 py-3 absolute top-4 right-4`}>{data.tag}</div>
                <h4 className='text-2xl font-bold text-[#101727]'>{data.name}</h4>
                <p className='text-[#627382]'>{data.description}</p>
                <p className='text-2xl font-bold text-[#101727]'>${data.price} <span className='text-[#627382]'>/{data.period}</span></p>
                <div>
                    {
                        (data.features).map((feature, index) => <li key={index} className='flex items-center gap-2.5 font-medium text-[#627382]'> <img src={CheckImg} alt="" />{feature}</li>)
                    }
                </div>
                <button onClick={handleBuyBtn} className={`btn w-full font-bold text-white rounded-full px-4 py-5 ${buyBtn ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} `}>
                    {buyBtn ? 'Add To Cart!' : 'Buy Now'}
                </button>
            </div>
        </div>
    );
};

export default ProductCart;