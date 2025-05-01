import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Activity, Bookmark, BriefcaseBusiness, Check, Link2, MapPin, SquareArrowOutUpRight, Stars } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { format,formatDistance,formatDate,subDays } from "date-fns";
import axios from "axios";
import { toast } from "sonner";
import Cookies from "js-cookie";

const JobCard = ({jobid,userid,title,company,location,jobType,description,url,date,imageurl,experience,saved,descriptionarray,refetch}) => {
    const [isVisible,setisVisible] = useState(false);
    const [isCopied,setisCopied] = useState(false);

    const handleSaveJob = async ()=>{
            try{
                await axios.post(`https://lin.kerolos-safwat.me/api/v1/user/saveJob?userId=${userid}`,
                    {
                        job_title: title,
                        job_type: jobType,
                        companyName: company,
                        location: location,
                        datePosted: date,
                        jobLink: url,
                        image_url: imageurl,
                        categories: descriptionarray,
                        experience: experience,
                        level: experience
                      },
                    {headers:{'Authorization': `Bearer ${Cookies.get("devtoken")}`}}
                )
                toast("Job Saved");
            }
            catch(err){
                toast("Failed to save job");
            }
    }

    const handleUnsaveJob = async ()=>{
        try{
            axios.delete(`https://lin.kerolos-safwat.me/api/v1/user/delete-job?userId=${userid}&jobId=${jobid}`,{headers:{'Authorization': `Bearer ${Cookies.get("devtoken")}`}}).then(
                (res)=>{
                    toast("Job Unsaved");
                }
            )
            setTimeout(
                async ()=>{
                    await refetch();
                },200
            )
            
        }
        catch(err){
            toast("Failed to unsave job");
        }
    }

    const handleCopyToClipboard = ()=>{
        navigator.clipboard.writeText(url);
        setisCopied(true);
        setTimeout(
            ()=>{setisCopied(false);}
        ,2000
    )
    }
    
    return (
        <>
            <div onClick={() => setisVisible(true)} className="w-full md:w-[420px] h-[300px] p-4 flex flex-col justify-start items-start border rounded-xl border-gray-300 hover:shadow transition">
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h5 className="font-semibold text-[18px] my-2">{title}</h5>
                        <p>{company}</p>
                        <p>{location}</p>
                        <span className="bg-[#e8f3fc] min-w-[120px] w-fit max-w-[200px] h-[25px] flex justify-start py-2 px-4 items-center text-center rounded text-[12px] font-semibold my-2"><Activity size={15} color="#237ea3" className="mr-2" />{date==="N/A"?"Posted date not available":date}</span>
                    </div>
                    <div className="w-[110px] h-[110px]">
                        {imageurl=="N/A"?null:<img className="object-contain" src={imageurl+"?height=4160&width=4160"} width={110} height={110} alt="co. img" />}
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2 text-[14px]">
                    <p className="font-semibold">{experience}</p>
                    <p>{jobType}</p>
                    {/* <p>Remote</p> */}
                </div>
                <p className="mt-2 text-[12px] font-semibold text-gray-700 line-clamp-4 md:line-clamp-5">{descriptionarray.join(" . ")}</p>
            </div>
            <Dialog open={isVisible} onOpenChange={setisVisible}>
            <DialogContent className="min-w-[1020px] min-h-[50vh] max-h-[80vh]">
                <div className="flex flex-col w-full h-full items-start justify-start p-[20px]">
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h5 className="font-semibold text-[18px] my-2">{title}</h5>
                        <span className="flex justify-startmy-2 items-center"><BriefcaseBusiness size={15} className="mr-2" /><p>{company}</p></span>
                        <span className="flex justify-startmy-2 items-center"><MapPin size={15} className="mr-2" /><p>{location}</p></span>
                        {/* {formatDistance(subDays(date, 3), new Date(), { addSuffix: true })} */}
                        <span className="bg-[#e8f3fc] min-w-[120px] w-fit max-w-[200px] h-[25px] flex justify-start py-2 px-4 items-center text-center rounded text-[12px] font-semibold my-2"><Activity size={15} color="#237ea3" className="mr-2" />{date==="N/A"?"Posted date not available":date}</span>
                    </div>
                    <div className="w-[110px] h-[110px]">
                        {imageurl=="N/A"?null:<img className="object-contain" src={imageurl+"?height=4160&width=4160"} width={110} height={110} alt="co. img" />}
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2 text-[14px]">
                    <p className="font-semibold">{experience}</p>
                    <p className="font-semibold">{jobType}</p>
                    {/* <p className="font-semibold">Remote</p> */}
                </div>
                <p className="mt-2 text-[14px] font-semibold text-gray-700 max-h-[200px] line-clamp-6">{descriptionarray.join(" . ")}</p>
                <div className="mt-10 ml-auto flex justify-center items-center">
                <a href={url} target="_blank" className="bg-black font-semibold text-white rounded text-[14px] py-2 px-4 h-9 hover:bg-neutral-900 flex justify-center items-center"><SquareArrowOutUpRight className="mr-2" size={15} />Apply</a>
                <Button onClick={()=>{!saved?handleSaveJob():handleUnsaveJob()}} className="mx-2 rounded" variant={"dark"}><Bookmark fill={saved?"#FFFFFF":"none"} /></Button>
                <Button onClick={handleCopyToClipboard} className="bg-white font-semibold text-black border rounded text-[14px] py-2 px-4 h-9 hover:bg-neutral-50 flex justify-center items-center transition cursor-pointer">{isCopied?<Check />:<Link2 />}</Button>
                </div>
                
                </div>
            </DialogContent>
        </Dialog >
        </>
    )
}
export default JobCard;