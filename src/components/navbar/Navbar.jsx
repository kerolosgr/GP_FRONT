import { Github } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ()=>{
 return(
    <nav className=" w-full h-[100px] border flex justify-between items-center px-10 box-border">
        <h2 className="text-2xl font-bold">DevPal</h2>
        <div className="flex items-center bg-black p-2 rounded-lg gap-[10px] text-white">
            <NavLink to={"/start"} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">Start</NavLink>
            <NavLink to={"/discover"} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">Discover</NavLink>
            <NavLink to={"/about"} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">About</NavLink>
        </div>
        <span><Github /></span>
    </nav>
 )
}
export default Navbar;