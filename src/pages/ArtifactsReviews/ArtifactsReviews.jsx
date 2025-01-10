import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";


const ArtifactReviews = () => {
    const reviews = [
        {
            "artifact_name": "Rosetta Stone",
            "reviewer_name": "John Carter",
            "reviewer_image": "https://randomuser.me/api/portraits/men/1.jpg",
            "rating": 5,
            "comment": "A remarkable key to understanding ancient languages, bridging the gap between civilizations."
        },
        {
            "artifact_name": "Antikythera Mechanism",
            "reviewer_name": "Sophia Hill",
            "reviewer_image": "https://randomuser.me/api/portraits/women/2.jpg",
            "rating": 5,
            "comment": "An ancient marvel showcasing the brilliance of early technological advancements."
        },
        {
            "artifact_name": "Terracotta Army",
            "reviewer_name": "Emily Clarke",
            "reviewer_image": "https://randomuser.me/api/portraits/women/3.jpg",
            "rating": 4,
            "comment": "Incredible craftsmanship, each soldier unique, bringing ancient Chinese history to life."
        },
        {
            "artifact_name": "Dead Sea Scrolls",
            "reviewer_name": "Michael Reed",
            "reviewer_image": "https://randomuser.me/api/portraits/men/4.jpg",
            "rating": 5,
            "comment": "Essential for understanding ancient religious texts, preserving knowledge for generations."
        },
        {
            "artifact_name": "Mona Lisa",
            "reviewer_name": "Liam White",
            "reviewer_image": "https://randomuser.me/api/portraits/men/5.jpg",
            "rating": 4,
            "comment": "Iconic artwork, though the viewing experience can be challenging due to crowds."
        },
        {
            "artifact_name": "King Tut's Mask",
            "reviewer_name": "Olivia Martin",
            "reviewer_image": "https://randomuser.me/api/portraits/women/6.jpg",
            "rating": 5,
            "comment": "A stunning masterpiece reflecting ancient Egyptian art and culture magnificently."
        },
        {
            "artifact_name": "Stonehenge",
            "reviewer_name": "Daniel Wilson",
            "reviewer_image": "https://randomuser.me/api/portraits/men/7.jpg",
            "rating": 4,
            "comment": "An architectural mystery, offering insight into ancient ceremonial practices and design."
        },
        {
            "artifact_name": "Shroud of Turin",
            "reviewer_name": "Isabella Green",
            "reviewer_image": "https://randomuser.me/api/portraits/women/8.jpg",
            "rating": 5,
            "comment": "A deeply spiritual artifact with significant historical and religious implications."
        },
        {
            "artifact_name": "Code of Hammurabi",
            "reviewer_name": "James Baker",
            "reviewer_image": "https://randomuser.me/api/portraits/men/9.jpg",
            "rating": 5,
            "comment": "The foundation of legal systems, offering unparalleled insight into ancient lawmaking."
        },
        {
            "artifact_name": "Venus de Milo",
            "reviewer_name": "Charlotte Turner",
            "reviewer_image": "https://randomuser.me/api/portraits/women/10.jpg",
            "rating": 5,
            "comment": "An enduring symbol of classical beauty, showcasing incredible ancient artistry."
        }
    ]


    return (
        <div className='mt-24'>
            <Helmet>
                <title>Historic Gems | Artifacts Reviews</title>
            </Helmet>

            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className='uppercase font-bold text-3xl md:text-4xl'>Artifacts <span className='text-green-500'>Reviews</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}


            <div className="container mx-auto px-4">

                {/* Reviews Section */}
                <div className="grid gap-8 
               grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="card shadow-lg bg-white p-6 rounded-lg border border-gray-200"
                        >
                            <div className="flex items-center gap-4 mb-1">
                                <img
                                    src={review.reviewer_image}
                                    alt={review.reviewer_name}
                                    referrerPolicy="no-referrer"
                                    className="w-12 h-12 rounded-full border border-gray-300"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {review.reviewer_name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Reviewed: <span className="font-medium">{review.artifact_name}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-1">
                                <ReactStars
                                    count={5}
                                    edit={false}
                                    size={36}
                                    value={review?.rating}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtifactReviews;
