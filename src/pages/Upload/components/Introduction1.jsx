const Introduction1 = ({className})=>{
    return(
        <div className={`w-full h-full p-4 flex flex-col items-center justify-start text-gray-800 transition-opacity ease-in-out duration-1000 ${className}`}>
            <img className="w-[300px]" src="/assets/lamp.webp" alt="lamp"/>
            <h5 className="w-full font-semibold mb-2">Welcome to DevPal!</h5>
            <h5 className="w-full font-semibold mb-2">We’re excited to help you take the next step in your career. While we process your resume, we’ll provide some useful tips and advice to help you stand out in the job market. Let’s get started with some general resume tips!</h5>
            <h5 className="w-full font-semibold">Tip: Your resume is the first impression you make on recruiters. Keep it concise, clear, and tailored to the job you're applying for.</h5>
        </div>
    )
}
export default Introduction1;