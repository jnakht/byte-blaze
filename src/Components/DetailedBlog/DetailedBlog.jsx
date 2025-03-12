import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import toast from "react-hot-toast";
import { saveBlogToLocalStorage } from "../../Utility/Utility";

const DetailedBlog = () => {
    const blog = useLoaderData();
    const { title, id, reading_time_minutes, readable_publish_date, comments_count, positive_reactions_count } = blog;
    console.log(blog)
    const handleBookmark = () => {
        console.log('this is the blog to store on localstrage', blog)
        saveBlogToLocalStorage(blog);
        
    }
    const [activeCard, setActiveCard] = useState(0);
    return (
        <div>
            <div className="max-w-[70vw] px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                                <p className="text-sm">{reading_time_minutes} min read • {readable_publish_date}</p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {positive_reactions_count} views</p>
                        </div>
                    </div>
                    {/* tabs */}
                    <div className="">
                        <div className="flex items-center  overflow-x-auto overflow-y-hidden   sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                            <Link onClick={() => setActiveCard(0)}  className={`flex items-center   flex-shrink-0 px-5 py-3 space-x-2  dark:text-gray-600 ${activeCard === 0 ? 'border border-b-0' : 'border-b'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>Content</span>
                            </Link>
                            <Link to='author' onClick={() => setActiveCard(1)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   rounded-t-lg   dark:text-gray-900 ${activeCard === 1 ? 'border border-b-0' : 'border-b'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <span>Author</span>
                            </Link>
                            <button onClick={handleBookmark} className="bg-[#C9B3FF] flex justify-center items-center ml-8 p-4 rounded-full">
                            <FaBookmark className=" text-xl text-[#FF00D3] " />
                            </button>
                        </div>
                        

                    </div>
                    <div className="dark:text-gray-800">
                       <Outlet></Outlet>
                    </div>
                </article>
                
            </div>
        </div>
    );
};

export default DetailedBlog;