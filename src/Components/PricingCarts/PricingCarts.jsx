import React, { use } from 'react';
import PricingCart from '../PricingCart/PricingCart';

const PricingCarts = ({pricingDataPromise}) => {

    const pricingData = use(pricingDataPromise);
    return (
        <div>
            <div className='py-28'>
                <div className='text-center space-y-5 mb-10'>
                    <h3 className='text-5xl font-extrabold text-[#101727]'>Simple, Transparent Pricing</h3>
                    <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div >
                    
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
                    {
                        pricingData.map(data => <PricingCart key={data.id} data={data}></PricingCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingCarts;