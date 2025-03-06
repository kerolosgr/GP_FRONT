import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book, Earth, Github, IdCard, Mail } from "lucide-react";
const Profile = ()=>{
    const GetGithubData = async ()=>{
        const response = await axios.get("https://api.github.com/users/kerolosgr");
        return response.data;
    }
    const {data,isLoading,error,refetch} = useQuery({
        queryKey:["profile"],
        queryFn: GetGithubData
    });
    // if(!isLoading) console.log(data)

    return(
        <>
        <div className="flex flex-col justify-start items-center w-[500px] h-fit bg-neutral-50 rounded-xl px-2 py-[25px] shadow-xl">
                    <div className="w-full flex justify-center items-center h-[40%]">
                    <Avatar className="w-[200px] drop-shadow-xl">
                    <AvatarImage className="rounded-full shadow-lg" src={isLoading?null:data.avatar_url} />
                    <AvatarFallback><img className="rounded-full shadow-lg" src="/assets/user.webp" /></AvatarFallback>
                    </Avatar>
                    <div>
                    <h2 className="ml-4 text-3xl font-bold font-sans">Kerolos Safwat</h2>
                    <span className="ml-4 text-sm font-medium font-sans">Software Engineer</span>
                    </div>
                    </div>

                    <div className="w-full flex flex-col p-2 gap-y-3 mt-4">
                        <h5 className="font-bold text-xl">Personal Info</h5>
                        <span className="flex"><IdCard className="mr-2" /><p className="font-bold">532016</p></span>
                        <span className="flex"><Github className="mr-2" /><p className="font-semibold">{isLoading?"Github User":`${data.name} (${data.login})`}</p></span>
                        <span className="flex"><Mail className="mr-2" /><p>Kerolossafwat41@gmail.com</p></span>
                        <span className="flex"><Earth className="mr-2" /><p>Egypt - Nasr City</p></span>
                        <span className="flex"><Book className="mr-2" /><p>Computer Science</p></span>
                    </div>

                    <div className="w-full flex flex-col justify-center items-start mt-4">
                        <h3 className="text-xl ml-2 font-bold">Skills</h3>
                        <div className="w-full flex m-2 flex-wrap">
                        <Badge variant="dark">Javascript</Badge>
                        <Badge variant="dark">HTML</Badge>
                        <Badge variant="dark">CSS</Badge>
                        <Badge variant="dark">ReactJS</Badge>
                        <Badge variant="dark">NextJS</Badge>
                        <Badge variant="dark">MONGO</Badge>
                        <Badge variant="dark">SQL</Badge>
                        <Badge variant="dark">NODEJS</Badge>
                        </div>
                    </div>
                <Button variant={"dark"} className="mt-1 ml-auto mr-4 px-5 rounded">Edit Profile</Button>
                </div>

                <div className="w-[calc(100%-500px)] mx-4 h-full bg-neutral-50 rounded-xl px-2 py-[25px] shadow-xl">
                    <img src="/assets/res.png" className="w-full h-full object-contain"/>
                </div>

        </>
    )
}
export default Profile;