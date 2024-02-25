import React from 'react';

const FooterList = ({data}) => {
    const title=data.title
    const option=data.option
    return (
        <div>
            <h1 className='text-3xl border-b font-bold border-[#ff7c08]'>{title}</h1>
            <div className='mt-4'>

            </div>
            
        </div>
    );
};

export default FooterList;