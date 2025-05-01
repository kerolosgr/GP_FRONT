import { Activity } from "lucide-react";
import JobCard from "./JobCard";
import JobCardSkeleton from "./JobCardSkeleton";
import { useContext } from "react";
import { ProfileContext } from "@/components/context/ProfileContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Jobs = ()=>{
    const {ProfileData,profileLoading,profileError,githubLoading,githubError,ProfileGithubData} = useContext(ProfileContext);
    const fetchindeedJobs = async ()=>{
        const res = await axios.get(`https://scrappingall-production.up.railway.app/scrape-jobs?query=${ProfileData?.careerName}&pages=2&country_symbol=EG&location=${ProfileData?.location}`);
        // console.log(res.data.result);
        return res.data.result;
    }

    const {data:Jobs,isLoading:indeedIsLoading,error:indeedError} = useQuery({
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
                    (i,_)=> <JobCardSkeleton key={_}/>
                )
                :
                indeedError?
                <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="font-semibold text-center">Sorry , an error occured {indeedError.message}</h2>
                </div>
                :
                Jobs?.map(
                    (job,i)=><JobCard userid={ProfileData?.id} key={job.job_url} descriptionarray={job.Description.categories} experience={job.Description.level} imageurl={job.image_url} title={job.job_title} description={job.description} company={job.company_name} location={job.location} jobType={job.job_type[0]} url={job.job_url} date={job.datePosted}/>
                )
                // indeedJobs?.data.data.map(
                //     (job,i)=><JobCard key={i} title={job.positionName} description={job.description} company={job.company} location={job.location} jobType={job.jobType[0]} url={job.url} date={job.postingDateParsed}/>
                // )
            }
            </div>
        </div>
        </>
    )
}
export default Jobs;