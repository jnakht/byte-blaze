import { useLoaderData } from "react-router-dom";
import altImg from '../../assets/404.jpg'

const Content = () => {
    const blog = useLoaderData();
    const {cover_image, title, id, published_at, description, tags} = blog;

    return (
        <div  className="mx-auto group  focus:no-underline bg-gray-900 dark:bg-gray-50 border-2 border-primary    border-opacity-30"> 
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || altImg} />
        <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                        {
                            tags.map(tag => <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                        }
                    </div>
                    
        </div>
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toDateString()}</span>
            <p>{description}</p>
        </div>
    </div>
    );
};

export default Content;