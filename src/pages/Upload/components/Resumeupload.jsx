import { Button } from "@/components/ui/button";
import { DialogHeader ,Dialog, DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Introduction1 from "./Introduction1";
import Introduction2 from "./Introduction2";
import Introduction3 from "./Introduction3";
import Final from "./Final";
import Introduction4 from "./Introduction4";
import Introduction5 from "./Introduction5";
import Introduction6 from "./Introduction6";
import axios from "axios";
import { UserIdContext } from "@/components/context/UserIdContext";
const ResumeUpload = ()=>{
    const [IsEnterCodeOpened,setIsEnterCodeOpened] = useState(false);
    const [code,setcode]=useState("");
    const navigate = useNavigate();
    const [isUploading,setisUploading] = useState(false);
    const [Introduction,setIntroduction] = useState(1);
    const [Transition,setTransition] = useState(false);
    const [isFinished,setisFinished] = useState(false);
    const {userId,setuserId} = useContext(UserIdContext);

    const handleNextIntroduction = ()=>{
        setTransition(true);
        
        setTimeout(
            ()=>{
                if(isFinished){
                    Introduction!=7?setIntroduction(7):navigate('/discover/'+userId);
                }
                else {
                    if(Introduction != 6){
                        setIntroduction(Introduction+1);
                    }
                }
                setTransition(false);
            }
            ,500
        )
    }

    const handleUploadFile= (e)=>{
        const file = e.target.files[0];
        if(file.type === "application/pdf"){
            setisUploading(true);
            const form = new FormData;
            form.append('resume', file);
            console.log(form);
            axios.post('http://web.kerolos-safwat.me/nlp/',form).then((res)=>{
                console.log(res);
                // setisUploading(false);
                setisFinished(true);
                setuserId((res.data.email));
            })
        }
        else{
            toast("Wrong File Format, Please try again using pdf file");
        }
    }

    return(
        <>
        <div className="flex justify-evenly items-center py-4">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold my-6">Step 1: Upload Your Resume</h1>
        <label  className="flex flex-col justify-center items-center border-dashed border-2 border-gray-500 bg-neutral-50 w-[500px] h-[250px] rounded-lg cursor-pointer hover:bg-white transition duration-400" htmlFor="resume">
        {/* <CloudUpload size={50} /> */}
        <img src="/assets/file.webp" width={100} height={100} />
        <span className="text-gray-700 text-center">Drag and drop your resume here or click to browse <p className="text-[12px]">Make Sure your resume is in pdf format</p></span>
        </label>
        <input className="hidden" type="file" id="resume" name="resume" onChange={handleUploadFile}/>
        <h5 className="my-4">Already Uploaded Your Resume ? <Button className={"ml-2"} onClick={()=>setIsEnterCodeOpened(!IsEnterCodeOpened)} variant={"dark"}>Enter Your Code</Button></h5>
        </div>
        <img src="/assets/laptop.webp" width={500} height={500}/>
        </div>
        <Dialog open={IsEnterCodeOpened} onOpenChange={setIsEnterCodeOpened}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Enter Your Code</DialogTitle>
            <DialogDescription>
            Enter your code to access your personalized recommendations.
            </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center">
            {/* <Input className="w-[40%]" type={"text"}/> */}
            <InputOTP maxLength={6} value={code}
        onChange={(value) => setcode(value)}>
        <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
        </InputOTPGroup>
        </InputOTP>
            <Button onClick={()=>{code.length==6?navigate("/discover/"+code):null}} className={"mx-4"} variant={"dark"}>Submit</Button>
            </div>
        </DialogContent>
        </Dialog>

        <Dialog open={isUploading}>
        <DialogContent className="min-w-[800px] h-[98vh] flex flex-col">
            <DialogHeader>
            <DialogTitle>Uploading And Processing Your Resume</DialogTitle>
            <DialogDescription>
            Please wait while we are uploading and processing your resume.
            </DialogDescription>
            </DialogHeader>
            <div className={"flex h-full items-center justify-center"+`transition-opacity duration-500 ease-in-out ${Transition ? 'opacity-0' : 'opacity-100'}`}>
                {Introduction==1&&<Introduction1/>}
                {Introduction==2&&<Introduction2/>}
                {Introduction==3&&<Introduction3/>}
                {Introduction==4&&<Introduction4/>}
                {Introduction==5&&<Introduction5/>}
                {Introduction==6&&<Introduction6/>}
                {Introduction==7&&<Final/>}
            {/* <img className={`absolute left-0 top-0 transition ease-in-out duration-10000 ${uploadingTransition?"opacity-100":"opacity-0"}`} src="/assets/person-1.webp"/>
            <img className={`absolute left-0 top-0 transition ease-in-out duration-30000  ${uploadingTransition?"opacity-100":"opacity-0"}`} src="/assets/person-2.webp"/>
            <img className={`absolute left-0 top-0 transition ease-in-out duration-50000  ${uploadingTransition?"opacity-100":"opacity-0"}`} src="/assets/person-3.webp"/> */}
            </div>
            <Button disabled={Introduction==6&&!isFinished} onClick={handleNextIntroduction} variant={"dark"} className={"w-[200px] self-end"}>{Introduction==7 ?"Go To Dashboard":"Next"}</Button>
        </DialogContent>
        </Dialog>
        </>
    )
}
export default ResumeUpload;