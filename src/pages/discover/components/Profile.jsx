import { ProfileContext } from "@/components/context/ProfileContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book, CircleHelp, Earth, Eye, Github, IdCard, LoaderCircle, Mail, Pencil } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { tips } from "./tips";
import ResumeScore from "./ResumeScore";
import Cookies from "js-cookie";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import AtsScore from "./AtsScore";
import Questions from "./Questions";
const Profile = ()=>{
    const {ProfileData,profileLoading,profileError,githubLoading,githubError,ProfileGithubData,profilerefetch,githubrefetch} = useContext(ProfileContext);
    // const GetGithubData = async ()=>{
    //     const response = await axios.get("https://api.github.com/users/kerolosgr");
    //     return response.data;
    // }
    // const {data,isLoading,error,refetch} = useQuery({
    //     queryKey:["profile"],
    //     queryFn: GetGithubData
    // });
    // if(!isLoading) console.log(data)
    const [viewUpdate,setviewUpdate] = useState(false);
    const [isUpdating,setisUpdating]= useState(false);
    const [updatedData,setupdatedData] = useState({
            userId: ProfileData?.id,
            careerName: ProfileData?.careerName,
            education: ProfileData?.collegeName,
            email: ProfileData?.email,
            github: ProfileData?.github,
            linkedin: ProfileData?.linkedin,
            location: ProfileData?.location,
            name: ProfileData?.name,
            projects: ProfileData?.projects,
            skills: ProfileData?.skills,
        // userId:ProfileData?.id,
        // name:ProfileData?.name,
        // careerName:ProfileData?.careerName,
        // collegeName:ProfileData?.collegeName,
        // skills:ProfileData?.skills,
        // github:ProfileData?.github,
        // email:ProfileData?.email,
        // location:ProfileData?.location
    });

    const handleUpdateField = (e)=>{
        if(e.target.name == "skills"){
            const skills = e.target.value.split(",");
            setupdatedData({...updatedData,[e.target.name]:skills});
        }else if(e.target.name == "education"){
            const education = e.target.value;
            setupdatedData({...updatedData,[e.target.name]:[education]});
        }else{
         setupdatedData({...updatedData,[e.target.name]:e.target.value});   
        } 
    };

    const updateProfile = async ()=>{
        setisUpdating(true);
        try{
            await axios.put('https://lin.kerolos-safwat.me/api/v1/user/update-user',updatedData,{headers:{'Authorization': `Bearer ${Cookies.get("devtoken")}`}});
            toast.success("Profile Updated Successfully");
            profilerefetch();
            setisUpdating(false);
            setviewUpdate(false);
        }catch(err){
            console.log(err);
            toast.error("Something went wrong");
        }
    }
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
    // bg-[radial-gradient(ellipse_at_top_left,_#fefce8,_#f5f5f5,_#e0e0e0)]
    return(
        <>
        <div className="w-full h-fit flex flex-col justify-start items-start p-4 bg-neutral-50/20 rounded-2xl">
            <h1 className="text-black text-[28px] font-[380] ">Welcome in , {ProfileData?.name}</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2 mt-4">

                <div className="aspect-square flex rounded-[50px] shadow relative overflow-hidden group">
                    <Avatar className="w-full h-full">
                     <AvatarImage className="w-full h-full object-cover" src={githubLoading?null:ProfileGithubData?.avatar_url} />
                     <AvatarFallback><img src="/assets/Cute Avatar2.png" /></AvatarFallback>
                     </Avatar>
                    <div className="absolute flex items-center justify-between px-8 py-4 w-full bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent">
                    
                    <div className="flex flex-col">
                    <h2 className="text-xl font-[480] text-white">{ProfileData?.name}</h2>
                    <span className="text-sm font-[480] text-white/80">{ProfileData?.careerName}</span>
                    </div>
                    </div>
                    <div className="absolute top-[-50px] opacity-0 right-0 group-hover:top-[20px] group-hover:right-4 group-hover:opacity-100 transition-all ease-in-out duration-200 p-1 w-[40px] h-[40px] hover:scale-[1.2] transform-gpu rounded-full bg-white/20 backdrop-blur-md text-sm font-medium text-white">
                    <Button onClick={()=>setviewUpdate(true)} variant={"dark"} className={"w-full h-full rounded-full px-7 py-2"}><Pencil className="w-full h-full" strokeWidth={1.5} /></Button>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start col-span-1 h-fit md:aspect-square bg-[#f8f7ef]/85 px-[30px] pt-[20px] md:pt-[40px] pb-[20px] md:pb-[20px] rounded-[30px] md:rounded-[50px] shadow overflow-hidden relative">
                     <div className="w-full flex flex-col gap-y-3">
                         <h5 className="text-black text-[22px] font-light">Personal Info</h5>
                         <span className="flex items-center"><IdCard className="mr-2" /><p className="">{ProfileData?.id}</p></span>
                         <span className="flex items-center"><Github className="mr-2" /><p className="font-[370]">{ProfileData?.github?(githubLoading?"Github User":`${ProfileGithubData?.name == null ? '...' : ProfileGithubData?.name} (${ProfileData.github})`):"Not Set Yet"}</p></span>
                         <span className="flex items-center"><Mail className="mr-2" /><p className="font-[370]">{ProfileData?.email}</p></span>
                         <span className="flex items-center"><Earth className="mr-2" /><p className="font-[370]">{ProfileData?.location}</p></span>
                         <span className="flex items-start"><Book className="mr-2" /><p className="text-[15px] max-w-[80%] font-[380] line-clamp-3">{ProfileData?.collegeName[0]}</p></span>
                     </div>
                </div>

                <div className="flex flex-col justify-start items-start col-span-1 h-fit md:aspect-square bg-[#f8f7ef]/85 px-[30px] pt-[20px] md:pt-[40px] pb-[20px] md:pb-[20px] rounded-[30px] md:rounded-[50px] shadow overflow-hidden relative">
                    <h2 className="text-black text-[22px] font-light">Skills</h2>
                    <div className="mt-[10px] grid grid-cols-3 gap-x-4">
                    {
                        ProfileData?.skills.length > 0 ?
                        ProfileData.skills.slice(0,21).map(
                            (skill)=> <p className="text-black text-[14px] font-light my-1" key={skill}>{skill}</p>
                        )
                        :
                        <Badge variant="dark">EMPTY</Badge>
                        }
                    </div>
                </div>

                {/* <div className="flex flex-col justify-start items-start col-span-1 h-fit md:aspect-square bg-[#f8f7ef]/85 px-[30px] pt-[20px] md:pt-[40px] pb-[20px] md:pb-[20px] rounded-[30px] md:rounded-[50px] shadow overflow-hidden relative">
                    <h2 className="text-black text-[22px] font-light">Your Resume Score</h2>
                    <div className="w-full h-fit flex justify-center items-center my-4">
                    <CircularProgressbar className='w-[150px] h-[150px] aspect-square my-2' minValue={0} maxValue={100} value={80} text={`${80}%`} styles={buildStyles({rotation: 0.5 , pathColor: `rgba(255, 216, 96, 1`,textColor: '#706f6e',trailColor: 'transparent',pathTransitionDuration: 0.5,})} />
                    </div>
                    <p className="text-black text-[14px] text-center w-full">You have completed 80% of your resume</p> */}
                    {/* <div className="flex justify-center items-center w-[40px] shadow mt-auto h-[40px] bg-neutral-50 rounded-full">
                    <Eye strokeWidth={1} size={20} />
                    </div> */}
                {/* </div> */}

                <AtsScore/>

                <div className="col-span-1 md:col-span-2 h-fit rounded-[30px] md:rounded-[50px] p-4 bg-white overflow-hidden">
                <img src={resumeImage} className="w-full h-fit object-contain"/>
                </div>

                <Questions/>

            </div>
        </div>
        <Dialog open={viewUpdate} onOpenChange={setviewUpdate}>
            <DialogContent className={"min-w-[900px] h-fit py-10"}>
                <DialogHeader>
                    <DialogTitle>Update your personal information to keep your account up-to-date.</DialogTitle>
                </DialogHeader>
                <div className="w-full h-full grid grid-cols-3 gap-4">
                    <Input onChange={handleUpdateField} name="name" type={"text"} className={"col-span-1"} placeholder={"Name"} value={updatedData?.name} disabled={isUpdating} />
                    <Input onChange={handleUpdateField} name="email" type={"text"} className={"col-span-1"} placeholder={"Email"} value={updatedData?.email} disabled={isUpdating} />
                    <Input onChange={handleUpdateField} name="github" type={"text"} className={"col-span-1"} placeholder={"Github"} value={updatedData?.github} disabled={isUpdating} />
                    <Input onChange={handleUpdateField} name="careerName" type={"text"} className={"col-span-1"} placeholder={"Career"} value={updatedData?.careerName} disabled={isUpdating} />
                    <Input onChange={handleUpdateField} name="location" type={"text"} className={"col-span-1"} placeholder={"Location"} value={updatedData?.location} disabled={isUpdating} />
                    <Input onChange={handleUpdateField} name="education" type={"text"} className={"col-span-1"} placeholder={"College"} value={updatedData?.education} disabled={isUpdating} />
                    <Input onChange={handleUpdateField} name="skills" type={"text"} className={"col-span-2"} placeholder={"Skills"} value={updatedData?.skills} disabled={isUpdating} />
                    <Button onClick={updateProfile} variant={"dark"} className={"col-end-4"}>{isUpdating?<LoaderCircle strokeWidth={3} className="animate-spin"/>:"Update"}</Button>
                </div>
            </DialogContent>
        </Dialog>
        </>
    )

    // return(
    //     <div className="w-full flex flex-col md:flex-row">
    //     <div className="flex flex-col justify-start items-center w-full md:w-[500px] h-fit bg-neutral-50 rounded-xl px-2 py-[25px] shadow-xl">
    //                 <div className="w-full flex justify-center items-center h-[40%]">
    //                 <Avatar className="w-[200px] h-[200px] drop-shadow-xl">
    //                 <AvatarImage className="rounded-full shadow-lg" src={githubLoading?null:ProfileGithubData?.avatar_url} />
    //                 <AvatarFallback><img className="rounded-full shadow-lg" src="/assets/Cute Avatar.png" /></AvatarFallback>
    //                 </Avatar>
    //                 <div>
    //                 <h2 className="ml-4 text-3xl font-bold font-sans">{ProfileData?.name}</h2>
    //                 <span className="ml-4 text-sm font-medium font-sans">{ProfileData?.careerName}</span>
    //                 </div>
    //                 </div>

    //                 <div className="w-full flex flex-col p-2 gap-y-3 mt-4">
    //                     <h5 className="font-bold text-xl">Personal Info</h5>
    //                     <span className="flex items-center"><IdCard className="mr-2" /><p className="font-bold">{ProfileData?.id}</p></span>
    //                     <span className="flex items-center"><Github className="mr-2" /><p className="font-semibold">{ProfileData?.github?(githubLoading?"Github User":`${ProfileGithubData?.name == null ? '...' : ProfileGithubData?.name} (${ProfileData.github})`):"Not Set Yet"}</p></span>
    //                     <span className="flex items-center"><Mail className="mr-2" /><p>{ProfileData?.email}</p></span>
    //                     <span className="flex items-center"><Earth className="mr-2" /><p>{ProfileData?.location}</p></span>
    //                     <span className="flex items-center"><Book className="mr-2" /><p className="text-[15px] max-w-[90%] font-semibold">{ProfileData?.collegeName[0]}</p></span>
    //                 </div>

    //                 <div className="w-full flex flex-col justify-center items-start mt-4">
    //                     <h3 className="text-xl ml-2 font-bold">Skills</h3>
    //                     <div className="w-full flex m-2 flex-wrap">
    //                         {ProfileData?.skills.length > 0 ?
    //                         ProfileData.skills.slice(0,8).map(
    //                             (skill)=> <Badge variant="dark" key={skill}>{skill}</Badge>
    //                         )
    //                         :
    //                         <Badge variant="dark">EMPTY</Badge>}
    //                         {/* {ProfileData.skills} */}
    //                     {/* <Badge variant="dark">Javascript</Badge>
    //                     <Badge variant="dark">HTML</Badge>
    //                     <Badge variant="dark">CSS</Badge>
    //                     <Badge variant="dark">ReactJS</Badge>
    //                     <Badge variant="dark">NextJS</Badge>
    //                     <Badge variant="dark">MONGO</Badge>
    //                     <Badge variant="dark">SQL</Badge>
    //                     <Badge variant="dark">NODEJS</Badge> */}
    //                     </div>
    //                 </div>
    //             <Button variant={"dark"} className="mt-1 ml-auto mr-4 px-5 rounded">Edit Profile</Button>
    //             </div>

    //             <div className="w-full md:w-[400px] md:mx-4 md:mt-0 mt-2 h-full bg-neutral-50 rounded-xl px-2 py-[25px] shadow-xl">
    //                 <img src={resumeImage} className="w-full h-full object-contain"/>
    //             </div>

    //             {/* <div className="w-full flex flex-col justify-start items-center md:w-[400px] md:mx-4 md:mt-0 mt-2 h-full bg-neutral-50 shadow-xl rounded-xl py-[25px] px-2 overflow-auto">
    //                 <h2 className="text font-semibold">💡 Developer Tips & Tricks</h2>
    //                 {tipsDisplayed.map(
    //                     (tip)=>(
    //                     <div key={tip.id} className="w-full min-h-[50px] flex justify-start items-center p-4 border-b-2">
    //                     <p className="text-[12px] font-semibold text-gray-600">{tip.content}</p>
    //                     </div>
    //                     )
    //                 )}
    //             </div> */}
    //             <ResumeScore score={80}/>

    //     </div>
    // )
}
export default Profile;