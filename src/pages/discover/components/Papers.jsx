import PaperCard from "./PaperCard";

const Papers = ()=>{
    return(
        <>
        <div className="w-full h-full p-4 bg-neutral-50 rounded-xl flex flex-col items-start justify-start overflow-scroll overflow-x-hidden">
            <h2 className="text-3xl font-semibold ml-4">Papers</h2>
            <div className="w-full flex justify-start items-center gap-3 flex-wrap h-fit p-2 mt-4 overflow-y-auto">
                {Array.from({length:6}).map(
                    ()=> <PaperCard/>
                )}
            </div>
        </div>
        </>
    )
}
export default Papers;