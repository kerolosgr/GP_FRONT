import LoadingResume from "./components/LoadingResume";

const UploadingMessage = ()=>{
    return(
        <div className="w-full h-[calc(100vh-100px)] bg-[radial-gradient(ellipse_at_top_left,_#e3e5e6,_#efe8c1,_#f3e7cb)] flex flex-col justify-center items-center">
            <div className="w-[80%] h-fit bg-white py-[80px] px-4 rounded-xl shadow">
                <h2 className="text-center font-semibold">Uploading And Processing Your Resume</h2>
                <LoadingResume/>
            </div>
            
        </div>
    )
}
export default UploadingMessage;