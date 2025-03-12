const Introduction2 = ({className})=>{
    return(
        <div className={`w-full h-full p-4 flex flex-col items-center justify-start text-gray-800 transition-opacity ease-in-out duration-1000 ${className}`}>
            <img className="w-[300px]" src="/assets/craft.webp" alt="lamp"/>
            <h5 className="w-full font-semibold mb-4">Crafting the Perfect Resume</h5>
            <h5 className="w-full font-semibold mb-2 text-[14px]">
            Your resume is your professional story. Here are some quick tips to ensure it makes an impact:
            <ul className="list-disc my-2">
                <li>Keep it concise: Aim for 1-2 pages. Focus on your most relevant experience.</li>
                <li>Tailor it to the job: Use keywords and skills from the job description to match your resume.</li>
                <li>Use a clear format: Include sections like Contact Info, Summary, Skills, Experience, Education, and Certifications.</li>
                <li>Highlight achievements: Showcase measurable results (e.g., “Increased sales by 20%”).</li>
            </ul>
            </h5>
            <h5 className="w-full font-semibold">Did you know?
            Recruiters spend just 6-7 seconds reviewing each resume, so make sure the most important information stands out!</h5>
        </div>
    )
}
export default Introduction2;