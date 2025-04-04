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
        return res;
    }

    const {data:indeedJobs,isLoading:indeedIsLoading,error:indeedError} = useQuery({
        queryKey:["indeed",ProfileData?.job_title],
        queryFn: fetchindeedJobs
    });
    
    return(
        <>
        <div className="w-full h-full p-4 bg-neutral-50 rounded-xl flex flex-col items-start justify-start overflow-scroll overflow-x-hidden">
            <h2 className="text-3xl font-semibold ml-4">Jobs</h2>
            <div className="w-full flex justify-start items-center gap-3 flex-wrap h-fit p-2 mt-4 overflow-y-auto">
                {/* <JobCardSkeleton/> */}

            {
                indeedIsLoading?
                Array.from({length:8}).map(
                    ()=> <JobCardSkeleton/>
                )
                :
                indeedError?
                <h2 className="text-3xl font-semibold text-center">{indeedError.message}</h2>
                :
                indeedJobs?.data.data.map(
                    (job,i)=><JobCard key={i} title={job.positionName} description={job.description} company={job.company} location={job.location} jobType={job.jobType[0]} url={job.url} date={job.postingDateParsed}/>
                )
            }
            </div>
        </div>
        </>
    )
}
export default Jobs;