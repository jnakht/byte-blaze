import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">ByteBlaze</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex gap-8">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/blogs'>Blogs</NavLink>
                        <NavLink to='/bookmarks'>Bookmarks</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;