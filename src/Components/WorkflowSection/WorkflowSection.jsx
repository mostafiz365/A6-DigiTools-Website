import React from 'react';

const WorkflowSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='text-center space-y-5 py-28'>
                <h3 className='text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h3>
                <p className='text-white'>Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
                <div className='flex gap-4 justify-center items-center pt-5'>
                    <button className="btn font-semibold text-[#9514FA] rounded-full px-4 py-5 bg-white">Explore Products</button>
                    <button className="btn font-semibold text-white rounded-full px-4 py-5 bg-transparent">View Pricing</button>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkflowSection;