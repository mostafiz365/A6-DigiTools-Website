import React from 'react';

const UsersNumber = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-28'>
            <div className='max-w-5xl mx-auto flex flex-col lg:flex-row gap-5 justify-between py-16'>
                <div className='space-y-3.5 text-center'>
                    <h3 className='text-6xl font-extrabold text-white'>50K+</h3>
                    <h5 className='text-2xl font-medium text-white'>Active Users</h5>
                </div>
                {/* <div className="divider divider-horizontal">OR</div> */}
                <div className='space-y-3.5 text-center'>
                    <h3 className='text-6xl font-extrabold text-white'>200+</h3>
                    <h5 className='text-2xl font-medium text-white'>Premium Tools</h5>
                </div>
                {/* <div className="divider divider-horizontal">OR</div> */}
                <div className='space-y-3.5 text-center'>
                    <h3 className='text-6xl font-extrabold text-white'>4.9</h3>
                    <h5 className='text-2xl font-medium text-white'>Rating</h5>
                </div>
            </div>
        </div>
    );
};

export default UsersNumber;