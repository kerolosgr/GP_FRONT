import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Activity, Bookmark, BriefcaseBusiness, Check, Link2, MapPin, SquareArrowOutUpRight, Stars } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const JobCard = () => {
    const [isVisible,setisVisible] = useState(false);
    const [isCopied,setisCopied] = useState(false);

    const handleCopyToClipboard = ()=>{
        navigator.clipboard.writeText("Kerolos");
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
                        <h5 className="font-semibold text-[18px] my-2">Software Engineer</h5>
                        <p>Advansys</p>
                        <p>Nasr City</p>
                        <span className="bg-[#e8f3fc] min-w-[120px] max-w-[200px] h-[25px] flex justify-start py-2 px-4 items-center text-center rounded text-[12px] font-semibold my-2"><Activity size={15} color="#237ea3" className="mr-2" />3 days ago</span>
                    </div>
                    <div className="w-[110px] h-[110px]">
                        <img className="object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" width={110} height={110} alt="co. img" />
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2 text-[14px]">
                    <p className="font-semibold">Entry-level</p>
                    <p>Full-time</p>
                    <p>Remote</p>
                </div>
                <p className="mt-2 text-[12px] font-semibold text-gray-700 line-clamp-4 md:line-clamp-5">Join Advansys as a Software Engineer Intern and gain hands-on experience in a fast-paced and innovative environment. You'll work alongside experienced engineers and contribute to various software development projects, enhancing your technical skills while learning about real-world applications.Join Advansys as a Software Engineer Intern and gain hands-on experience in a fast-paced and innovative environment. You'll work alongside experienced engineers and contribute to various software development projects, enhancing your technical skills while learning about real-world applications.</p>
            </div>
            <Dialog open={isVisible} onOpenChange={setisVisible}>
            <DialogContent className="min-w-[1020px] min-h-[50vh] max-h-[80vh]">
                <div className="flex flex-col w-full h-full items-start justify-start p-[20px]">
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h5 className="font-semibold text-[18px] my-2">Software Engineer</h5>
                        <span className="flex justify-startmy-2 items-center"><BriefcaseBusiness size={15} className="mr-2" /><p>Advansys</p></span>
                        <span className="flex justify-startmy-2 items-center"><MapPin size={15} className="mr-2" /><p>Nasr City</p></span>
                        
                        <span className="bg-[#e8f3fc] min-w-[120px] max-w-[200px] h-[25px] flex justify-start py-2 px-4 items-center text-center rounded text-[12px] font-semibold my-2"><Activity size={15} color="#237ea3" className="mr-2" />3 days ago</span>
                    </div>
                    <div className="w-[110px] h-[110px]">
                        <img className="object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" width={110} height={110} alt="co. img" />
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2 text-[14px]">
                    <p className="font-semibold">Entry-level</p>
                    <p className="font-semibold">Full-time</p>
                    <p className="font-semibold">Remote</p>
                </div>
                <p className="mt-2 text-[14px] font-semibold text-gray-700 max-h-[200px] line-clamp-6">Join Advansys as a Software Engineer Intern and gain hands-on experience in a fast-paced and innovative environment. You'll work alongside experienced engineers and contribute to various software development projects, enhancing your technical skills while learning about real-world applications.</p>
                <div className="mt-10 ml-auto flex justify-center items-center">
                <Link className="bg-black font-semibold text-white rounded text-[14px] py-2 px-4 h-9 hover:bg-neutral-900 flex justify-center items-center"><SquareArrowOutUpRight className="mr-2" size={15} />Apply</Link>
                <Button className="mx-2 rounded" variant={"dark"}><Bookmark /></Button>
                <Button onClick={handleCopyToClipboard} className="bg-white font-semibold text-black border rounded text-[14px] py-2 px-4 h-9 hover:bg-neutral-50 flex justify-center items-center transition cursor-pointer">{isCopied?<Check />:<Link2 />}</Button>
                </div>
                
                </div>
            </DialogContent>
        </Dialog >
        </>
    )
}
export default JobCard;