import { Activity } from "lucide-react";
import JobCard from "./JobCard";
import JobCardSkeleton from "./JobCardSkeleton";
import { useContext } from "react";
import { ProfileContext } from "@/components/context/ProfileContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Jobs = ()=>{
    const {ProfileData,profileLoading,profileError,githubLoading,githubError,ProfileGithubData} = useContext(ProfileContext);
    const fetchindeedJobs = ()=>{
        const res = axios.get(`https://api.kerolos-safwat.me/api/v1/indeed?position=${ProfileData?.job_title}&country_symbol=EG&location=${ProfileData?.location}`);
        console.log(res.data);
        return res.data;
    }

    const {data:indeedJobs,isLoading:indeedIsLoading,error:indeedError} = useQuery({
        queryKey:["indeed",ProfileData?.job_title],
        queryFn: fetchindeedJobs
    });

    console.log(indeedIsLoading);
    
    return(
        <>
        <div className="w-full h-full p-4 bg-neutral-50 rounded-xl flex flex-col items-start justify-start overflow-scroll overflow-x-hidden">
            <h2 className="text-3xl font-semibold ml-4">Jobs</h2>
            <div className="w-full flex justify-start items-center gap-3 flex-wrap h-fit p-2 mt-4 overflow-y-auto">
                <JobCardSkeleton/>
                {
                    indeedIsLoading?
                    <JobCardSkeleton/>
                    :null
                }
            {
                Array.from({length:1}).map(
                    ()=> <JobCard/>
                )
            }
            </div>
        </div>
        </>
    )
}
export default Jobs;