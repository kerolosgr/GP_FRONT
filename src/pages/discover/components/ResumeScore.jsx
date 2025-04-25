import { useState } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ResumeScore = ({score})=>{
    const [percentage,setpercentage]=useState(0);
    setTimeout(()=>{setpercentage(score)},100);


    return(
        <div className="w-full flex flex-col justify-start items-center md:w-[400px] md:mx-4 md:mt-0 mt-2 h-full bg-neutral-50 shadow-xl rounded-xl py-[25px] px-2 overflow-auto">
                    <h2 className="text font-semibold">Your Resume Score</h2>
                    <CircularProgressbar className='w-[150px] h-[150px] my-2' minValue={0} maxValue={100} value={percentage} text={`${percentage}%`} styles={buildStyles({rotation: 0.5})} />
                    <div className='w-full p-2 text-center'>                    
                    <p className='font-semibold'>What This Score Means</p>
                    <p className='text-[12px]'>Your resume is on the right track! Based on our analysis, your CV meets most of the essential standards for professionalism, structure, and content. However, there are still areas where improvements can significantly increase your chances of landing interviews.</p>
                    </div>
                    <div className='w-full p-2 text-center'>                    
                    <p className='font-semibold'>✅What You Did Well</p>
                    <ul style={{listStyleType:"disc"}} className='text-[12px] text-left p-4'>
                        <li>Clear formatting: Your layout is organized and easy to read.</li>
                        <li>Education & Experience included: You’ve covered the core resume sections.</li>
                        <li>Keyword usage: You’ve included some relevant industry terms.</li>
                    </ul>
                    </div>
                    <div className='w-full p-2 text-center'>                    
                    <p className='font-semibold'>⚠️ Areas to Improve</p>
                    <ul style={{listStyleType:"disc"}} className='text-[12px] text-left p-4'>
                        <li>Missing summary section: A brief professional summary at the top helps recruiters get a quick overview.</li>
                        <li>Not enough action verbs: Start bullet points with powerful verbs like "Led," "Developed," or "Managed."</li>
                        {/* <li>Low keyword match: Your CV is missing several role-specific keywords. Tailoring it to the job description helps you pass ATS (Applicant Tracking Systems).</li> */}
                    </ul>
                    </div>
                </div>
    )
}
export default ResumeScore;