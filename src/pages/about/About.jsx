import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const About = ()=>{
    
    return(
        <div className="w-full min-h-[100vh] flex flex-col items-center py-[100px] px-[50px]">
            <h3 className="font-semibold text-[28px]">DevPal</h3>
            <h3 className="font-light text-center text-[32px]">Empowering Careers with <br/><span className="text-neutral-500">Intelligence and Precision</span></h3>
            
            {/* <p className="m-[50px] "> </p> */}
            <div className="grid grid-cols-2 w-full gap-4 my-[50px]">
            <img className="col-span-1 w-full rounded-4xl shadow-xl" src="https://sdmntpritalynorth.oaiusercontent.com/files/00000000-03b8-6246-a01c-58ba400d59ac/raw?se=2025-06-11T03%3A16%3A32Z&sp=r&sv=2024-08-04&sr=b&scid=655a8f9e-d0f9-5c11-98e5-389bdcb3d755&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-10T21%3A01%3A50Z&ske=2025-06-11T21%3A01%3A50Z&sks=b&skv=2024-08-04&sig=n5kp61EumuK01m4GOh4zsJ5IPw6g7yt/jV%2BbfieTMBs%3D" alt=""/>
            <h2 className="col-span-1 font-light text-[22px] p-2 text-neutral-700 self-start text-left">At DevPal, we use AI to help you grow smarter and faster in your career. <br/> Whether you're a student, graduate, or professional, <br/> DevPal understands your resume and gives you everything you need to <br/> move forward—with clarity and confidence</h2>
            </div>
            
        </div>
    )
}
export default About;