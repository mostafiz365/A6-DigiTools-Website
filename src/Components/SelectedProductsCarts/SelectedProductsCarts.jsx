import React from "react";
import SelectedCart from "../SelectedCart/SelectedCart";
import CartImg from "../../assets/products/shopping-cart.png"
import { toast } from "react-toastify";

const SelectedProductsCarts = ({ selectedCarts, setSelectedCarts }) => {
  const totalPrice = selectedCarts.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);

  const handleCheckoutBtn = () => {
    setSelectedCarts([]);
    toast.success("Payment Successful!");
  }



  return (
    <div className="p-10 rounded-2xl border-2 border-[#F2F2F2] space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-[#101727]">Your Cart</h3>
      </div>
      {selectedCarts.length === 0 ? (
        <div className="text-center space-y-5 py-10">
          <img className="w-10 h-10 mx-auto" src={CartImg} alt="" />
          <h3 className="text-xl font-bold text-[#13131370]">Your Cart is Empty</h3>
        </div>
      ) : (
        <div>
          <div className="space-y-5">
            {selectedCarts.map((cartData) => (
              <SelectedCart
                key={cartData.id}
                cartData={cartData}
                selectedCarts={selectedCarts}
                setSelectedCarts={setSelectedCarts}
              ></SelectedCart>
            ))}
          </div>

          <div className="flex justify-between items-center my-6">
            <p>Total:</p>
            <h4 className="text-2xl font-bold text-[#101727]">
              $ {totalPrice}
            </h4>
          </div>
          <div>
            <button onClick={handleCheckoutBtn} className="btn w-full font-bold text-white rounded-full px-4 py-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedProductsCarts;
