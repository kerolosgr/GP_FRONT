import { Skeleton } from "@/components/ui/skeleton";

const PaperCardSkeleton = ()=>{
    return(
        <div className="flex flex-col justify-start items-start w-full md:w-[330px] min-h-[200px] p-4 rounded-xl border-2 hover:shadow transition duration-200 ease-in-out">
            <Skeleton className="w-[100%] h-[18px] rounded"></Skeleton>
            <Skeleton className="w-[100%] h-[18px] rounded my-2"></Skeleton>
            <Skeleton className="w-[100%] h-[18px] rounded"></Skeleton>
            <Skeleton className="w-[40%] h-[20px] rounded my-2"/>
            <Skeleton className="w-[100%] h-[18px] rounded"></Skeleton>
            <Skeleton className="w-[100%] h-[18px] rounded my-1"></Skeleton>
        </div>
    )
}
export default PaperCardSkeleton;