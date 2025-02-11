import React from 'react';
import { Helmet } from 'react-helmet-async';

const HistoryBlog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Unveiling the Secrets of the Rosetta Stone",
            author: "John Carter",
            date: "December 22, 2024",
            image: "https://i.ibb.co.com/1XFQf8H/rosetta-stone.jpg",
            excerpt:
                "Discover how the Rosetta Stone became the key to unlocking ancient Egyptian hieroglyphs.",
        },
        
    ];

    return (
        <div className="mt-24">

            <Helmet>
                <title>Historic Gems | History Blogs</title>
            </Helmet>

            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
                <h1 className='uppercase font-bold text-3xl md:text-4xl'>History <span className='text-green-500'>Blogs</span></h1>
                <div className="mt-1 h-[2px] bg-green-500 w-36"></div>
            </div>
            {/* End of Heading */}

            <div className="container mx-auto px-4 mt-10">
                {/* Header Section */}
                <div className="text-center mb-12 hidden">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to the History Blog
                    </h1>
                    <p className="text-lg text-gray-600">
                        Dive into the captivating stories of humanity's greatest artifacts and discoveries.
                    </p>
                </div>

                {/* Blog Posts */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="card shadow-lg bg-white group">
                            <figure>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-52 w-full object-cover group-hover:scale-105 transition-all"
                                />
                            </figure>
                            <div className="px-5 mt-3">
                                <h2 className=" text-gray-700 font-bold mb-2 text-2xl">{post.title}</h2>
                                <p className="text-gray-600 text-sm mb-5">
                                    By {post.author} • {post.date}
                                </p>
                                <p className="text-gray-700 mt-0">{post.excerpt}</p>
                                <div className="card-actions justify-end mt-3 mb-5">
                                    <button className="btn bg-green-500 text-white btn-sm border-2 border-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryBlog;
