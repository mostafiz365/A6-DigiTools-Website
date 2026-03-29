import React from "react";
import BannerImg from "../../assets/banner.png";
import PlayBtn from '../../assets/Play.png';
import CurcleBtn from '../../assets/curcle.png';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen max-w-7xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <img src={BannerImg} alt="" />
          <div>
            <div className="badge bg-[#E1E7FF] text-[#9514FA] px-5 py-4 rounded-full mb-4"> <img src={CurcleBtn} alt="" /> New: AI-Powered Tools Available</div>
            <h1 className="text-7xl font-extrabold text-[#101727]">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6 text-xl text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-4 mt-8 items-center">
                <button className="btn font-semibold text-white rounded-full px-4 py-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
                
            <button className="btn font-semibold text-[#9514FA] rounded-full px-4 py-3 bg-transparent border border-[#9514FA]"> <img src={PlayBtn} alt="" /> Watch Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
