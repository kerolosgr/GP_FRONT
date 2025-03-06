import { ProfileContext } from "@/components/context/ProfileContext";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { data } from "react-router-dom";

const Discover = ()=>{
    const [ProfileData,setProfileData] = useState({
        id:"52146",
        name:"Kerolos Safwat",
        job_title:"Software Engineer",
        avatar_url:"",
        github_name:"",
        github_login:"",
        email:"Kerolossafwat41@gmail.com",
        location:"Egypt - Nasr City",
        education:"Computer Science",
        skills: [
            "Javascript",
            "HTML",
            "CSS",
            "ReactJS",
            "NextJS",
            "MONGO",
            "SQL",
            "NODEJS"
          ],
        resume_image_url:"/assets/res.png",
    });
    const GetGithubData = async ()=>{
        const response = await axios.get("https://api.github.com/users/kerolosgr");
        return response.data;
    }
    const {data:fetchedgithubdata,isLoading:profileLoading,error:profileError,refetch} = useQuery({
        queryKey:["profile"],
        queryFn: GetGithubData
    });
    useEffect(
        ()=>{
            if(fetchedgithubdata && !profileLoading && !profileError){
                setProfileData((prev)=>({...prev,avatar_url:fetchedgithubdata.avatar_url,github_name:fetchedgithubdata.name,github_login:fetchedgithubdata.login}))
            }
        },[fetchedgithubdata,profileLoading,profileError]
    )
    
    return(
        <>
        <ProfileContext.Provider value={{ProfileData,profileLoading,profileError}}>
        <SideBar/>
        </ProfileContext.Provider>
        </>
    )
}
export default Discover;