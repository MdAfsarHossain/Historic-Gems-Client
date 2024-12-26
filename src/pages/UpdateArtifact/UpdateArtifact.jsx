import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateArtifact = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();


    const { loading, setLoading, user } = useAuth();


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [selectedArtifactType, setSelectedArtifactType] = useState("");
    const artifactType = ["Tools", "Weapons", "Documents", "Writings"];

    // useEffect(() => {
    // const queryClient = useQueryClient();
    // queryClient.invalidateQueries({ queryKey: ["getUpdateArtifact"] });
    // }, [])

    // const {
    //     isLoading,
    //     data: getUpdateArtifactData,
    //     refetch,

    // } = useQuery({
    //     queryKey: ["getUpdateArtifact"],
    //     queryFn: async () => {
    //         const { data } = await axiosSecure.get(`/single-artifact/${id}`);
    //         setSelectedArtifactType(data?.artifact_type);
    //         return data;
    //     },
    // });

    const [getUpdateArtifactData, setGetUpdateArtifactData] = useState([])
    const [storeImage, setStoreImage] = useState("");

    useEffect(() => {

        const getData = async () => {
            const { data } = await axiosSecure.get(`/single-artifact/${id}`);
            setSelectedArtifactType(data?.artifact_type);
            setGetUpdateArtifactData(data);
        }

        getData();
    }, [])


    const { mutateAsync: updateArtifact } = useMutation({
        mutationFn: async (artifactData) => {
            const { data } = await axiosSecure.put(`/single-artifact/${id}?email=${user?.email}`, artifactData);
            return data;
        },
        onSuccess: () => {
            toast.success("Artifact Update successfully!");
            // setLoading(false);
            queryClient.invalidateQueries({ queryKey: ["myArtifacts"] });
            navigate("/my-artifacts");
        },
        onError: (error) => {
            toast.error("Failed to update artifact. Please try again.");
            // setLoading(false);
        },
    });

    const handleUpdate = async (e) => {
        e.preventDefault();
        // setLoading(true);
        // refetch();

        const form = e.target;

        const artifact_name = form.artifactName.value;
        const created_at = form.createdAt.value;
        const discovered_at = form.discoveredAt.value;
        const discovered_by = form.discoveredBy.value;
        const location = form.location.value;
        const artifact_type = selectedArtifactType;
        const historical_context = form.description.value;

        // const image = form.photoFile.files[0];
        const artifact_image = form.photoFile.value;
        // console.log(image);
        // console.log(artifact_image);


        let updateArtifactData = {
            artifact_name,
            created_at,
            discovered_at,
            discovered_by,
            location,
            artifact_type,
            historical_context,
            artifact_image
        };
        // artifact_image: image_url,

        // setLoading(false);
        // refetch();
        // console.log("Image Length ", storeImage.length);
        // if (image) {
        // const image_url = await imageUpload(image);
        // updateArtifactData = { ...updateArtifactData, artifact_image: image_url };
        // }
        // console.table(updateArtifactData);
        updateArtifact(updateArtifactData);
    };

    // const onSubmit = async (data) => {
    //     setLoading(true);
    //     const artifact_name = data.artifactName;
    //     const created_at = data.createdAt;
    //     const discovered_at = data.discoveredAt;
    //     const discovered_by = data.discoveredBy;
    //     const location = data.location;
    //     const artifact_type = selectedArtifactType;
    //     const historical_context = data.description;

    //     // Image data
    //     const image = data.photoFile[0];
    //     // const formData = new FormData();
    //     // formData.append("image", image);

    //     try {
    //         // 1. Upload imag and get image url
    //         // const image_url = await imageUpload(image);

    //         const updateArtifactData = {
    //             artifact_name,
    //             created_at,
    //             discovered_at,
    //             discovered_by,
    //             location,
    //             artifact_type,
    //             historical_context,
    //             artifact_image: image,
    //             author_email: user?.email,
    //             author_name: user?.displayName,
    //             author_image: user?.photoURL,
    //         };

    //         console.table(updateArtifactData);

    //         // 2. Create new artifact
    //         // createNewArtifact(addArtifactData);
    //     } catch (error) {
    //         toast.error("Error adding artifact: " + error.message);
    //         setLoading(false);
    //     }
    // };

    // Handle change event

    const handleImage = async (image) => {
        setStoreImage(image);
    }


    const handleChange = (event) => {
        setSelectedArtifactType(event.target.value);
    };

    // if (isLoading) return <LoadingSpinner />;

    return (
        <div className="mt-24">
            <Helmet>
                <title>Historic Gems | Update Artifact</title>
            </Helmet>

            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="uppercase font-bold text-3xl lg:text-4xl">
                    Update <span className="text-green-500">Artifact</span>
                </h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            {/* Update artifact form */}
            <section className="p-6">
                <form
                    // onSubmit={handleSubmit(onSubmit)}
                    onSubmit={handleUpdate}
                    className="container flex flex-col mx-auto space-y-12"
                >
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-2xl">
                        <div className="grid grid-cols-6 gap-4 col-span-full">
                            {/* Artifact Name */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="touristsSpotName" className="text-base">
                                    Artifact Name
                                </label>
                                <input
                                    id="artifactName"
                                    type="text"
                                    required
                                    name="artifactName"
                                    defaultValue={getUpdateArtifactData?.artifact_name}
                                    placeholder="Artifact Name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                                // {...register("artifactName", { required: true })}
                                />
                                {/* {errors.artifactName && (
                                    <span className="text-red-500">This field is required</span>
                                )} */}
                            </div>

                            {/* Artifacte Image */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="photoFile" className="text-base">
                                    Artifact Image
                                </label>
                                <input
                                    id="photoFile"
                                    type="text"
                                    name="photoFile"
                                    required
                                    // onChange={e => { handleImage(e.target.files[0]) }}
                                    defaultValue={getUpdateArtifactData?.artifact_image}
                                    // value={getUpdateArtifactData?.artifact_image}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                                // {...register("photoFile", { required: true })}
                                />
                                {/* {errors.photoFile && (
                                    <span className="text-red-500">This field is required</span>
                                )} */}
                            </div>

                            {/* Artifacte Type */}
                            <div className="col-span-full sm:col-span-2">
                                <div className="artifact-dropdown">
                                    <label
                                        htmlFor="artifactType"
                                        className="block mb-2 text-base "
                                    >
                                        Select Artifact Type
                                    </label>
                                    <select
                                        id="artifacteType"
                                        value={selectedArtifactType}
                                        defaultValue={getUpdateArtifactData?.artifact_type}
                                        required
                                        // defaultValue={selectedArtifactType}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                    >
                                        <option value="" disabled>
                                            -- Choose Artifact Type --
                                        </option>
                                        {artifactType.map((type, index) => (
                                            <option key={index} value={type}>
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

                            {/* Created At */}
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="createdAt" className="text-base">
                                    Created At
                                </label>
                                <input
                                    id="createdAt"
                                    type="text"
                                    required
                                    name="createdAt"
                                    defaultValue={getUpdateArtifactData?.created_at}
                                    placeholder="Created At"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                                // {...register("createdAt", { required: true })}
                                />
                                {/* {errors.createdAt && (
                                    <span className="text-red-500">This field is required</span>
                                )} */}
                            </div>

                            {/* Discovered At */}
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="discoveredAt" className="text-base">
                                    Discovered At
                                </label>
                                <input
                                    id="discoveredAt"
                                    type="text"
                                    required
                                    name="discoveredAt"
                                    defaultValue={getUpdateArtifactData?.discovered_at}
                                    placeholder="Discovered At"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                                // {...register("discoveredAt", { required: true })}
                                />
                                {/* {errors.discoveredAt && (
                                    <span className="text-red-500">This field is required</span>
                                )} */}
                            </div>

                            {/* Discovered By */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="discoveredBy" className="text-base">
                                    Discovered By
                                </label>
                                <input
                                    id="discoveredBy"
                                    type="text"
                                    required
                                    name="discoveredBy"
                                    placeholder="Discovered By"
                                    defaultValue={getUpdateArtifactData?.discovered_by}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                                // {...register("discoveredBy", { required: true })}
                                />
                                {/* {errors.discoveredBy && (
                                    <span className="text-red-500">This field is required</span>
                                )} */}
                            </div>

                            {/* Location */}
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="location" className="text-base">
                                    Present Location
                                </label>
                                <input
                                    id="location"
                                    type="text"
                                    required
                                    name="location"
                                    defaultValue={getUpdateArtifactData?.location}
                                    placeholder="Present Location"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                                // {...register("location", { required: true })}
                                />
                                {/* {errors.location && (
                                    <span className="text-red-500">This field is required</span>
                                )} */}
                            </div>

                            {/* Short Description */}
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-base">
                                    Historical Context
                                </label>
                                <textarea
                                    id="bio"
                                    placeholder="Write short description"
                                    required
                                    defaultValue={getUpdateArtifactData?.historical_context}
                                    name="description"
                                    className="w-full textarea-lg rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                                // {...register("description", { required: true })}
                                ></textarea>
                                {/* {errors.description && (
                                    <span className="text-red-500">This field is required</span>
                                )} */}
                            </div>

                            <div className="col-span-full">
                                <button
                                    type="submit"
                                    // disabled={loading}
                                    className="disabled:cursor-not-allowed w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-green-500 focus:dark:ring-green-600 hover:dark:ring-green-600 dark:text-gray-50 uppercase"
                                >
                                    Update Artifact
                                    {/* {loading ? ( */}
                                    {/* <TbFidgetSpinner className="animate-spin m-auto" /> */}
                                    {/* ) : ( */}
                                    {/* "Update Artifact" */}
                                    {/* )} */}
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
            {/* End of Artifact form */}
        </div>
    );
};

export default UpdateArtifact;
