import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import Cookies from "js-cookie";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const VerifyOTP = ({OTPQR_URL,isLogging,setidToLogin,idToLogin,setVerifyStep})=>{
    const [code, setCode] = useState("");
    const [wrongOTP,setwrongOTP] = useState(false);
    const navigate = useNavigate();
    const verifyOtp = async()=>{
      // console.log(localStorage.getItem('userId'));
      
        try{
            await axios.post('https://lin.kerolos-safwat.me/api/v1/user/validate',{
            code:code,
            id: idToLogin
        }).then(
            res=>{
                setwrongOTP(false);
                console.log(res.data);
                console.log(res.data.data.userId);
                console.log(res.data.data.token);
                Cookies.set("devtoken",res.data.data.token);
                localStorage.setItem("userId",res.data.data.userId);
                navigate('/discover/'+localStorage.getItem("userId"));
            }
        )
        }catch(err){
            if(err.response?.status==401){
                setwrongOTP(true);
            }
            if(err.response?.status==400){
                setwrongOTP(true);
                toast("User Not Found");
            }
        }
    }
    return(
        <>
        <div className="flex justify-center items-center w-full h-[calc(100vh-100px)] bg-neutral-100 mx-auto rounded">
        <div className="flex flex-col justify-start p-[20px] items-center w-[80%] h-[500px] bg-white rounded-xl">
            <div className="flex items-center">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width={50}
  height={50}
>
  <path
    fill="#1A73E8"
    d="M440,255.99997v0.00006C440,273.12085,426.12085,287,409.00003,287H302l-46-93.01001l49.6507-85.9951  
    c8.56021-14.82629,27.51834-19.9065,42.34518-11.34724l0.00586,0.0034c14.82776,8.55979,19.90875,27.51928,11.34857,42.34682  
    L309.70001,225h99.30002C426.12085,225,440,238.87917,440,255.99997z"
  />
  <path
    fill="#EA4335"
    d="M348.00174,415.34897l-0.00586,0.00339c-14.82684,8.55927-33.78497,3.47903-42.34518-11.34723L256,318.01001  
    l-49.65065,85.99509c-8.5602,14.82629-27.51834,19.90652-42.34517,11.34729l-0.00591-0.00342  
    c-14.82777-8.55978-19.90875-27.51929-11.34859-42.34683L202.29999,287L256,285l53.70001,2l49.6503,86.00214  
    C367.91049,387.82968,362.8295,406.78918,348.00174,415.34897z"
  />
  <path
    fill="#FBBC04"
    d="M256,193.98999L242,232l-39.70001-7l-49.6503-86.00212  
    c-8.56017-14.82755-3.47919-33.78705,11.34859-42.34684l0.00591-0.00341c14.82683-8.55925,33.78497-3.47903,42.34517,11.34726  
    L256,193.98999z"
  />
  <path
    fill="#34A853"
    d="M248,225l-36,62H102.99997C85.87916,287,72,273.12085,72,256.00003v-0.00006  
    C72,238.87917,85.87916,225,102.99997,225H248z"
  />
  <polygon
    fill="#185DB7"
    points="309.70001,287 202.29999,287 256,193.98999"
  />
</svg>
            <h2 className="text-xl font-bold">Secure Your Account with Google Authenticator</h2>
            </div>
            <div className={"w-full flex items-center my-4 "+cn(isLogging==true || OTPQR_URL==""?"justify-center":"justify-between")}>
              {
                (isLogging==true || OTPQR_URL=="")?
                null
                :
                <div className="w-[30%] flex justify-center items-center">
                <Avatar>
                <AvatarImage className="w-[300px] h-[300px]" src={OTPQR_URL} />
                <AvatarFallback><div className="flex justify-center items-center w-[300px] h-[300px]"><Loader className="animate-spin" size={50}/></div></AvatarFallback>
                </Avatar>
                {/* <img className="w-[300px] h-[300px]" src="https://api.qrserver.com/v1/create-qr-code/?data=otpauth%3A%2F%2Ftotp%2FDevPal%3Aabdelrahmanmousa244%40gmail.com%3Fsecret%3D54L7BKJBKBVOV6EA%26issuer%3DDevPal%26algorithm%3DSHA1%26digits%3D6%26period%3D30&size=200x200&ecc=M&margin=0" alt="google logo" /> */}
                </div>
              }
                
                
                <div className={"w-[60%] flex flex-col justify-start text-left "+cn(isLogging==true || OTPQR_URL==""?"items-center text-left w-full":"items-start")}>
                  {
                    (isLogging==true || OTPQR_URL=="" )?
                    <>
                    <p className="text-[15px]">Welcome back! For your security, two-factor authentication (2FA) is required to log in.</p>
                    <p className="font-semibold">1. Open Google Authenticator</p>
                    <p className="text-[15px] text-neutral-700">Launch the Google Authenticator app on your device.</p>
                    <p className="font-semibold">2. Get Your 6-Digit Code</p>
                    <p className="text-[15px] text-neutral-700">Find the 6-digit code for your account — it refreshes every 30 seconds.</p>
                    <p className="font-semibold">3. Enter the Code Below</p>
                    <p className="text-[15px] text-neutral-700">Type the current code here to complete your login.</p>

                    </>
                    :
                    <>
                    <p className="text-[15px]">For your security, our website uses two-factor authentication (2FA). Follow these quick steps to log in:</p>
                    <p className="font-semibold">1. Scan the QR Code</p>
                    <p className="text-[15px] text-neutral-700">Open the Google Authenticator app (install it if needed), and scan the QR code shown on the left.</p>
                    <p className="font-semibold">2. Get Your Code</p>
                    <p className="text-[15px] text-neutral-700">After scanning, the app will show a 6-digit code that refreshes every 30 seconds.</p>
                    <p className="font-semibold">3. Enter the Code to Log In</p>
                    <p className="text-[15px] text-neutral-700">Enter the code here to complete your login. Use Google Authenticator each time you log in.</p>
                    </>
                  }
                
                <div className="flex justify-center items-center mt-4">
                <InputOTP maxLength={6} value={code} autoFocus
                onChange={(value) => setCode(value)}>
                <InputOTPGroup className={"border-red shadow-red-600"}>
                    <InputOTPSlot className={"text-[32px] p-[30px] "+cn(wrongOTP?"border-red-500":null)} index={0} />
                    <InputOTPSlot className={"text-[32px] p-[30px] "+cn(wrongOTP?"border-red-500":null)} index={1} />
                    <InputOTPSlot className={"text-[32px] p-[30px] "+cn(wrongOTP?"border-red-500":null)} index={2} />
                    <InputOTPSlot className={"text-[32px] p-[30px] "+cn(wrongOTP?"border-red-500":null)} index={3} />
                    <InputOTPSlot className={"text-[32px] p-[30px] "+cn(wrongOTP?"border-red-500":null)} index={4} />
                    <InputOTPSlot className={"text-[32px] p-[30px] "+cn(wrongOTP?"border-red-500":null)} index={5} />
                </InputOTPGroup>
                </InputOTP>
                <Button onClick={()=>verifyOtp()} className="ml-[20px]" size={"lg"}>Verify</Button>
                <Button onClick={()=>{localStorage.removeItem('idToLogin');setidToLogin(null);setVerifyStep(false);}} className={"ml-[20px]"} size={"lg"} variant={"outline"}>Cancel</Button>
                </div>
                {wrongOTP?<p className="text-red-500 text-[15px] mt-2 font-semibold">The code you entered is incorrect</p>:null}
                </div>
                  
            </div>

        </div>
        </div>
        </>
    )
}
export default VerifyOTP;