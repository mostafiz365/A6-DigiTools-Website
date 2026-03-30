import React from 'react';
import CheckImg from '../../assets/Check.png'

const PricingCart = ({data}) => {
    return (
        <div>
            <div className='bg-[#F9FAFC] p-6 border-2 border-[#F2F2F2] space-y-6 rounded-2xl hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] duration-1000 text-black hover:text-white hover:duration-300 hover:scale-105'>
                <div>
                    <h3 className='text-2xl font-bold'>{data.name}</h3>
                    <p className=''>{data.description}</p>

{/* text-[#101727] text-[#627382] */}
                </div>
                <h3 className='text-[40px] font-bold'>${data.price}<span className='text-xl'>/{data.period}</span></h3>
                <div className=''>

                    {
                        (data.features).map((feature, index) => <li key={index} className='flex items-center gap-2.5 font-medium'> <img src={CheckImg} alt="" />{feature}</li>)
                    }

                </div>
                <button className="btn font-semibold text-white w-full rounded-full px-4 py-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">{data.buttonText}</button>              

            </div>
        </div>
    );
};

export default PricingCart;