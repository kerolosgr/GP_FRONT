import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Info, Loader2 } from "lucide-react";
import { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { toast } from "sonner";

const AtsScore = ()=>{
    const [skills,setSkills] =useState('');
    const [requirements,setRequirements]=useState('');
    const [loading,setLoading]=useState(false);
    const [finish,setFinish] = useState(false);
    const [showDetails,setShowDetails]=useState(false);
    const [recievedData,setRecievedData]=useState({});
    const form = new FormData;

    const getScore = async()=>{
        form.append("job_description",requirements)
        setLoading(true);
        try{
        const res = await axios.post('https://approximately-euro-phillips-processed.trycloudflare.com/evaluate',form);
        setRecievedData(res.data)
        console.log(res.data);
        setLoading(false);
        setFinish(true);
        }
        catch(err){
            setLoading(false);
            toast('Sorry , Error Occured');
        }
        // setTimeout(
        //     ()=>{
        //         setLoading(false);
        //         setFinish(true);
        //     },
        //     1000
        // )

    };

    const onChangeResume = (e)=>{
        const file = e.target.files[0];
        form.append("cv_file",file);
        console.log(file)
    };


    return(
        <>
         <div className="flex flex-col justify-start items-start col-span-1 h-fit md:aspect-square bg-[#f8f7ef]/85 px-[30px] pt-[20px] md:pt-[40px] pb-[20px] md:pb-[20px] rounded-[30px] md:rounded-[50px] shadow overflow-hidden relative">
                <h2 className="text-black text-[22px] font-light">ATS Score</h2>
                <p>Calculate Your ATS Score</p>
                {finish?
                <>
                <div className="w-full h-fit flex justify-center items-center my-4">
                <CircularProgressbar className='w-[140px] h-[140px] aspect-square my-2' minValue={0} maxValue={100} value={Math.ceil(recievedData.ats_score)} text={`${Math.ceil(recievedData.ats_score)}%`} styles={buildStyles({rotation: 0.5 , pathColor: `rgba(255, 216, 96, 1`,textColor: '#706f6e',trailColor: 'transparent',pathTransitionDuration: 0.5,})} />
                </div>
                <div className="flex items-center justify-center w-full">
                <p className="text-black text-[14px] text-center px-4">Your Resume Scored {(recievedData.ats_score).ceil}%</p>
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
                {/* <Input onChange={(e)=>{setSkills(e.target.value)}} placeholder="Your Skills" className="bg-white my-1 w-full"/> */}
                <Input onChange={onChangeResume} name="cv_file" type="file" className="my-2 bg-white"/>
                <Button onClick={getScore} className="ml-auto my-2">Calculte</Button>
                </>
                }
                </div>
                <Dialog open={showDetails} onOpenChange={setShowDetails}>
                    <DialogContent className="min-w-[70%] p-[50px]">
                    <p>ATS Score Details</p>
                    <p>Your ATS Score : {Math.ceil(recievedData.ats_score)}</p>
                    <p>Education Match : {recievedData.education_match}</p>
                    <p>Experience Match : {recievedData.experience_match}</p>
                    <p className="font-semibold" >FeedBack : {recievedData.feedback}</p>
                    <p>Resume Entities : {recievedData?.resume_entities?.skills?.join(' , ')}</p>
                    <p>Missing Skills : {recievedData?.missing_skills?.length < 1 ? "None" : recievedData?.missing_skills?.join(' - ') }</p>
                    <p>Similarity : {Math.ceil(recievedData.semantic_similarity)}</p>
                    </DialogContent>
                </Dialog>
        </>
    )
}
export default AtsScore;