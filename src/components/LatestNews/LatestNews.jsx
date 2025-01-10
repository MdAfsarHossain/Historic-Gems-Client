import { LuCalendarDays } from "react-icons/lu";
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='mb-28'>
            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className='uppercase font-bold text-3xl lg:text-4xl'>Latest from <span className='text-green-500'>our News</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            {/* Latest News */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 px-5 lg:px-5">
                {/* Card-1 */}
                <div className="flex flex-col justify-start items-start gap-1 border-0 shadow-2xl rounded-md group">
                    <div className="w-full overflow-hidden rounded-t-md relative">
                        <img className="w-full h-64 group-hover:scale-105 transition-all object-cover rounded-t-md" src="https://i.ibb.co.com/99znnq4/cmabaroque.jpg" alt="" />

                        <div className="absolute top-8 left-8">
                            <div className="flex flex-row gap-2 justify-start items-center bg-white px-3 py-2">
                                <p><LuCalendarDays className="text-[#AAA081]" /></p>
                                <p className="font-semibold text-gray-500">July 15, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 font-semibold text uppercase flex flex-row gap-3 text-gray-500 mt-3">
                        <p>By Afsar Hossain</p>
                        <p>|</p>
                        <p>03 Comments</p>
                    </div>
                    <div className="px-3">
                        <h1 className="font-bold text-xl text-gray-700">Celebrating at Our Historic Gems Museum</h1>
                    </div>
                    <div className="px-3 mt-2">
                        <p className=" text-gray-500 line-clamp-3">Our museum proudly showcases humanity's most treasured artifacts, from ancient tools to iconic documents that shaped civilizations. Celebrate the ingenuity, artistry, and stories behind each exhibit in an immersive and awe-inspiring experience.</p>
                    </div>
                    <div className="mb-5 mt-2 px-3">
                        <Link
                            className='font-bold text-lg hover:text-green-500 hover:underline transition-all hover:underline-offset-8'
                        >Learn More</Link>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="flex flex-col justify-start items-start gap-1 border-0 shadow-2xl rounded-md group">
                    <div className="w-full overflow-hidden rounded-t-md relative">
                        <img className="w-full h-64 group-hover:scale-105 transition-all object-cover rounded-t-md" src="https://i.ibb.co.com/kJLpgyX/blog-1-2.jpg" alt="" />

                        <div className="absolute top-8 left-8">
                            <div className="flex flex-row gap-2 justify-start items-center bg-white px-3 py-2">
                                <p><LuCalendarDays className="text-[#AAA081]" /></p>
                                <p className="font-semibold text-gray-500">July 27, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 font-semibold text uppercase flex flex-row gap-3 text-gray-500 mt-3">
                        <p>By Afsar Hossain</p>
                        <p>|</p>
                        <p>03 Comments</p>
                    </div>
                    <div className="px-3">
                        <h1 className="font-bold text-xl text-gray-700">6 Reasons Create Playdate is Great for Little Ones</h1>
                    </div>
                    <div className="px-3 mt-2">
                        <p className=" text-gray-500 line-clamp-3">Playdates are more than just fun—they’re essential for your child’s development! From building social skills and boosting creativity to enhancing emotional resilience, playdates offer countless benefits.</p>
                    </div>
                    <div className="mb-5 mt-2 px-3">
                        <Link
                            className='font-bold text-lg hover:text-green-500 hover:underline transition-all hover:underline-offset-8'
                        >Learn More</Link>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="flex flex-col justify-start items-start gap-1 border-0 shadow-2xl rounded-md group">
                    <div className="w-full overflow-hidden rounded-t-md relative">
                        <img className="w-full h-64 group-hover:scale-105 transition-all object-cover rounded-t-md" src="https://i.ibb.co.com/SNFb0bL/how-to-manage-a-museum.jpg" alt="" />

                        <div className="absolute top-8 left-8">
                            <div className="flex flex-row gap-2 justify-start items-center bg-white px-3 py-2">
                                <p><LuCalendarDays className="text-[#AAA081]" /></p>
                                <p className="font-semibold text-gray-500">July 30, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 font-semibold text uppercase flex flex-row gap-3 text-gray-500 mt-3">
                        <p>By Afsar Hossain</p>
                        <p>|</p>
                        <p>03 Comments</p>
                    </div>
                    <div className="px-3">
                        <h1 className="font-bold text-xl text-gray-700">This List has been Turned into a Web App</h1>
                    </div>
                    <div className="px-3 mt-2">
                        <p className=" text-gray-500 line-clamp-3">We've transformed this list into an interactive web app for a seamless experience! Now, you can explore, organize, and access the information effortlessly, right at your fingertips.</p>
                    </div>
                    <div className="mb-5 mt-2 px-3">
                        <Link
                            className='font-bold text-lg hover:text-green-500 hover:underline transition-all hover:underline-offset-8'
                        >Learn More</Link>
                    </div>
                </div>
            </div>
            {/* End of Latest News */}
        </div>
    );
};

export default LatestNews;

// https://i.ibb.co.com/99znnq4/cmabaroque.jpg
// https://i.ibb.co.com/SNFb0bL/how-to-manage-a-museum.jpg