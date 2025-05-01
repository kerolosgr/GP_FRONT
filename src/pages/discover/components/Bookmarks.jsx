import axios from "axios";
import JobCard from "./JobCard";
import JobCardSkeleton from "./JobCardSkeleton";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

const Bookmarks = ()=>{
    const getBookmarks = async ()=>{
        const res = await axios.get(`https://lin.kerolos-safwat.me/api/v1/user/jobs/${localStorage.getItem("userId")}`,{headers:{'Authorization': `Bearer ${Cookies.get("devtoken")}`}});
        console.log(res.data.data);
        return res.data.data;
    }
    const {data:bookmarks,error,isLoading} = useQuery(
        {queryKey:["bookmarks"], queryFn: getBookmarks}
    )
    return(
        <div className="w-full h-full p-4 bg-neutral-50 rounded-xl flex flex-col items-start justify-start overflow-scroll overflow-x-hidden">
            <h2 className="text-3xl font-semibold ml-4">Bookmarks</h2>
            <div className="w-full flex justify-start items-center gap-3 flex-wrap h-fit p-2 mt-4">
                
            {
                isLoading?
                Array.from({length:8}).map(
                    (i,_)=> <JobCardSkeleton key={_}/>
                )
                :
                bookmarks.length>0?
                bookmarks?.map(
                    (bookmark,i)=><JobCard saved={true} key={bookmark.jobLink} experience={bookmark.level} imageurl={bookmark.image_url} title={bookmark.job_title} description={bookmark.description} company={bookmark.companyName} location={bookmark.location} jobType={bookmark.job_type} url={bookmark.jobLink} date={bookmark.datePosted}/>
                )
                :
                <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="font-semibold text-center">No Bookmarks Found</h2>
                </div>
            }
            </div>
        </div>
    )
}
export default Bookmarks;