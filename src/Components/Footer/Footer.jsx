import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='max-w-7xl mx-auto pt-28 pb-8'>
                <div className='grid md:grid-cols-8 lg:grid-cols-12 gap-12 mb-20'>
                    <div className='md:col-span-3 lg:col-span-4 space-y-4 text-center md:text-left'>
                        <h4 className='text-[40px] font-bold text-white'>DigiTools</h4>
                        <p className='text-white'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='md:col-span-1 lg:col-span-1 space-y-4 text-center md:text-left'>
                        <h5 className='text-xl font-medium text-white'>Product</h5>
                        <ul className='space-y-4'>
                            <li className='text-white'><a href="">Features</a></li>
                            <li className='text-white'><a href="">Pricing</a></li>
                            <li className='text-white'><a href="">Templates</a></li>
                            <li className='text-white'><a href="">Integrations</a></li>
                        </ul>
                    </div>
                    <div className='md:col-span-1 lg:col-span-2 space-y-4 text-center'>
                        <h5 className='text-xl font-medium text-white'>Company</h5>
                        <ul className='space-y-4'>
                            <li className='text-white'><a href="">About</a></li>
                            <li className='text-white'><a href="">Blog</a></li>
                            <li className='text-white'><a href="">Careers</a></li>
                            <li className='text-white'><a href="">Press</a></li>
                        </ul>
                    </div>
                    <div className='md:col-span-1 lg:col-span-2 space-y-4 text-center md:text-left'>
                        <h5 className='text-xl font-medium text-white'>Product</h5>
                        <ul className='space-y-4'>
                            <li className='text-white'><a href="">Documentation</a></li>
                            <li className='text-white'><a href="">Help Center</a></li>
                            <li className='text-white'><a href="">Community</a></li>
                            <li className='text-white'><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='md:col-span-2 lg:col-span-3 space-y-4 text-center md:text-left'>
                        <h5 className='text-xl font-medium text-white'>Social Links</h5>
                        <div className='flex items-center gap-3 justify-center md:justify-start'>
                            <a href=""><TbBrandInstagramFilled className='bg-white rounded-full'/></a>
                            <a href=""><FaFacebookSquare className='bg-white rounded-full'/></a>
                            <a href=""><FaXTwitter className='bg-white rounded-full'/></a>
                        </div>

                    </div>
                </div>
                <div className="divider divider-neutral"></div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[#FAFAFA]'>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className='flex items-center gap-5'>
                            <li className='text-[#FAFAFA]'><a href=""></a>Privacy Policy</li>
                            <li className='text-[#FAFAFA]'><a href=""></a>Terms of Service</li>
                            <li className='text-[#FAFAFA]'><a href=""></a>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;