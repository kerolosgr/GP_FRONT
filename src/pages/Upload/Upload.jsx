import { useState } from "react";
import VerifyOTP from "../VerifyOTP/VerifyOTP";
import Info from "./components/Info";
import ResumeUpload from "./components/Resumeupload";
import axios from "axios";
import UploadingMessage from "./UploadingMessage";


const Upload = ()=>{
    // const [userId,setuserIdparent] = useState("");
    const [verifyStep,setVerifyStep] = useState(false);
    const [OTPQR_URL,setOTPQR_URL] = useState("");
    const [isLogging,setIsLogging] = useState(false);
    const [idToLogin,setidToLogin] = useState(localStorage.getItem("idToLogin"));
    const [viewOTP,setviewOTP] = useState(false);
    const [isUploading,setisUploading] = useState(false);
    // console.log(isUploading);
    if(verifyStep){
        try{
            if(idToLogin!=null){
                axios.post('https://lin.kerolos-safwat.me/api/v1/user/setup-qrcode',{id:idToLogin}).then(
                (res) => {
                    // console.log(res.data);
                    setOTPQR_URL(res.data.data);
                }
            )
            }
        }
        catch(err){
            // console.log("error hena");
        }
    }
    if(viewOTP || idToLogin) return(<VerifyOTP setisUploading={setisUploading} setVerifyStep={setVerifyStep} idToLogin={idToLogin} setidToLogin={setidToLogin} isLogging={isLogging} OTPQR_URL={OTPQR_URL}/>);
    if(isUploading){return <UploadingMessage/>}
    return(
        <>
        <Info/>
        <ResumeUpload setisUploading={setisUploading} setidToLogin={setidToLogin} viewOTP={viewOTP} setviewOTP={setviewOTP} verifyStep={verifyStep} setVerifyStep={setVerifyStep} setIsLogging={setIsLogging}/>
        </>
    )
}
export default Upload;