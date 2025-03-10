import { Link } from "react-router-dom";
import altImage from '../../assets/404.jpg'

const BlogCard = ({blog}) => {
    const {cover_image, title, id, published_at, description} = blog;
    console.log('this is the id: ', id)
    return (
        <Link to={`/blogs/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 border-2 border-primary hover:border-secondary hover:scale-105 transition border-opacity-30"> 
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || altImage} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toDateString()}</span>
            <p>{description}</p>
        </div>
    </Link>
    );
};

export default BlogCard;