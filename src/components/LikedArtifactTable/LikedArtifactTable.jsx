import { useQuery } from "@tanstack/react-query";
import { FaRegThumbsUp } from 'react-icons/fa';
import { IoPricetagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const LikedArtifactTable = ({ id }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: likedArtifactTableData, isLoading } = useQuery({
        queryKey: ['likedArtifactTable', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/single-artifact/${id}`);
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner />

    return (
        <>
            <td className="p-3">
                <img className='w-28 h-10' src={likedArtifactTableData?.artifact_image} />
            </td>
            <td className="p-3">
                <p>{likedArtifactTableData?.artifact_name}</p>
            </td>
            <td className="p-3">
                <p>{likedArtifactTableData?.created_at}</p>
            </td>
            <td className="p-3">
                <p>{likedArtifactTableData?.author_name}</p>
            </td>
            <td className="p-3">
                <p>{likedArtifactTableData?.discovered_by}</p>
            </td>
            <td className="p-3">
                <p>{likedArtifactTableData?.artifact_type}</p>
            </td>
            <td className="p-3">
                <p>{likedArtifactTableData?.location}</p>
            </td>
            <td className="p-3 flex flex-row justify-center items-center gap-5">
                <Link
                    to={`/artifacts-details/${id}`}
                    className='bg-green-500 px-5 py-2 rounded-md text-white font-bold'
                >
                    Details
                </Link>

            </td>
        </>
    );
};

export default LikedArtifactTable;