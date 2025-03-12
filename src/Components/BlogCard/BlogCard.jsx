import { Link } from "react-router-dom";
import altImage from '../../assets/404.jpg'
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { deleteFromLocalStorage } from "../../Utility/Utility";
const BlogCard = ({ blog, isdelete, changeState, setChangeState }) => {
    const { cover_image, title, id, published_at, description } = blog;
    console.log('this is the id: ', id)
    const handleDeleteBookmark = () => {
        deleteFromLocalStorage(id);
        setChangeState(!changeState);
        toast.success('Successfully Deleted');
    }
    return (
        <div className="flex relative">
            
                <Link to={`/blogs/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 border-2 border-primary  hover:border-secondary hover:scale-105 transition border-opacity-30 grow h-[523px]">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || altImage} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toDateString()}</span>
                        <p>{description}</p>
                    </div>

                    
                </Link>
                {
                    isdelete && <button onClick={handleDeleteBookmark} className="absolute  border border-gray-600 p-2 bg-[#FF00D3] rounded-full -top-5 -right-5"><MdDelete className="text-xl text-[#4A00FF]"></MdDelete></button>
                }
               
          
        </div>
    );
};

export default BlogCard;