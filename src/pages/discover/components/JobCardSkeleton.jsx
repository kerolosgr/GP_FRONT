import { Skeleton } from "@/components/ui/skeleton";


const JobCardSkeleton = ()=>{
    return(
        <div className="w-full md:w-[420px] h-[300px] p-4 flex flex-col justify-start items-start border rounded-xl border-gray-300 hover:shadow transition">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[30%] md:w-auto">
                            <Skeleton className="w-full h-[25px] rounded-lg my-4"/>
                            <Skeleton className="w-full h-[15px] rounded-lg mb-1"/>
                            <Skeleton className="w-[40px] h-[15px] rounded-lg"/>
                            <Skeleton className="w-[80px] md:w-[140px] my-2 h-[25px] rounded-lg"/>
                        </div>
                        <Skeleton className="w-[110px] h-[110px] rounded-lg"/>
                    </div>
                    <div className="flex justify-start items-center my-2 gap-2 text-[14px]">
                    <Skeleton className="w-[50px] h-[15px] rounded-lg mb-1"/>
                    <Skeleton className="w-[50px] h-[15px] rounded-lg mb-1"/>
                    <Skeleton className="w-[50px] h-[15px] rounded-lg mb-1"/>
                    </div>
                    <Skeleton className="w-full h-[14px] rounded-lg mb-1"/>
                    <Skeleton className="w-full h-[14px] rounded-lg mb-1"/>
                    <Skeleton className="w-full h-[14px] rounded-lg mb-1"/>
                    <Skeleton className="w-full h-[14px] rounded-lg mb-1"/>
                    <Skeleton className="w-[150px] h-[14px] rounded-lg mb-1"/>
                </div>
    )
}
export default JobCardSkeleton;