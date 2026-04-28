import TopCart from '@/components/TopCart';
import React from 'react';

const AllPhotoPage = async () => {
    const res = await fetch('https://pixgen-ten.vercel.app/data.json')
    const photos = await res.json();
    return (
        <div>
            <h1 className=' text-2xl font-bold m-4'>All Photos</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {photos.map(p => <TopCart key={p.id} p={p}/>)}
            </div>
        </div>
    );
};

export default AllPhotoPage;