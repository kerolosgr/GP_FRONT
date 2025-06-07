import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { CircleHelp, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Questions = ()=>{
    const [loading,setLoading]=useState(false);
    const [questions,setQuestions]=useState({question:"hello , this is a question"});
    const [result,setResult]=useState(false);
    const [query,setQuery]=useState('');

    const getQuestions = async ()=>{
        setLoading(true);
        try{
            const res = await axios.post('https://ahmedg120-interview-q-generator.hf.space/generate',{description:query});
            // console.log(res.data.questions);
            setQuestions(res.data.questions);
            setResult(true);
            setLoading(false);
        }
        catch(err){
            setLoading(false);
            toast('Sorry Error Occured , Try Again Later');
        }
    };

    return(
        <div className="flex flex-col col-span-1 md:col-span-2 h-fit py-4 bg-[#f8f7ef]/85 px-[30px] pt-[20px] md:pt-[40px] pb-[20px] md:pb-[20px] rounded-[30px] md:rounded-[50px] shadow overflow-hidden relative">
                <h2 className="text-black text-[22px] font-light">Suggested Interview Questions</h2>
                <p className="my-2">Get Some Interview Questions</p>
                {
                    result?
                    questions?.map(
                        (question)=> <span className="flex items-center my-1"><CircleHelp className="mr-2"/><p className="font-light">{question}</p></span>
                    )
                    :
                        loading?
                        <Loader2 size={54} className="mx-auto mt-10 animate-spin"/>
                        :
                        <>
                        <Input onChange={(e)=>setQuery(e.target.value)} className="mt-2 bg-white w-full" type="text" placeholder="Job Title" />
                        <Button onClick={getQuestions} className="mt-4 w-fit ml-auto">Get Questions</Button>
                        </>
                }
        </div>
    )
}
export default Questions;