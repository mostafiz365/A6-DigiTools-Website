import React from 'react';
import UserImg from '../../assets/user.png';
import PackageImg from '../../assets/package.png';
import RocketImg from '../../assets/rocket.png';

const GuideSection = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='py-28'>
                <div className='text-center space-y-5'>
                    <h3 className='text-5xl font-extrabold text-[#101727]'>Get Started in 3 Steps</h3>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-right mt-10 px-4'>
                    <div className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'>
                        <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">01</div>
                        <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>                           
                            <img className='mx-auto items-center' src={UserImg} alt="" />
                        </div>
                        <h4 className='text-2xl font-bold text-[#101727] text-center'>Create Account</h4>
                        <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'>
                        <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">02</div>
                        <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>                           
                            <img className='mx-auto items-center' src={PackageImg} alt="" />
                        </div>
                        <h4 className='text-2xl font-bold text-[#101727] text-center'>Choose Products</h4>
                        <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='p-6 rounded-2xl bg-white border-2 border-[#F1F1F1] space-y-5'>
                        <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-3 py-3 w-10 h-10 font-bold">03</div>
                        <div className='bg-[#f5e8ff] p-3 rounded-full w-24 h-24 flex justify-center items-center mx-auto'>                           
                            <img className='mx-auto items-center' src={RocketImg} alt="" />
                        </div>
                        <h4 className='text-2xl font-bold text-[#101727] text-center'>Start Creating</h4>
                        <p className='text-[#627382] text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default GuideSection;