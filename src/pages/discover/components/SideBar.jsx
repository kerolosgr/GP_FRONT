import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Book, BriefcaseBusiness, Calendar, Earth, IdCard, Mail, Scroll, Star, Video } from "lucide-react";
import Tooltipcustom from "./Tooltipcustom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Profile from "./Profile";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Jobs from "./Jobs";



const SideBar = ()=>{
    const [View,SetView] = useState("profile");
    //profile , jobs , courses , papers , conference , favorites
    return(
        <>
        <div className="flex w-full h-[calc(100vh-100px)]">
            <div className="bg-gray-50 w-[70px] flex flex-col justify-start items-center p-2 gap-y-1">
                <Tooltipcustom message={"Profile"}>
                <Button onClick={()=>SetView("profile")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "profile" && "bg-gray-800 text-white hover:bg-gray-600")}>
                <Avatar>
                <AvatarImage className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNP5uxlf7Af8QWKuzNL1GjZPl712flND8jRCoTGgvB8sQdfdQ2qXrupv0yw0ggGcXBnE&usqp=CAU" />
                <AvatarFallback></AvatarFallback>
                </Avatar>
                </Button>
                </Tooltipcustom>
                
                <Tooltipcustom message={"Jobs"}>
                <Button onClick={()=>SetView("jobs")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "jobs" && "bg-gray-800 text-white hover:bg-gray-600")}><BriefcaseBusiness /></Button>
                </Tooltipcustom>
                
                <Tooltipcustom message={"Courses"}>
                <Button onClick={()=>SetView("courses")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "courses" && "bg-gray-800 text-white hover:bg-gray-600")}><Video /></Button>
                </Tooltipcustom>

                <Tooltipcustom message={"Papers"}>
                <Button onClick={()=>SetView("papers")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "papers" && "bg-gray-800 text-white hover:bg-gray-600")}><Scroll /></Button>
                </Tooltipcustom>

                <Tooltipcustom message={"Conference"}>
                <Button onClick={()=>SetView("conference")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "conference" && "bg-gray-800 text-white hover:bg-gray-600")}><Calendar /></Button>
                </Tooltipcustom>

                <span className="w-full mt-auto">
                <Tooltipcustom message={"Favorites"}>
                <Button onClick={()=>SetView("favorites")} variant={"light"} className={"w-full h-[50px] "+ cn(View === "favorites" && "bg-gray-800 text-white hover:bg-gray-600")}><Star /></Button>
                </Tooltipcustom></span>

            </div>
            <div className="w-[calc(100%-70px)] flex p-4 bg-[url('/assets/download.svg')]">
            {View === "profile" && <Profile />}
            {View === "jobs" && <Jobs />}
            </div>
        </div>
        </>
    )
}
export default SideBar;