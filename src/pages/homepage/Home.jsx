import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Home = ()=>{
 return(
    <>
    <div className="flex w-full flex-col-reverse md:flex-row justify-between min-h-[calc(100vh-100px)] items-center bg-[radial-gradient(ellipse_at_top_left,_#e3e5e6,_#efe8c1,_#f3e7cb)]">
    <div className="md:ml-4 md:p-1 p-4 w-full md:w-[50%]">
    <h1 className="text-black font-bold text-[60px] md:text-[200px]">DevPal</h1>
    <h4 className="w-[85%] text-[21px]">Your ultimate companion in the developer journey. Find jobs, courses, tutorials, papers, and everything you need to level up your skills and career. DevPal: Empowering developers, one step at a time.
    Let me know if you'd like any tweaks!</h4>
    <Button className={cn("px-5 py-3 mt-4")} size={"lg"} variant={"dark"}>Discover Now</Button>
    </div>
    <img className="md:mr-4" width={550} height={550} src="/assets/home-3d.webp" />
    </div>
    </>
 )
}
export default Home;