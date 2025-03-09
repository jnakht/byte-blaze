import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import wave from '../../assets/wave.svg'

const Home = () => {
    return (
        <div>

            <div className="hero bg-base-200 min-h-[calc(100vh-120px)]  relative">
                <div className="hero-content text-center -mt-18">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Welcome to <span className="text-secondary">ByteBlaze</span></h1>
                        <p className="py-6">
                            ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
                        </p>
                        <div className="flex gap-3 justify-center items-center" >
                            <Link to='/blogs' class="relative inline-block px-4 py-2 font-medium group">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-primary"></span>
                                <span class="relative text-black group-hover:text-white">Read Blogs</span>
                            </Link>
                            <Link to='/bookmarks' class="relative inline-block px-4 py-2 font-medium group">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-primary"></span>
                                <span class="relative text-black group-hover:text-white">Bookmarks</span>
                            </Link>

                        </div>
                        
                    </div>
                    
                </div>
                <img src={wave} alt="" className="absolute bottom-0 w-full"/>
                
            </div>
            
        </div>
    );
};

export default Home;