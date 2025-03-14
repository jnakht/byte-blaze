import React from 'react';
import { Link } from 'react-router-dom';

const NoBookmark = () => {
    return (
        <div className='w-full h-[calc(100vh-190px)] flex flex-col justify-center items-center'>
            <h3 className='text-3xl text-primary mb-5'>No Bookmark Found</h3>
            <Link to='/blogs' class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-primary"></span>
                <span class="relative text-black group-hover:text-white">Browse Blogs</span>
            </Link>
        </div>
    );
};

export default NoBookmark;