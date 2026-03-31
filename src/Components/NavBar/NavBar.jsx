import React from "react";
import CartImg from '../../assets/products/shopping-cart.png'

const NavBar = ({navCount}) => {
  return (
    <div className="border-b border-[#F2F2F2] sticky top-0 bg-white z-10">
      <div className="navbar max-w-7xl mx-auto py-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl md:text-3xl text-[#9514FA] font-bold">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 flex gap-5">
            <li className="text-[#101727] font-semibold"><a>Products</a></li>
            <li className="text-[#101727] font-semibold"><a>Features</a></li>
            <li className="text-[#101727] font-semibold"><a>Pricing</a></li>
            <li className="text-[#101727] font-semibold"><a>Testimonials</a></li>
            <li className="text-[#101727] font-semibold"><a>FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div className="flex items-center">
            <img src={CartImg} alt="" />
            <span className={`badge bg-red-500 text-white text-[10px] rounded-full ${navCount === 0? 'hidden' : ''}`}>{navCount}</span>
          </div>
          <button className="font-semibold text-[#101727]">Login</button>
          <button className="btn font-semibold text-white rounded-full px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
