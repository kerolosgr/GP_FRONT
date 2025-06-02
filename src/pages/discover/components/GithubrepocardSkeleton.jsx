import { Skeleton } from "@/components/ui/skeleton";

const GithubrepocardSkeleton = ()=>{
    return(
        <div className="w-full md:w-[430px] h-[170px] md:h-[150px] p-4 flex flex-col md:flex-row flex-shrink-0 justify-start items-start rounded-lg border border-gray-300">
            <div className="flex flex-col justify-start items-start w-[70%] h-full">
            <Skeleton className="w-[70%] h-[20px]"/>
            <span className="w-full flex items-center mt-2 gap-1.5">
                <Skeleton className="w-[15px] h-[15px] rounded-[50%]"/>
                <Skeleton className="w-[40%] h-[15px]"/>
            </span>
            <Skeleton className="mt-auto w-[80%] h-[15px]"/>
            </div>
            <div className="flex flex-col justify-start items-start w-[30%] h-full">
                <Skeleton className={"mt-auto ml-auto w-[100%] h-[35px]"}/>
            </div>
        </div>
    )
}
export default GithubrepocardSkeleton;