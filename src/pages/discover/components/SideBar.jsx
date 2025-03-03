import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BriefcaseBusiness, Earth, Mail, Scroll, Video } from "lucide-react";
import Tooltipcustom from "./Tooltipcustom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


const SideBar = ()=>{
    return(
        <>
        <div className="flex w-full h-[calc(100vh-100px)] ">
            <div className="bg-gray-100 w-[70px] flex flex-col justify-start items-center p-2 gap-y-1">
                <Tooltipcustom message={"Your Info"}>
                <Button variant={"light"} className="w-full h-[50px]">
                <Avatar>
                <AvatarImage className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNP5uxlf7Af8QWKuzNL1GjZPl712flND8jRCoTGgvB8sQdfdQ2qXrupv0yw0ggGcXBnE&usqp=CAU" />
                <AvatarFallback></AvatarFallback>
                </Avatar>
                </Button>
                </Tooltipcustom>
                
                <Tooltipcustom message={"Jobs"}>
                <Button variant={"light"} className="w-full h-[50px]"><BriefcaseBusiness size={50} /></Button>
                </Tooltipcustom>
                
                <Tooltipcustom message={"Courses"}>
                <Button variant={"light"} className="w-full h-[50px]"><Video size={100} /></Button>
                </Tooltipcustom>

                <Tooltipcustom message={"Papers"}>
                <Button variant={"light"} className="w-full h-[50px]"><Scroll size={36} /></Button>
                </Tooltipcustom>

            </div>
            <div className="w-[calc(100%-70px)] p-4">
                <div className="flex flex-col justify-start items-center w-[500px] h-full bg-neutral-100 shadow rounded-xl p-2">
                    <div className="w-full flex justify-start items-center h-[40%]">
                    <Avatar className="w-[200px] drop-shadow-xl">
                    <AvatarImage className="rounded-full" src="https://avatars.githubusercontent.com/u/183719833?v=4" />
                    <AvatarFallback>O</AvatarFallback>
                    </Avatar>
                    <div>
                    <h2 className="ml-4 text-3xl font-bold font-sans">Kerolos Safwat</h2>
                    <span className="ml-4 text-sm font-medium font-sans">
                    Software Engineer
                    </span>
                    </div>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-x-5 gap-y-3">
                        <span className="col-span-1 flex"><Mail className="mr-2" /><p>Kerolossafwat41@gmail.com</p></span>
                        <span className="col-span-1 flex"><Earth className="mr-2" /><p>Egypt</p></span>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
export default SideBar;