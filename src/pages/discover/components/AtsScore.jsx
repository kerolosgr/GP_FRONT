import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Info, Loader2 } from "lucide-react";
import { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const AtsScore = ()=>{
    const [skills,setSkills] =useState('');
    const [requirements,setRequirements]=useState('');
    const [loading,setLoading]=useState(false);
    const [finish,setFinish] = useState(false);
    const [showDetails,setShowDetails]=useState(false);

    const getScore = ()=>{
        setLoading(true);
        setTimeout(
            ()=>{
                setLoading(false);
                setFinish(true);
            },
            1000
        )
    }


    return(
        <>
         <div className="flex flex-col justify-start items-start col-span-1 h-fit md:aspect-square bg-[#f8f7ef]/85 px-[30px] pt-[20px] md:pt-[40px] pb-[20px] md:pb-[20px] rounded-[30px] md:rounded-[50px] shadow overflow-hidden relative">
                <h2 className="text-black text-[22px] font-light">ATS Score</h2>
                <p>Calculate Your ATS Score</p>
                {finish?
                <>
                <div className="w-full h-fit flex justify-center items-center my-4">
                <CircularProgressbar className='w-[140px] h-[140px] aspect-square my-2' minValue={0} maxValue={100} value={80} text={`${80}%`} styles={buildStyles({rotation: 0.5 , pathColor: `rgba(255, 216, 96, 1`,textColor: '#706f6e',trailColor: 'transparent',pathTransitionDuration: 0.5,})} />
                </div>
                <div className="flex items-center justify-center w-full">
                <p className="text-black text-[14px] text-center px-4">Your Resume Scored 80%</p>
                <Button onClick={()=>setShowDetails(true)} className="rounded-full"><Info/></Button>
                </div>
                </>
                :
                loading
                ?
                <>
                <Loader2 size={54} className="mx-auto mt-10 animate-spin"/>
                </>
                :
                <>
                <Input onChange={(e)=>{setRequirements(e.target.value)}} placeholder="Job Requirements" className="bg-white mt-2 w-full"/>
                <Input onChange={(e)=>{setSkills(e.target.value)}} placeholder="Your Skills" className="bg-white my-1 w-full"/>
                <Button onClick={getScore} className="ml-auto my-2">Calculte</Button>
                </>
                }
                </div>
                <Dialog open={showDetails} onOpenChange={setShowDetails}>
                    <DialogContent>
                    <p>ATS Score Details</p>
                    </DialogContent>
                </Dialog>
        </>
    )
}
export default AtsScore;