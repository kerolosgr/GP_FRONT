import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ResumeCreate = ()=>{
    const form = new FormData;
    const [loading,setLoading]=useState(false);
    const [result,setResult]=useState(false);
    const [generatedResume,setGeneratedResume] = useState({});

    const generateResume = async()=>{
        setLoading(true);
        try{
            const res = await axios.post('https://justify-ricky-textbooks-qt.trycloudflare.com/resume-to-pdf',form);
            setGeneratedResume(res.data);
            console.log(res.data);
            setResult(true);
            setLoading(false);
        }
        catch (err){
            toast.error('error occured');
            setLoading(false);
            setResult(false);
        }
       
    }

    const onChangeResume = (e)=>{
        const file = e.target.files[0];
        form.append("file",file);
    };
    return(
        <>
        <div className="flex col-start-4 flex-col md:col-span-2 h-fit py-4 bg-[#f8f7ef]/85 px-[30px] pt-[20px] md:pt-[40px] pb-[20px] md:pb-[20px] rounded-[30px] md:rounded-[50px] shadow overflow-hidden relative">
                <h2 className="text-black text-[22px] font-light">Generate Resume using AI</h2>

{
    loading?
    <Loader2 size={54} className="mx-auto mt-10 animate-spin"/>
    :
    result?
    <>
    <p className="my-2">Resume Created Successfully</p>
    <a className="ml-auto" href={generatedResume.pdf_url} target="_blank"><Button className="ml-auto my-2">View</Button></a>
    </>
    :
    <>
    <p className="my-2">Upload Your Resume To Generate</p>
                <Input onChange={onChangeResume} name="cv_file" type="file" className="my-2 bg-white"/>
                <Button onClick={generateResume} className="ml-auto my-2">Generate</Button>
                </>
}
        </div>
        </>
    )
}
export default ResumeCreate;