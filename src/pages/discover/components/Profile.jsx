import { ProfileContext } from "@/components/context/ProfileContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book, Earth, Github, IdCard, Mail } from "lucide-react";
import { useContext, useEffect } from "react";
import { tips } from "./tips";
import ResumeScore from "./ResumeScore";
import Cookies from "js-cookie";
const Profile = ()=>{
    const {ProfileData,profileLoading,profileError,githubLoading,githubError,ProfileGithubData} = useContext(ProfileContext);
    // const GetGithubData = async ()=>{
    //     const response = await axios.get("https://api.github.com/users/kerolosgr");
    //     return response.data;
    // }
    // const {data,isLoading,error,refetch} = useQuery({
    //     queryKey:["profile"],
    //     queryFn: GetGithubData
    // });
    // if(!isLoading) console.log(data)
    const giveTips = (tipsNumber)=>{
        const tipsarray = [];
        for(let i=0; i<tipsNumber; i++){
            const tip = tips[Math.floor(Math.random()*tips.length)];
            tipsarray.push(tip);
        }
        return tipsarray;
    }
    // const tipsDisplayed = giveTips(8);

    const getResumeImage = async () => {
        try {
            const res = await axios.get(ProfileData?.userCvImage.downloadUrl, {
                headers: {'Authorization': `Bearer ${Cookies.get("devtoken")}`},
                responseType: 'blob'  // Set response type to blob
            });
            return URL.createObjectURL(res.data);  // Create a blob URL
        } catch (error) {
            console.error('Failed to fetch resume image:', error);
            return null;
        }
    };
    
    const {data:resumeImage, error, isLoading} = useQuery({
        queryKey: ["resumeImage", ProfileData?.userCvImage?.downloadUrl],
        queryFn: getResumeImage,
        enabled: !!ProfileData?.userCvImage?.downloadUrl,
        onSuccess: (data) => {
            // Clean up the blob URL when the component unmounts or when the data changes
            return () => {
                if (data) URL.revokeObjectURL(data);
            };
        }
    });

    return(
        <div className="w-full flex flex-col md:flex-row">
        <div className="flex flex-col justify-start items-center w-full md:w-[500px] h-fit bg-neutral-50 rounded-xl px-2 py-[25px] shadow-xl">
                    <div className="w-full flex justify-center items-center h-[40%]">
                    <Avatar className="w-[200px] h-[200px] drop-shadow-xl">
                    <AvatarImage className="rounded-full shadow-lg" src={githubLoading?null:ProfileGithubData?.avatar_url} />
                    <AvatarFallback><img className="rounded-full shadow-lg" src="/assets/Cute Avatar.png" /></AvatarFallback>
                    </Avatar>
                    <div>
                    <h2 className="ml-4 text-3xl font-bold font-sans">{ProfileData?.name}</h2>
                    <span className="ml-4 text-sm font-medium font-sans">{ProfileData?.careerName}</span>
                    </div>
                    </div>

                    <div className="w-full flex flex-col p-2 gap-y-3 mt-4">
                        <h5 className="font-bold text-xl">Personal Info</h5>
                        <span className="flex items-center"><IdCard className="mr-2" /><p className="font-bold">{ProfileData?.id}</p></span>
                        <span className="flex items-center"><Github className="mr-2" /><p className="font-semibold">{ProfileData?.github?(githubLoading?"Github User":`${ProfileGithubData?.name == null ? '...' : ProfileGithubData?.name} (${ProfileData.github})`):"Not Set Yet"}</p></span>
                        <span className="flex items-center"><Mail className="mr-2" /><p>{ProfileData?.email}</p></span>
                        <span className="flex items-center"><Earth className="mr-2" /><p>{ProfileData?.location}</p></span>
                        <span className="flex items-center"><Book className="mr-2" /><p className="text-[15px]">{ProfileData?.collegeName[0]}</p></span>
                    </div>

                    <div className="w-full flex flex-col justify-center items-start mt-4">
                        <h3 className="text-xl ml-2 font-bold">Skills</h3>
                        <div className="w-full flex m-2 flex-wrap">
                            {ProfileData?.skills.length > 0 ?
                            ProfileData.skills.slice(0,8).map(
                                (skill)=> <Badge variant="dark" key={skill}>{skill}</Badge>
                            )
                            :
                            <Badge variant="dark">EMPTY</Badge>}
                            {/* {ProfileData.skills} */}
                        {/* <Badge variant="dark">Javascript</Badge>
                        <Badge variant="dark">HTML</Badge>
                        <Badge variant="dark">CSS</Badge>
                        <Badge variant="dark">ReactJS</Badge>
                        <Badge variant="dark">NextJS</Badge>
                        <Badge variant="dark">MONGO</Badge>
                        <Badge variant="dark">SQL</Badge>
                        <Badge variant="dark">NODEJS</Badge> */}
                        </div>
                    </div>
                <Button variant={"dark"} className="mt-1 ml-auto mr-4 px-5 rounded">Edit Profile</Button>
                </div>

                <div className="w-full md:w-[400px] md:mx-4 md:mt-0 mt-2 h-full bg-neutral-50 rounded-xl px-2 py-[25px] shadow-xl">
                    <img src={resumeImage} className="w-full h-full object-contain"/>
                </div>

                {/* <div className="w-full flex flex-col justify-start items-center md:w-[400px] md:mx-4 md:mt-0 mt-2 h-full bg-neutral-50 shadow-xl rounded-xl py-[25px] px-2 overflow-auto">
                    <h2 className="text font-semibold">💡 Developer Tips & Tricks</h2>
                    {tipsDisplayed.map(
                        (tip)=>(
                        <div key={tip.id} className="w-full min-h-[50px] flex justify-start items-center p-4 border-b-2">
                        <p className="text-[12px] font-semibold text-gray-600">{tip.content}</p>
                        </div>
                        )
                    )}
                </div> */}
                <ResumeScore score={80}/>

        </div>
    )
}
export default Profile;