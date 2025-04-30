import { useQuery } from "@tanstack/react-query";
import PaperCard from "./PaperCard";
import PaperCardSkeleton from "./PaperCardSkeleton";
import axios from "axios";

const Papers = ()=>{
    const fetchPapers = async ()=>{
        const res = await axios.get("https://api.kerolos-safwat.me/api/v1/paperswithcode");
        return res.data;
    };
    const {data,isLoading,error}=useQuery({
        queryKey:["papers"],
        queryFn: fetchPapers
    });
    if(error){
        return <div>Error fetching papers: {error.message}</div>
    }
    return(
        <>
        <div className="w-full h-full p-4 bg-neutral-50 rounded-xl flex flex-col items-start justify-start overflow-scroll overflow-x-hidden">
            <h2 className="text-3xl font-semibold ml-4">Papers</h2>
            <div className="w-full flex justify-start items-center gap-3 flex-wrap h-fit p-2 mt-4 overflow-y-auto">
                {
                isLoading ? 
                Array.from({length:6}).map(
                    (i,_)=> <PaperCardSkeleton key={_}/>
                )
                :
                data.data.map(
                    (paper)=> <PaperCard key={paper.url} url={paper.url} title={paper.title} author={paper.author} date={paper.date}/>
                )}
            </div>
        </div>
        </>
    )
}
export default Papers;