import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import TopArtifactsCard from "../TopArtifactCard/TopArtifactsCard";

const TopArtifacts = () => {

    const axiosSecure = useAxiosSecure();

    const { isLoading, data: topArtifacts, isError } = useQuery({
        queryKey: ["topArtifacts"],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/top-artifacts');
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="mb-28">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className={`uppercase font-bold text-3xl md:text-4xl`}>Top <span className='text-green-500'>Artifacts</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            {/* Top Artifacts Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 mt-8 px-5 md:px-5 lg:px-0">
                {
                    topArtifacts?.map((artifact) => <TopArtifactsCard
                        key={artifact._id}
                        artifact={artifact}
                    ></TopArtifactsCard>)
                }
            </div>
            {/* End of Top Artifacts Cards */}

            {/* Button */}
            <div className="flex flex-col justify-center items-center mt-14">
                <Link
                    to='/all-artifacts'
                >
                    <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-bold border-2 border-green-500 hover:bg-transparent hover:border-green-500 transition-all hover:text-green-500">View All</button></Link>
            </div>
            {/* End of Button */}
        </div>
    );
};

export default TopArtifacts;