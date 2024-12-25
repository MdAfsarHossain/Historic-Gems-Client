import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyArtifacts = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const queryClient = useQueryClient();


    const { data: myArtifactsData, isLoading, isError, refetch } = useQuery({
        queryKey: ["myArtifacts"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/my-artifacts/${user?.email}`);

            return data;
        }
    })


    const { mutate: deleteArtifact, isLoading: deleteArtifacteLoading } = useMutation({
        mutationFn: (artifactId) => {
            return axiosSecure.delete(`/single-artifact/${artifactId}?email=${user?.email}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["myArtifacts"] });
            navigate('/all-artifacts');
        },
    });

    const handleDelete = (id) => {
        // console.log(`deleting ${id}`);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteArtifact(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

        // refetch();
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location])

    if (isLoading) return <LoadingSpinner />;
    // if (deleteArtifacteLoading) return <LoadingSpinner />;

    return (
        <div className='mt-24' style={{ minHeight: "calc(100vh - 94px)" }}>
            {/* Title */}
            <Helmet>
                <title>Historic Gems | My Artifacts</title>
            </Helmet>

            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className='uppercase font-bold text-3xl lg:text-4xl'>My <span className='text-green-500'>Artifacts</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            {/* No Liked Artifacts Found */}
            {
                myArtifactsData?.length === 0 &&
                <div className="flex flex-col items-center justify-center uppercase text-3xl font-bold text-red-500 mt-16 text-center">
                    <h2>No My Artifacts data Found</h2>
                </div>
            }
            {/* End of No Liked Artifacts Found */}

            {/* My Added Artifacts */}
            {
                myArtifactsData?.length > 0 &&
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
                                    <th className="p-3">Discovered At</th>
                                    <th className="p-3">Discovered By</th>
                                    <th className="p-3">Artifact Type</th>
                                    <th className="p-3">Location</th>
                                    <th className="p-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myArtifactsData?.map((artifact) =>
                                        <tr
                                            key={artifact?._id}
                                            className="border-b border-opacity-20 border-gray-700 ">
                                            <td className="p-3">
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
                                                    onClick={() => handleDelete(artifact?._id)}
                                                    className='bg-red-500 px-5 py-2 rounded-md text-white font-bold'
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            {/* End of My Added Artifacts */}
        </div>
    );
};

export default MyArtifacts;