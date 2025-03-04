import { Github } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ()=>{
 return(
    <nav className="w-full h-[100px] flex justify-between items-center px-10 box-border shadow ">
        <h2 className="text-2xl font-semibold"><span className="font-bold bg-black px-1 rounded text-white">Dev</span> <span className="font-bold">P</span>al</h2>
        <div className="flex items-center bg-black p-2 rounded-lg gap-[10px] text-white">
            <NavLink to={"/start"} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">Start</NavLink>
            <NavLink to={"/discover"} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">Discover</NavLink>
            <NavLink to={"/about"} className="hover:bg-neutral-900 h-full px-3 py-1 rounded-lg">About</NavLink>
        </div>
        <Link to={"https://github.com"}><Github /></Link>
    </nav>
 )
}
export default Navbar;