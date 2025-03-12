import { useLoaderData } from "react-router-dom";
import altImg from '../../assets/404.jpg';
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title, tags, body_html, url } = blog;

    console.log("HTML Content:", body_html); // Debugging

    return (
        <div className="mx-auto group bg-gray-900 dark:bg-gray-50 border-2 border-primary border-opacity-30 p-2"> 
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || altImg} />
            
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    {tags.map((tag, index) => (
                        <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
                            #{tag}
                        </a>
                    ))}
                </div>
            </div>
            
            <div className="p-6 space-y-2">
                <a href={url} target='_blank' className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
            </div>

           <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
    );
};

export default Content;
