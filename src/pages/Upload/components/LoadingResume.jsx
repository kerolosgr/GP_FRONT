const LoadingResume = ({className})=>{
    return(
        <div className={`w-full h-fit p-4 flex flex-col items-center justify-start text-gray-800 transition-opacity ease-in-out duration-1000 ${className}`}>
    <img className="w-[300px]" src="/assets/time.webp" alt="lamp"/>
    <h5 className="w-full font-semibold mb-2">Welcome to DevPal!</h5>
    <h5 className="w-full font-semibold mb-2">
        We're currently analyzing your resume to tailor your experience.
        This will only take a moment.
    </h5>
    <h5 className="w-full font-semibold">
        Next, you'll be redirected to verify your email using a one-time password (OTP).
        Please have your inbox ready.
    </h5>
</div>

    )
}
export default LoadingResume;