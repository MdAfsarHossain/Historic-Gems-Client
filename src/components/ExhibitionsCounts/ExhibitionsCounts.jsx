import CountUp from "react-countup";
import { FaPeopleGroup } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";

const ExhibitionsCounts = () => {
    return (
        <div className="bg-[url(https://i.ibb.co.com/nrtnhM9/Getty-Images-184885762.jpg)] py-0 bg-fixed bg-cover bg-no-repeat" >

            {/* Exhibitions Counts */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-between py-14 lg:py-36 border-0 px-2 md:px-5 lg:px-10 mt-10 hero-overlay bg-opacity-40">
                {/* Exihibitinos Held */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start bg-black px-5 py-10 rounded-md bg-opacity-30 text-white">
                    <div className="">
                        <RiGalleryLine className="text-5xl" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                        <div className="">
                            <h1 className="text-5xl font-bold">
                                <CountUp end={120} enableScrollSpy />
                            </h1>
                        </div>
                        <div className="uppercase">
                            <h1 className="font-bold text-lg">Exhibitions</h1>
                            <h1 className="font-bold text-lg">Has been held</h1>
                        </div>

                    </div>
                </div>

                {/* Visitors */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start bg-black px-5 py-10 rounded-md bg-opacity-30 text-white">
                    <div className="">
                        <FaPeopleGroup className="text-5xl" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                        <div className="">
                            <h1 className="text-5xl font-bold">
                                <CountUp end={85} enableScrollSpy />
                                K</h1>
                        </div>
                        <div className="uppercase">
                            <h1 className="font-bold text-lg">Visitors</h1>
                            <h1 className="font-bold text-lg">In Last year</h1>
                        </div>

                    </div>
                </div>

                {/* Awards */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start bg-black px-5 py-10 rounded-md bg-opacity-30 text-white">
                    <div className="">
                        <LiaAwardSolid className="text-5xl" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                        <div >
                            <h1 className="text-5xl font-bold">
                                <CountUp end={103} enableScrollSpy />
                            </h1>
                        </div>
                        <div className="uppercase">
                            <h1 className="font-bold text-lg">Awards</h1>
                            <h1 className="font-bold text-lg">Have Reveived</h1>
                        </div>

                    </div>
                </div>

                {/* Design */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start bg-black px-5 py-10 rounded-md bg-opacity-30 text-white">
                    <div className="">
                        <MdOutlineDesignServices className="text-5xl" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                        <div className="">
                            <h1 className="text-5xl font-bold">
                                <CountUp end={17} enableScrollSpy />
                                K</h1>
                        </div>
                        <div className="uppercase">
                            <h1 className="font-bold text-lg">Collections of</h1>
                            <h1 className="font-bold text-lg">Art & Designs</h1>
                        </div>

                    </div>
                </div>
            </div>
            {/* Ends of Exhibitions Counts */}
        </div>
    );
};

export default ExhibitionsCounts;

// https://i.ibb.co.com/KjR6kgF/photo-1493564832173-630cc9e0765d.jpg
// https://i.ibb.co.com/nrtnhM9/Getty-Images-184885762.jpg