
const OngoingExhibition = () => {
    return (
        <div className="mb-28">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className='uppercase font-bold text-3xl md:text-4xl'>Ongoing <span className='text-green-500'>Exhibitions</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            {/* Exhibitons Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-16">
                {/* Card-1 */}
                <div className="flex flex-col justify-start items-start gap-1 border-0 shadow-2xl rounded-md group">
                    <div className="w-full overflow-hidden rounded-t-md">
                        <img className="w-full h-64 group-hover:scale-105 transition-all object-cover rounded-t-md" src="https://i.ibb.co.com/09fHTXR/ancient-egyptian-offering-table-trips-in-egypt.jpg" alt="" />
                    </div>
                    <div className="px-3">
                        <p className="text-[#928970] text-lg font-bold">Exhibition</p>
                        <h1 className="font-bold text-xl text-gray-700">The Exhibits Cover All Time of The Egyptian Civilization.</h1>
                    </div>
                    <div className="px-3 mt-2">
                        <p className="font-semibold text-gray-500">Dec-20, 2024 - Dec 31, 2024</p>
                    </div>
                    <div className="mb-5 mt-4 px-3">
                        <button className="bg-gray-800 text-white px-5 rounded py-2 font-bold border-2 border-gray-800 hover:bg-transparent hover:border-gray-800 hover:text-gray-800 transition-all">Read More</button>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="flex flex-col justify-start items-start gap-1 border-0 shadow-2xl rounded-md group">
                    <div className="w-full overflow-hidden rounded-t-md">
                        <img className="w-full h-64 group-hover:scale-105 transition-all object-cover rounded-t-md" src="https://i.ibb.co.com/S0MRZVk/2-HADRIAN-AND-ATHENS-1024x640.jpg" alt="" />
                    </div>
                    <div className="px-3">
                        <p className="text-[#928970] text-lg font-bold">Exhibition</p>
                        <h1 className="font-bold text-xl text-gray-700">Hadrian and Athens. Conversing with an Ideal World</h1>
                    </div>
                    <div className="px-3 mt-2">
                        <p className="font-semibold text-gray-500">Dec-20, 2024 - Dec 31, 2024</p>
                    </div>
                    <div className="mb-5 mt-4 px-3">
                        <button className="bg-gray-800 text-white px-5 rounded py-2 font-bold border-2 border-gray-800 hover:bg-transparent hover:border-gray-800 hover:text-gray-800 transition-all">Read More</button>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="flex flex-col justify-start items-start gap-1 border-0 shadow-2xl rounded-md group">
                    <div className="w-full overflow-hidden rounded-t-md">
                        <img className="w-full h-64 group-hover:scale-105 transition-all object-cover rounded-t-md" src="https://i.ibb.co.com/KDmWzTx/collections-3-3.jpg" alt="" />
                    </div>
                    <div className="px-3">
                        <p className="text-[#928970] text-lg font-bold">Exhibition</p>
                        <h1 className="font-bold text-xl text-gray-700">Classicita ed Europa. The common destiny of Greece and Italy.</h1>
                    </div>
                    <div className="px-3 mt-2">
                        <p className="font-semibold text-gray-500">Dec-20, 2024 - Dec 31, 2024</p>
                    </div>
                    <div className="mb-5 mt-4 px-3">
                        <button className="bg-gray-800 text-white px-5 rounded py-2 font-bold border-2 border-gray-800 hover:bg-transparent hover:border-gray-800 hover:text-gray-800 transition-all">Read More</button>
                    </div>
                </div>
            </div>
            {/* End of Exhibitions Cards Exhibitons Cards */}
        </div>
    );
};

export default OngoingExhibition;

// https://i.ibb.co.com/09fHTXR/ancient-egyptian-offering-table-trips-in-egypt.jpg
// https://i.ibb.co.com/KDmWzTx/collections-3-3.jpg
// https://i.ibb.co.com/S0MRZVk/2-HADRIAN-AND-ATHENS-1024x640.jpg