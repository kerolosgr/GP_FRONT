const Info = ()=>{
    return(
        <div className="flex flex-col justify-start items-center py-[50px] w-full h-[calc(90vh-100px)] bg-neutral-100">
            
            <h1 className="text-3xl font-bold ">Getting Started</h1>
            <p className="text-[18px] my-[10px] font-semibold">Here's how it works</p>
            
            <img className="my-5" src="/assets/find-3d.png" width={400} height={400}/>
            
            <div className="relative w-[60%] flex justify-center">
                <span className="block w-full h-[2px] bg-black"></span>
                <span className="bg-black text-white absolute top-1/2 left-0 transform text-[12px] -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full">1</span>
                <span className="bg-black text-white absolute top-1/2 left-1/2 transform text-[12px] -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full">2</span>
                <span className="bg-black text-white absolute top-1/2 right-0 transform text-[12px] -translate-x-0 -translate-y-1/2 px-3 py-1 rounded-full">3</span>
            </div>
            <div className="w-[65%] grid grid-cols-3 mt-[20px] font-semibold">
                <h4 className="col-span-1 text-left">Upload Your Resume</h4>
                <h4 className="col-span-1 text-center">We Find The Best For You</h4>
                <h4 className="col-span-1 text-right">Recieve Tailored Recommendations</h4>
            </div>
        </div>
    )
}
export default Info;