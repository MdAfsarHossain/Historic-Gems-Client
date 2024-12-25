import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import ArtifactCard from '../../components/ArtifactCard/ArtifactCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllArtifacts = () => {

    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const [searchText, setSearchText] = useState("");

    const { isLoading, data: allArtifacts, isError } = useQuery({
        queryKey: ["allArtifacts", searchText],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-artifacts?search=${searchText}`);
            return data;
        }
    })

    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // }, [location])

    // if (isLoading) return <LoadingSpinner />;

    return (
        <div className='mt-24'>

            <Helmet>
                <title>Historic Gems | All Artifacts</title>
            </Helmet>

            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className='uppercase font-bold text-3xl md:text-4xl'>All <span className='text-green-500'>Artifacts</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            {/* Search */}
            <div className="border-0 flex flex-row gap-5 justify-center mt-8">
                <input
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter artifact name for search...."
                    className="input input-bordered input-success lg:w-[350px]"
                />
                {/* <button
                    onClick={handleSearchBtn}
                    className="btn btn-success text-white"
                >
                    Search
                </button> */}
            </div>
            {/* End of Serach */}

            {/* Loading Spinner */}
            {isLoading && (
                <LoadingSpinner />
            )}
            {/* End of Loading Spinner */}

            {/* Data Not Found */}
            {
                allArtifacts?.length === 0 &&
                <div className="">
                    <h1 className='text-center text-2xl font-bold uppercase text-red-500 mt-14'>No Artifacts Found!</h1>
                </div>
            }
            {/* End of Data not Found */}

            {/* All Artifacts Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 mt-8 px-5 lg:px-0">
                {
                    allArtifacts?.map((artifact) => <ArtifactCard
                        key={artifact._id}
                        artifact={artifact}
                    ></ArtifactCard>)
                }
            </div>
            {/* End of All Artifacts Card */}


        </div>
    );
};

export default AllArtifacts;