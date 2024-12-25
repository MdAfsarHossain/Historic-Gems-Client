import React from 'react';

const UpcomingExhibitions = () => {
    return (
        <div className='mb-28'>
            {/* Heading */}
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className='uppercase font-bold text-3xl lg:text-4xl'>Upcoming <span className='text-green-500'>Exhibitions</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of HeadinFg */}

            {/* Upcoming Exhibitinos */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-16">
                {/* Card-1 */}
                <div className="flex flex-col justify-start items-center gap-3 border-0 shadow-2xl rounded-b-md group">
                    <div className="w-full overflow-hidden rounded-t-md">
                        <img className="w-full h-64 group-hover:scale-105 transition-all rounded-t-md" src="https://i.ibb.co.com/HqCfyq8/06african-civilization-2-medium-Square-At3-X.jpg" alt="" />
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-2xl text-gray-700">The Exhibits</h1>
                        <h1 className="font-bold text-2xl text-gray-700">Civilization</h1>
                    </div>
                    <div className="mb-8">
                        <p className="font-semibold text-gray-500">Feb-12, 2025 - Feb 27, 2025</p>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="flex flex-col justify-start items-center gap-3 border-0 shadow-2xl rounded-b-md group">
                    <div className="w-full overflow-hidden rounded-t-md">
                        <img className="w-full h-64 group-hover:scale-105 transition-all rounded-t-md" src="https://i.ibb.co.com/bzW7cHs/826d8fb9-1d5d-ee11-8df1-00224842d96b.webp" alt="" />
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-2xl text-gray-700">English Landscape</h1>
                        <h1 className="font-bold text-2xl text-gray-700">Painting</h1>
                    </div>
                    <div className="mb-8">
                        <p className="font-semibold text-gray-500">Feb-12, 2025 - Feb 27, 2025</p>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="flex flex-col justify-start items-center gap-3 border-0 shadow-2xl rounded-b-md group">
                    <div className="w-full overflow-hidden rounded-t-md">
                        <img className="w-full h-64 group-hover:scale-105 transition-all rounded-t-md" src="https://i.ibb.co.com/349KmMj/collections-3-2.jpg" alt="" />
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-2xl text-gray-700">Classicita of</h1>
                        <h1 className="font-bold text-2xl text-gray-700">Greece and Italy</h1>
                    </div>
                    <div className="mb-8">
                        <p className="font-semibold text-gray-500">Feb-12, 2025 - Feb 27, 2025</p>
                    </div>
                </div>
            </div>
            {/* End of Upcoming Exhibitinos */}
        </div>
    );
};

export default UpcomingExhibitions;


// https://i.ibb.co.com/349KmMj/collections-3-2.jpg
// https://i.ibb.co.com/HqCfyq8/06african-civilization-2-medium-Square-At3-X.jpg