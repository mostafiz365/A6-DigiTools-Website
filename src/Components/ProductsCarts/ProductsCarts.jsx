import React, { use } from 'react';
import ProductCart from '../ProductCart/ProductCart';

const ProductsCarts = ({cartDataPromise, selectedCarts, setSelectedCarts}) => {
    const productData = use(cartDataPromise);
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    productData.map(data => <ProductCart key={data.id} data={data} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}></ProductCart>)
                }
            </div>
        </div>
    );
};

export default ProductsCarts;