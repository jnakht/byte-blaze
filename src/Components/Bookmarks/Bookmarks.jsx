import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../Utility/Utility";
import BlogCard from "../BlogCard/BlogCard";
import NoBookmark from "../NoBookmark/NoBookmark";


const Bookmarks = () => {
    const [bookmarks, setbookmarks] = useState([]);
    const [changeState, setChangeState] = useState(false);
    useEffect(() => {
        const blogs = getFromLocalStorage();
        setbookmarks(blogs);
    } ,[changeState])
    return (
        <div className="min-h-[calc(100vh-140px)]">
            {
                bookmarks.length === 0 && <NoBookmark></NoBookmark>
            }
            
            <div className="grid grid-cols-3 max-w-[80vw] mx-auto gap-8 p-6 mt-5">
            {
                bookmarks.map(bookmark => <BlogCard changeState={changeState} setChangeState={setChangeState} isdelete={true} blog={bookmark}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;