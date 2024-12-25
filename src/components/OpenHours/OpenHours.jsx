import { GiAlarmClock } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { LuTicketPlus } from "react-icons/lu";

const OpenHours = () => {
    return (
        <div className='px-5 lg:px-16 mt-20 mb-28'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Open Hours */}
                <div className="flex flex-col justify-center items-center gap-2 border-0 text-center py-10 shadow-2xl">
                    <div className="bg-gray-300 rounded-full px-5 py-5 flex flex-col justify-center items-center">
                        <GiAlarmClock className="text-5xl" />
                    </div>
                    <div className="">
                        <h1 className="text-3xl font-bold">Open Hours</h1>
                    </div>
                    <div className="">
                        <h1>Daily: 9.00 AM - 5.00 PM</h1>
                        <h1>Friday & Holidays: Closed</h1>
                    </div>
                    <div className="">
                        <button className="border-2 px-5 py-2 mt-5 transition-all font-bold hover:bg-gray-800 hover:text-white hover:border-gray-800">All Hours</button>
                    </div>
                </div>

                {/* Location */}
                <div className="flex flex-col justify-center items-center gap-2 border-0 bg-gray-800 text-white text-center py-10 shadow-2xl">
                    <div className="bg-gray-300 rounded-full px-5 py-5 flex flex-col justify-center items-center">
                        <GrMapLocation className="text-5xl text-black" />
                    </div>
                    <div className="">
                        <h1 className="text-3xl font-bold">Lind Location</h1>
                    </div>

                    <div className="">
                        <h1>Historic Gems</h1>
                        <h1>New Market, Chattogram</h1>
                    </div>
                    <div className="">
                        <button className="border-2 px-5 py-2 mt-5 transition-all font-bold border-[#AAA081] bg-[#AAA081] text-white hover:bg-white hover:border-white hover:text-black">Getting Here</button>
                    </div>
                </div>

                {/* Get Ticket */}
                <div className="flex  lg:flex flex-col justify-center items-center gap-2 border-0 text-center py-10 shadow-2xl">
                    <div className="bg-gray-300 rounded-full px-5 py-5 flex flex-col justify-center items-center">
                        <LuTicketPlus className="text-5xl" />
                    </div>
                    <div className="">
                        <h1 className="text-3xl font-bold">Get Ticket</h1>
                    </div>
                    <div className="">
                        <h1>Historics Gems</h1>
                        <h1>Collect Your Ticket</h1>
                    </div>
                    <div className="">
                        <button className="border-2 px-5 py-2 mt-5 transition-all font-bold hover:bg-gray-800 hover:text-white hover:border-gray-800">Buy Online</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenHours;