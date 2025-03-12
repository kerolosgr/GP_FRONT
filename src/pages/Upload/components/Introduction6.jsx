const Introduction6 = ({className})=>{
    return(
        <div className={`w-full h-full p-4 flex flex-col items-center justify-start text-gray-800 transition-opacity ease-in-out duration-1000 ${className}`}>
            <img className="w-[300px]" src="/assets/time.webp" alt="lamp"/>
            <h5 className="w-full font-semibold mb-4">Sorry for the Wait!</h5>
            <h5 className="w-full font-semibold mb-2 text-[14px]">
            We're currently reviewing and processing your resume to provide you with the best possible insights and recommendations. This may take a minute, but it’ll be worth the wait!
            </h5>
            <h5 className="w-full font-semibold mb-2 text-[14px]">
            While you wait, here are a few things you can do:
            <ul className="list-disc my-2">
                <li>Take a moment to think about your career goals and the types of roles you're interested in.</li>
                <li>Review the tips and advice we've provided on improving your resume or brushing up on your interview skills.</li>
                <li>Explore your industry and the latest job trends to help you stay ahead of the game.</li>
            </ul>
            </h5>
        </div>
    )
}
export default Introduction6;