import React from 'react';
import TopCart from './TopCart';

const HomePageCart = async () => {
    const res = await fetch('https://pixgen-ten.vercel.app/data.json')
    const photo = await res.json();
    const topPhotos = photo.slice(0, 8);
    console.log(topPhotos);
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Top Generations</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {topPhotos.map(p => <TopCart key={p.id} p={p}/>)}
            </div>
        </div>
    );
};

export default HomePageCart;