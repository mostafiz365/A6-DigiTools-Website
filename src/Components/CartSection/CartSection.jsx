import React, { Suspense, useState } from 'react';
import ProductsCarts from '../ProductsCarts/ProductsCarts';
import SelectedProductsCarts from '../SelectedProductsCarts/SelectedProductsCarts';


const fetchCartData = async() => {
    const res = await fetch('CartData.json');
    return res.json();
}

const CartSection = () => {
    const cartDataPromise = fetchCartData();
    const [selectedBtn, setSelectedBtn] = useState('products');
    const [selectedCarts, setSelectedCarts] = useState([]);


    
    return (
        <div>
            <div className='max-w-7xl mx-auto pb-28'>
                <div className='text-center space-y-5 mb-10'>
                    <h3 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h3>
                    <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className="flex justify-center">
                                <button onClick={() => setSelectedBtn('products')} className={`btn font-semibold rounded-full px-5 py-5 ${selectedBtn === 'products' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-[#25065D]"}`}>Products</button>

                                <button onClick={() => setSelectedBtn('cart')} className={`btn font-semibold rounded-full px-7 py-5 ${selectedBtn === 'cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-[#25065D]"}`}>
                                Cart ({selectedCarts.length})</button>
                    </div>
                </div>

                <div>
                    {
                        selectedBtn === 'products' ? 
                        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                            <ProductsCarts cartDataPromise={cartDataPromise} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}></ProductsCarts>
                        </Suspense> 
                        :
                        
                        <SelectedProductsCarts selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}></SelectedProductsCarts>
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default CartSection;