import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ArtifactsDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { id } = useParams();
    const queryClient = useQueryClient();

    const [like, setLike] = useState("");

    const { isLoading, data: artifact, isError, error, refetch } = useQuery({
        queryKey: ['artifactDetails'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/single-artifact/${id}`);
            return data;
        }
    });

    const { data: checkLikedStatus, isLoading: likedIsLoading } = useQuery({
        queryKey: ['checkLiked'],
        queryFn: async () => {
            const { checkData } = { id, liked_by: user?.email }
            const { data } = await axiosSecure.get(`/check-liked?id=${id}&email=${user?.email}`);
            setLike(data.likedStatus);
            // console.log(data);
            // console.log(data.likedStatus);
            // console.log(like);
            refetch();
            return data;
        }
    })

    const { mutateAsync: likedArtifact } = useMutation({
        mutationFn: async (likedData) => {
            const { data } = await axiosSecure.post(`/liked-artifact/${user?.email}`, likedData)
            // console.log(likedStatus, id);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["artifactDetails"] });
        }
    })

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location])

    const handleIncreaseLiked = async () => {
        // console.log("Like Increase: ", id);
        setLike(true);
        const likedData = { likedStatus: "increase", id, liked_by: user?.email }
        try {

            await likedArtifact(likedData);
            toast.success("You liked this artifact!")

        } catch (error) {
            toast.error(err.message)
        }
    }

    const handleDecreaseLiked = async () => {
        // console.log("Like Decrease: ", id);
        setLike(false);
        const likedData = { likedStatus: "decrease", id, liked_by: user?.email }
        try {
            await likedArtifact(likedData);
            toast.success("You dis-liked this artifact!")
        } catch (err) {
            toast.error(err.message)
        }
    }

    if (isLoading) return <LoadingSpinner />;
    if (likedIsLoading) return <LoadingSpinner />;

    return (
        <div className='mt-24'>
            <Helmet>
                <title>Historic Gems | Artifact Details</title>
            </Helmet>

            {/* 2nd Part */}
            <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
                <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative">
                            <img
                                src={artifact?.artifact_image}
                                alt={artifact?.artifact_name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
                                {artifact?.artifact_type}
                            </div>
                        </div>

                        <div className="p-6">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                                {artifact?.artifact_name}
                            </h1>
                            {/* <p className="text-sm text-gray-500 mb-6">
                                Authored by: <span className="font-semibold">{artifact?.author_email}</span>
                            </p> */}

                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                {artifact?.historical_context}
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <h2 className="font-semibold text-gray-600">Created At</h2>
                                    <p className="text-gray-800">{artifact?.created_at}</p>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-gray-600">Discovered At</h2>
                                    <p className="text-gray-800">{artifact?.discovered_at}</p>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-gray-600">Discovered By</h2>
                                    <p className="text-gray-800">{artifact?.discovered_by}</p>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-gray-600">Present Location</h2>
                                    <p className="text-gray-800">{artifact?.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <div className="text-gray-600 flex items-center space-x-2">
                                    <span className="text-xl font-bold text-green-500"><AiFillLike /></span>
                                    <span>{artifact?.liked_count} Likes</span>
                                </div>

                                {like ?
                                    <button
                                        onClick={handleDecreaseLiked}
                                        className='text-blue-500 text-5xl font-bold lg:mr-16'
                                    >
                                        <AiFillLike />
                                    </button> :
                                    <button
                                        onClick={handleIncreaseLiked}
                                        // disabled={user?.email === artifact?.author_email}
                                        className='disabled:cursor-not-allowed text-black text-5xl font-bold lg:mr-16'
                                    >
                                        <AiOutlineLike />
                                    </button>}
                            </div>

                            {/* Author Info */}
                            <div className="">
                                <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-gray-800  mb-4 uppercase border-b-4 border-amber-500 w-fit">
                                    Author Information
                                </h2>
                                <div className="p-6 border-t border-gray-300 bg-gray-50 flex items-center gap-4">
                                    <img
                                        src={artifact?.author_image}
                                        // src="https://i.ibb.co.com/p4S1xpX/IMG-20230101-134356-1.jpg"
                                        alt={artifact?.author_email}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-gray-800 font-semibold">{artifact?.author_name}</h3>
                                        <p className="text-gray-600 text-sm">{artifact?.author_email}</p>
                                    </div>
                                </div>
                            </div>
                            {/* End of Author Info */}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ArtifactsDetails;