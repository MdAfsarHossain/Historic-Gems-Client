import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import LikedArtifactTable from '../../components/LikedArtifactTable/LikedArtifactTable';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const LikedArtifacts = () => {

    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: likedArtifactsData, isLoading } = useQuery({
        queryKey: ['likedArtifacts'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/liked-artifacts/${user?.email}`);
            return data;
        }
    })

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location])

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className='mt-24' style={{ minHeight: "calc(100vh - 94px)" }}>
            {/* Title */}
            <Helmet>
                <title>Historic Gems | Liked Artifacts</title>
            </Helmet>

            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className='uppercase font-bold text-3xl lg:text-4xl'>All Liked <span className='text-green-500'>Artifacts</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            {/* Liked Artifacts */}

            {/* No Liked Artifacts Found */}
            {
                likedArtifactsData?.length === 0 &&
                <div className="flex flex-col items-center justify-center uppercase text-3xl font-bold text-red-500 mt-16 text-center">
                    <h2>No Liked Artifacts Found</h2>
                </div>
            }
            {/* End of No Liked Artifacts Found */}


            <div className="container p-2 mx-auto sm:p-4 mt-5">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="" />
                        </colgroup>
                        <thead className="">
                            <tr className="text-left">
                                <th className="p-3">Artifact Image</th>
                                <th className="p-3">Artifact Name</th>
                                <th className="p-3">Created At</th>
                                <th className="p-3">Author Name</th>
                                <th className="p-3">Discovered By</th>
                                <th className="p-3">Artifact Type</th>
                                <th className="p-3">Location</th>
                                <th className="p-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                likedArtifactsData?.map((artifact) =>
                                    <tr
                                        key={artifact?._id}
                                        className="border-b border-opacity-20 border-gray-700 ">
                                        <LikedArtifactTable
                                            id={artifact?.id}
                                        ></LikedArtifactTable>
                                        {/* <td className="p-3">
                                            <img className='w-28 h-10' src={artifact?.artifact_image} />
                                        </td>
                                        <td className="p-3">
                                            <p>{artifact?.artifact_name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{artifact?.created_at}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{artifact?.discovered_at}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{artifact?.discovered_by}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{artifact?.artifact_type}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{artifact?.location}</p>
                                        </td>
                                        <td className="p-3 flex flex-row justify-center items-center gap-5">
                                            <Link
                                                to={`/update-artifact/${artifact?._id}`}
                                                className='bg-green-500 px-5 py-2 rounded-md text-white font-bold'
                                            >
                                                Update
                                            </Link>
                                            <Link
                                                // onClick={() => handleDelete(artifact?._id)}
                                                className='bg-red-500 px-5 py-2 rounded-md text-white font-bold'
                                            >
                                                Delete
                                            </Link>
                                        </td> */}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Cards Format */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 px-5 lg:px-0">
                {
                    likedArtifactsData?.map((artifact) =>
                        <LikedArtifactCard
                            key={artifact._id}
                            id={artifact.id}
                        />
                    )
                }
            </div> */}
            {/* End of Liked Artifacts */}
        </div>
    );
};

export default LikedArtifacts;