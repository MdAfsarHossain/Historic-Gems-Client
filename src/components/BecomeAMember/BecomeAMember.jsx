import { TbArrowRightToArc } from "react-icons/tb";

const BecomeAMember = () => {
    return (
        <div className='mb-28'>
            {/* Heading */}
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className='uppercase font-bold text-3xl lg:text-4xl'>Become a member of <br /> <span className='text-green-500'>Historic Gems</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            {/* Become A Member of Historics Gems */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mt-14 px-5 lg:px-0">
                <div className="flex-1">
                    <img src="https://i.ibb.co.com/KjR6kgF/photo-1493564832173-630cc9e0765d.jpg" alt="" />
                </div>
                <div className="flex-1 flex flex-col gap-3">
                    <div className="">
                        <h1 className='text-4xl md:text-5xl font-bold'>Become a Member</h1>
                        <h1 className='text-4xl md:text-5xl font-bold'>of <span className='text-green-500'>Historic Gems</span></h1>
                    </div>

                    <div className="">
                        <ul>
                            <li className='text-xl flex flex-row justify-start items-center gap-5'><span><TbArrowRightToArc className="text-2xl" /></span> Unlimited General Admission</li>
                            <li className='text-xl flex flex-row justify-start items-center gap-5'><span><TbArrowRightToArc className="text-2xl" /></span> Free Tickets to Special Exhibitions</li>
                            <li className='text-xl flex flex-row justify-start items-center gap-5'><span><TbArrowRightToArc className="text-2xl" /></span> Access to a Member Entrance</li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <button className='uppercase px-10 py-3 bg-white text-black font-thin text-xl border-2 hover:border-[#AAA081] hover:bg-[#AAA081] hover:text-white transition-all'>Become a member</button>
                    </div>
                </div>
            </div>
            {/* End of Become A Member of Historics Gems */}
        </div>
    );
};

export default BecomeAMember;