import { useState } from "react";
import VerifyOTP from "../VerifyOTP/VerifyOTP";
import Info from "./components/Info";
import ResumeUpload from "./components/Resumeupload";
import axios from "axios";


const Upload = ()=>{
    const [userId,setuserIdparent] = useState("");
    const [verifyStep,setVerifyStep] = useState(false);
    const [OTPQR_URL,setOTPQR_URL] = useState("");
    if(verifyStep){
        try{
            if(userId!=null){
                axios.post('https://lin.kerolos-safwat.me/api/v1/user/setup-qrcode',{id:userId}).then(
                (res) => {
                    console.log(res.data);
                    setOTPQR_URL(res.data.data);
                    setVerifyStep(true);
                }
            )
            }
        }
        catch(err){
            console.log(err);
        }
    }
    if(verifyStep) return(<VerifyOTP OTPQR_URL={OTPQR_URL}/>)
    return(
        <>
        <Info/>
        <ResumeUpload setuserIdparent={setuserIdparent} setVerifyStep={setVerifyStep}/>
        </>
    )
}
export default Upload;