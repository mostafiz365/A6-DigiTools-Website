import React, { use } from 'react';
import ProductCart from '../ProductCart/ProductCart';

const ProductsCarts = ({cartDataPromise, selectedCarts, setSelectedCarts, handleNavCount, navCount, setNavCount}) => {
    const productData = use(cartDataPromise);
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                {
                    productData.map(data => <ProductCart key={data.id} data={data} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} handleNavCount={handleNavCount}
                    navCount={navCount} setNavCount={setNavCount}></ProductCart>)
                }
            </div>
        </div>
    );
};

export default ProductsCarts;