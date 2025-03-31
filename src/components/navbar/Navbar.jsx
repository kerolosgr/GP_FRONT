import { Github } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserIdContext } from "../context/UserIdContext";

const Navbar = ()=>{
    const {showDiscover,setshowDiscover}=useContext(UserIdContext);
 return(
    <nav className="w-full h-[100px] flex justify-between items-center px-2 md:px-10 box-border shadow ">
        <h2 className="text-xl font-semibold"><span className="font-bold bg-black px-1 rounded text-white">Dev</span> <span className="font-bold">P</span>al</h2>
        <div className="flex items-center bg-black p-2 rounded-lg md:gap-[10px] text-white">
            <NavLink to={"/start"} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">Start</NavLink>
            {
                showDiscover?
                <NavLink to={"/discover/"+localStorage.getItem("userSavedId")} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">Discover</NavLink>
                :
                null
            }
            <NavLink to={"/about"} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">About</NavLink>
        </div>
        <Link to={"https://github.com"}><Github /></Link>
    </nav>
 )
}
export default Navbar;