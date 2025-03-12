import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../Utility/Utility";
import BlogCard from "../BlogCard/BlogCard";


const Bookmarks = () => {
    const [bookmarks, setbookmarks] = useState([]);
    useEffect(() => {
        const blogs = getFromLocalStorage();
        setbookmarks(blogs);
    } ,[])
    return (
        <div>
            <h3>This is bookmarks section</h3>
            <div className="grid grid-cols-3 max-w-[80vw] mx-auto gap-6 p-6">
            {
                bookmarks.map(bookmark => <BlogCard blog={bookmark}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;