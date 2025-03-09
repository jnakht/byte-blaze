import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    
   
    return (
        <div className="">
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="flex-1">
                    <a className="btn btn-ghost text-[#FF00D3] gap-0 text-3xl">Byte<span className="text-[#4A00FF]">Blaze</span></a>
                </div>
                <div className="flex-none flex justify-between items-center gap-6">
                    <ul className="menu menu-horizontal px-1 flex gap-8 text-primary text-base font-extrabold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/blogs'>Blogs</NavLink>
                        <NavLink to='/bookmarks'>Bookmarks</NavLink>
                    </ul>
                    <label  className="toggle text-base-content" >
                        <input id="theme-button" type="checkbox" value="synthwave" className="theme-controller"></input>

                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;