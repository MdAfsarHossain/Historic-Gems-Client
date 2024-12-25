import { FaRegThumbsUp } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { Link } from "react-router-dom";

const TopArtifactsCard = ({ artifact }) => {
    const { _id, author_email, artifact_image, artifact_name, artifact_type, created_at, discovered_at, discovered_by, historical_context, present_location, liked_count } = artifact || {};
    // console.log(Object.keys(artifact).join(","));
    return (
        <div className="border-0 border-t-2 border-t-gray-100 shadow-xl rounded-md px-3 py-3 flex flex-col gap-5 group">
            {/* Image */}
            <div className="border-0 border-green-500 h-60 overflow-hidden rounded-md">
                <img className="object-cover 
                h-full 
                w-full 
                group-hover:scale-105 
                transition rounded-md" src={artifact_image} alt="" />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2">
                <div className="bg-sky-200 w-fit px-2 rounded-md">
                    <p className="font-bold uppercase text-base">{artifact_name}</p>
                </div>
                {/* <p>id: {_id}</p> */}
                {/* Likes Count */}
                <div className="flex flex-row justify-start items-center gap-2 px-1">
                    <p><FaRegThumbsUp className="text-2xl" /></p>
                    <p className="text-lg font-semibold"> {liked_count} likes</p>
                </div>
                {/* Historical Context */}
                <div className="flex flex-row justify-start items-start gap-2">
                    <span><TbFileDescription className="text-2xl" /></span>
                    <p className="line-clamp-3">
                        {historical_context}</p>
                </div>

                <Link
                    to={`/artifacts-details/${_id}`}
                    className="mb-5 flex flex-col justify-center items-center mt-2">
                    <button className="px-10 py-2 border-2 font-bold bg-yellow-200 border-yellow-500  rounded-full hover:bg-yellow-300 transition-all hover:border-yellow-600">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default TopArtifactsCard;