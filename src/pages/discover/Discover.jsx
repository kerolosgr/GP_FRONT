import { ProfileContext } from "@/components/context/ProfileContext";
import SideBar from "./components/SideBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { data, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { UserIdContext } from "@/components/context/UserIdContext";
import Cookies from "js-cookie";

const Discover = ()=>{
    const navigate = useNavigate();
    const {userId} = useParams();
    const {setshowDiscover}=useContext(UserIdContext);
    // const [ProfileData,setProfileData] = useState({
    //     id:"52146",
    //     name:"Kerolos Safwat",
    //     job_title:"Software Engineer",
    //     avatar_url:"",
    //     github_name:"",
    //     github_login:"kerolosgreen",
    //     email:"Kerolossafwat41@gmail.com",
    //     location:"Egypt - Nasr City",
    //     education:"Computer Science",
    //     skills: [
    //         "Javascript",
    //         "HTML",
    //         "CSS",
    //         "ReactJS",
    //         "NextJS",
    //         "MONGO",
    //         "SQL",
    //         "NODEJS"
    //       ],
    //     resume_image_url:"/assets/res.png",
    // });
    // console.log(localStorage.getItem("userSavedId"));x
    
    if(userId== undefined) navigate('/start');
    const fetchUserProfile = async ()=>{
        
        try{
        const response = await axios.get(`https://lin.kerolos-safwat.me/api/v1/user/${userId}`,{headers:{'Authorization': `Bearer ${Cookies.get("devtoken")}`}});
        // localStorage.setItem('userSavedId',response.data.data.id);
        setshowDiscover(true);
        // console.log(response.data.data);
        return response.data.data;
        }

        catch(err){
            console.log(err);
            if(err.status==400){
                toast("We couldn't find your user. Please try again or create a new profile.");
                navigate('/start');
                setshowDiscover(false);
            }
            if(err.status==401){
                toast("Please Login First");
                navigate('/start');
                setshowDiscover(false);
            }
            if(err.status==404){
                toast("You Don't have permission to access this page.");
                navigate('/start');
                setshowDiscover(false);
            }
            return null;
        }  
    };


    const fetchedgithubdata = async ()=>{
        if(ProfileData?.github){ 
            const res =  await axios.get(`https://api.github.com/users/${ProfileData?.github}`);
            return res.data;
        }
        return null;
    }

    const {data: ProfileData, isLoading:profileLoading, error:profileError} = useQuery({
        queryKey:["profile",userId],
        queryFn: fetchUserProfile
    });

    const {data: ProfileGithubData,isLoading:githubLoading,error:githubError} = useQuery({
        queryKey:["github",ProfileData?.github_login],
        queryFn: fetchedgithubdata,
        enabled:!!ProfileData?.github
    });

    // console.log(githubLoading);

    // const GetGithubData = async ()=>{
    //     const response = await axios.get(`https://api.github.com/users/${ProfileData.github_login}`);
    //     return response.data;
    // }
    // const {data:fetchedgithubdata,isLoading:profileLoading,error:profileError,refetch} = useQuery({
    //     queryKey:["profile"],
    //     queryFn: GetGithubData
    // });

    // useEffect(
    //     ()=>{
    //         if(fetchedgithubdata && !profileLoading && !profileError){
    //             setProfileData((prev)=>({...prev,avatar_url:fetchedgithubdata.avatar_url,github_name:fetchedgithubdata.name}))
    //         }
    //     },[fetchedgithubdata,profileLoading,profileError]
    // )
    
    return(
        <>
        <ProfileContext.Provider value={{ProfileData,profileLoading,profileError,ProfileGithubData,githubLoading,githubError}}>
            {
                profileLoading?
                <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center text-2xl font-bold font-sans text-amber-700 shadow-[0_0_10px] bg-amber-200">Loading...</div>
                :
                <SideBar/>
            }
        
        </ProfileContext.Provider>
        </>
    )
}
export default Discover;