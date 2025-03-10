import { useLoaderData } from "react-router-dom";


const DetailedBlog = () => {
    const blog = useLoaderData();
    const {title, id} = blog;
    console.log(blog)
    return (
        <div>
            <h3>THis is detailed blog for each blog</h3>
            <h3>{title}</h3>
            <h3>{id}</h3>
        </div>
    );
};

export default DetailedBlog;