import { Button } from "@/components/ui/button";
import { DialogHeader ,Dialog, DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ResumeUpload = ()=>{
    const [IsEnterCodeOpened,setIsEnterCodeOpened] = useState(false);
    const [code,setcode]=useState("");
    const navigate = useNavigate();
    return(
        <>
        <div className="flex justify-evenly items-center py-4">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold my-6">Step 1: Upload Your Resume</h1>
        <label  className="flex flex-col justify-center items-center border-dashed border-2 border-gray-500 bg-neutral-50 w-[500px] h-[250px] rounded-lg cursor-pointer hover:bg-white transition duration-400" htmlFor="resume">
        {/* <CloudUpload size={50} /> */}
        <img src="/assets/file.webp" width={100} height={100} />
        <span className="text-gray-700 text-center">Drag and drop your resume here or click to browse</span>
        </label>
        <input className="hidden" type="file" id="resume" name="resume"/>
        <h5 className="my-4">Already Uploaded Your Resume ? <Button onClick={()=>setIsEnterCodeOpened(!IsEnterCodeOpened)} variant={"dark"}>Enter Your Code</Button></h5>
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
        </>
    )
}
export default ResumeUpload;