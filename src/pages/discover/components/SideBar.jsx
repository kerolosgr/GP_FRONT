import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Book, Bookmark, BriefcaseBusiness, Calendar, Code, Earth, Github, IdCard, Mail, Scroll, Sparkles, Star, Video } from "lucide-react";
import Tooltipcustom from "./Tooltipcustom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Profile from "./Profile";
import { useContext, useState } from "react";
import { cn } from "@/lib/utils";
import Jobs from "./Jobs";
import Bookmarks from "./Bookmarks";
import Courses from "./Courses";
import { ProfileContext } from "@/components/context/ProfileContext";
import CodeEditor from "./CodeEditor";
import GithubRepos from "./GithubRepos";



const SideBar = ()=>{
    const [View,SetView] = useState("profile");
    const [isTransitioning,setisTransitioning] = useState(false);
    const {ProfileData,profileLoading,profileError} = useContext(ProfileContext);
    //profile , jobs , courses , papers , conference , bookmarks
    const handleViewChange = (newView) => {
        if (View !== newView) {
            setisTransitioning(true);
          setTimeout(() => {
            SetView(newView);
            setisTransitioning(false);
          }, 100); // Match the duration of the transition
        }
      };
    return(
        <>
        <div className="flex w-full h-[calc(100vh-100px)]">
            <div className="bg-gray-50 w-[70px] flex flex-col justify-start items-center p-2 gap-y-1">
                <Tooltipcustom message={"Profile"}>
                <Button onClick={()=>handleViewChange("profile")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "profile" && "bg-gray-800 text-white hover:bg-gray-600")}>
                <Avatar>
                <AvatarImage className="rounded-full" src={profileLoading?null:ProfileData.avatar_url} />
                <AvatarFallback><img className="rounded-full shadow-lg" src="/assets/user.webp" /></AvatarFallback>
                </Avatar>
                </Button>
                </Tooltipcustom>
                
                <Tooltipcustom message={"Jobs"}>
                <Button onClick={()=>handleViewChange("jobs")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "jobs" && "bg-gray-800 text-white hover:bg-gray-600")}><BriefcaseBusiness /></Button>
                </Tooltipcustom>
                
                <Tooltipcustom message={"Courses"}>
                <Button onClick={()=>handleViewChange("courses")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "courses" && "bg-gray-800 text-white hover:bg-gray-600")}><Video /></Button>
                </Tooltipcustom>

                <Tooltipcustom message={"Papers"}>
                <Button onClick={()=>handleViewChange("papers")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "papers" && "bg-gray-800 text-white hover:bg-gray-600")}><Scroll /></Button>
                </Tooltipcustom>

                <Tooltipcustom message={"Conference"}>
                <Button onClick={()=>handleViewChange("conference")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "conference" && "bg-gray-800 text-white hover:bg-gray-600")}><Calendar /></Button>
                </Tooltipcustom>

                <Tooltipcustom message={"Github"}>
                <Button onClick={()=>handleViewChange("github")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "github" && "bg-gray-800 text-white hover:bg-gray-600")}><Github /></Button>
                </Tooltipcustom>

                <hr className="my-2 border-1 border-gray-300 w-full" />

                <Tooltipcustom message={"Code Editor"}>
                <Button onClick={()=>handleViewChange("editor")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "editor" && "bg-gray-800 text-white hover:bg-gray-600")}><Code /></Button>
                </Tooltipcustom>

                <span className="w-full mt-auto">
                <Tooltipcustom message={"Bookmarks"}>
                <Button onClick={()=>handleViewChange("bookmarks")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "bookmarks" && "bg-gray-800 text-white hover:bg-gray-600")}><Bookmark /></Button>
                </Tooltipcustom></span>

            </div>
            <div className="w-[calc(100%-70px)] h-full bg-[url('/assets/download.svg')] overflow-x-auto">
            <div className={"h-full flex p-4 "+`transition-opacity duration-200 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {View === "profile" && <Profile />}
            {View === "jobs" && <Jobs />}
            {View === "bookmarks" && <Bookmarks />}
            {View === "courses" && <Courses />}
            {View === "github" && <GithubRepos />}
            {View === "editor" && <CodeEditor />}

            </div>
            </div>
        </div>
        </>
    )
}
export default SideBar;