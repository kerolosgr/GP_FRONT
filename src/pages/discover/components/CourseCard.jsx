import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Star, StarHalf } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({title,author,platform,description,rating,image_url,url,duration})=>{
    const [isVisible, setisVisible] = useState(false);
    return(
        <>
        <div onClick={()=>setisVisible(true)} className="flex flex-col justify-start items-start w-[300px] h-[350px] border border-gray-300 rounded-lg hover:shadow">
        <img className="w-full rounded-t-lg h-[170px]" src={image_url} />
        <div className="w-full px-[20px] py-[10px]">
        <h3 className="text-[14px] font-bold line-clamp-2">{title}</h3>
        <p className="text-[13px] font-semibold text-gray-700">{duration}</p>
        <p className="text-[13px] font-semibold text-gray-900">{platform}</p>
        <p className="text-[12px] mt-1 line-clamp-2">{description}</p>
        <p className="text-[14px] text-orange-700 my-2 font-bold flex justify-start items-center">{rating} <span className="ml-2 flex justify-start items-center">{Array.from({length:(Math.floor(rating))}).map((i,_)=><Star key={_} size={18} fill="oklch(0.553 0.195 38.402)"  />)}{Number(rating)-Math.floor(rating) !== 0 && <StarHalf size={18} fill="oklch(0.553 0.195 38.402)" />}</span></p>
        </div>
        </div>
        <Dialog open={isVisible} onOpenChange={setisVisible}>
            <DialogContent className="min-w-[1020px] min-h-fit max-h-[80vh]">
                <div className="flex justify-center items-start py-4">
                <div className="flex justify-start items-start">
                <img className="w-full rounded-lg h-[170px] mr-4" src={image_url} />
                </div>
                <div className="flex flex-col justify-start items-start">
                <h3 className="text-[18px] font-bold line-clamp-2">{title}</h3>
                <p className="text-[14px] font-semibold text-gray-700">{duration}</p>
                <p className="text-[13px] font-semibold text-gray-900">{platform}</p>
                <p className="text-[12px] md:w-[600px] mt-1 line-clamp-4">{description}</p>
                <p className="text-[14px] text-orange-700 my-2 font-bold flex justify-start items-center">{rating} <span className="ml-2 flex justify-start items-center">{Array.from({length:(Math.floor(rating))}).map((i,_)=><Star key={_} size={18} fill="oklch(0.553 0.195 38.402)"  />)}{Number(rating)-Math.floor(rating) !== 0 && <StarHalf size={18} fill="oklch(0.553 0.195 38.402)" />}</span></p>
                </div>
                
                </div>
                <Link to={url} className="w-fit ml-auto"><Button className={"w-fit ml-auto"}>View Course</Button></Link>
            </DialogContent>
        </Dialog >
        </>
    )
}
export default CourseCard;