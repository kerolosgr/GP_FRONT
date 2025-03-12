const Final = ()=>{
    return(
        <div className={`w-full h-full p-4 flex flex-col items-center justify-start text-gray-800 transition-opacity ease-in-out duration-1000`}>
            <img className="w-[300px]" src="/assets/happy.webp" alt="lamp"/>
            <h5 className="w-full font-semibold mb-4">Thank You for Your Patience</h5>
            <h5 className="w-full font-semibold mb-2 text-[14px]">
            Your resume has been successfully processed! We’ve analyzed it and are excited to share the results with you. Check your dashboard for personalized insights, job recommendations, and more!
            </h5>
        </div>
    )
}
export default Final;