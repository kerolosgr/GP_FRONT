import { Skeleton } from "@/components/ui/skeleton";

const CoursesCardSkeleton = ()=>{
    return (
        <div className="flex flex-col justify-start items-start w-[300px] h-[350px] border border-gray-300 rounded-lg hover:shadow">
        <Skeleton className="w-full rounded-none rounded-t-lg h-[170px]"/>
        <div className="w-full px-[20px] py-[10px]">
        <Skeleton className="w-[95%] h-[20px] rounded-lg mb-1"/>
        <Skeleton className="w-[40%] h-[20px] rounded-lg mb-1"/>
        <Skeleton className="w-[50%] h-[15px] rounded-lg mb-1"/>
        <Skeleton className="w-[20%] h-[15px] rounded-lg mb-1"/>
        <Skeleton className="w-[100%] h-[15px] rounded-lg mb-1"/>
        <Skeleton className="w-[100%] h-[15px] rounded-lg mb-1"/>
        <Skeleton className="w-[35%] h-[20px] rounded-lg my-2"/>
        </div>
        </div>
    )

}
export default CoursesCardSkeleton;