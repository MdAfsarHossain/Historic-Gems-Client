import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import LikedArtifactCard from '../../components/LikedArtifactCard/LikedArtifactCard';
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


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 px-5 lg:px-0">
                {
                    likedArtifactsData?.map((artifact) =>
                        <LikedArtifactCard
                            key={artifact._id}
                            id={artifact.id}
                        />
                    )
                }
            </div>
            {/* End of Liked Artifacts */}
        </div>
    );
};

export default LikedArtifacts;