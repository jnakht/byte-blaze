import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../Utility/Utility";
import BlogCard from "../BlogCard/BlogCard";


const Bookmarks = () => {
    const [bookmarks, setbookmarks] = useState([]);
    const [changeState, setChangeState] = useState(false);
    useEffect(() => {
        const blogs = getFromLocalStorage();
        setbookmarks(blogs);
    } ,[changeState])
    return (
        <div>
            <h3>This is bookmarks section</h3>
            <div className="grid grid-cols-3 max-w-[80vw] mx-auto gap-8 p-6">
            {
                bookmarks.map(bookmark => <BlogCard changeState={changeState} setChangeState={setChangeState} isdelete={true} blog={bookmark}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;