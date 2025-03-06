import { ProfileContext } from "@/components/context/ProfileContext";
import SideBar from "./components/SideBar";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Discover = ()=>{
    const GetGithubData = async ()=>{
        const response = await axios.get("https://api.github.com/users/kerolosgr");
        return response.data;
    }
    const {data:profileData,isLoading:profileLoading,error:profileError,refetch} = useQuery({
        queryKey:["profile"],
        queryFn: GetGithubData
    });
    return(
        <>
        <ProfileContext.Provider value={{profileData,profileLoading,profileError}}>
        <SideBar/>
        </ProfileContext.Provider>
        </>
    )
}
export default Discover;