import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import ArtifactCard from '../../components/ArtifactCard/ArtifactCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllArtifacts = () => {

    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const [searchText, setSearchText] = useState("");
    const [sortType, setSortType] = useState("");

    const [selectedArtifactType, setSelectedArtifactType] = useState("");
    // List of artifacts types
    const artifactType = [
        "All Type",
        "Tools",
        "Weapons",
        "Documents",
        "Writings"
    ]

    // List of Sorting types
    const sortingType = [
        "ALL",
        "ASC",
        "DESC",
    ]

    const { isLoading, data: allArtifacts, isError, refetch } = useQuery({
        queryKey: ["allArtifacts", selectedArtifactType],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-artifacts?filter=${selectedArtifactType}&search=${searchText}&sort=${sortType}`);
            // setSearchText("");
            return data;
        }
    })

    useEffect(() => {
        refetch();
    }, [searchText, sortType])

    // Handle change event
    const handleChange = (event) => {
        // console.log(event.target.value);
        setSelectedArtifactType(event.target.value);
    };

    // Handle Sort Type
    const handleChangeSortType = (event) => {
        // console.log(event.target.value);
        setSortType(event.target.value);
    };

    const handleSearchBtn = () => {
        refetch();
        // setSearchText("");
        // console.log("Call refetch");
        // const { data } = await axios.get(
        //     `${import.meta.env.VITE_API_URL
        //     }/all-visas?filter=${selectedVisaType}&search=${searchText}`
        // );
        // setDisplayVisasData(data);
    }

    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // }, [location])

    if (isLoading) return <LoadingSpinner />;

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
            <div className="border-0 flex flex-row gap-5 justify-between mt-8 px-5 md:px-10 lg:px-0">

                {/* <div className="flex-1 hidden lg:block text-white">
                    <p>.</p>
                </div> */}

                {/* Sorting By Price */}
                <div className="flex-1 hidden lg:block">
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <label htmlFor="artifactType" className="block mb-2 text-lg">
                            Sort:
                        </label>
                        <div className="artifact-dropdown">
                            <select
                                id="artifacteType"
                                value={sortType}
                                onChange={handleChangeSortType}
                                className="w-full p-2 border border-green-500 rounded-lg"
                            >
                                <option value="" disabled>
                                    -- Choose Sorting --
                                </option>
                                {sortingType?.map((type, index) => (
                                    <option
                                        key={index} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-row gap-5 justify-center">
                    <input
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        type="text"
                        value={searchText}
                        placeholder="Enter artifact name for search...."
                        className="input input-bordered input-success lg:w-[350px]"
                    />
                    <button
                        onClick={handleSearchBtn}
                        className="bg-green-500 font-bold px-5 rounded-lg text-white border-2 border-green-500 hover:bg-transparent hover:text-green-500 hover:border-green-500 transition-all"
                    >
                        Search
                    </button>
                </div>

                {/* Sorting By Artifacte Types */}
                <div className="flex-1 hidden md:block">
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <label htmlFor="artifactType" className="block mb-2 text-lg">
                            Filter:
                        </label>
                        <div className="artifact-dropdown">
                            <select
                                id="artifacteType"
                                value={selectedArtifactType}
                                onChange={handleChange}
                                className="w-full p-2 border border-green-500 rounded-lg"
                            >
                                <option value="" disabled>
                                    -- Choose Artifact Type --
                                </option>
                                {artifactType.map((type, index) => (
                                    <option
                                        key={index} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>

                            {/* {selectedArtifactType && (
                                <p className="mt-3 text-sm text-green-600">
                                    You selected: <strong>{selectedArtifactType}</strong>
                                </p>
                            )} */}
                        </div>
                    </div>
                </div>
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