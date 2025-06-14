import { ProfileContext } from "@/components/context/ProfileContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import ConferenceCard from "./ConferenceCard";
import PaperCardSkeleton from "./PaperCardSkeleton";

const Conference = ()=>{
const {ProfileData} = useContext(ProfileContext);

    const fetchConference = async ()=>{
        const res = await axios.get(`https://fruits-wish-deck-deposit.trycloudflare.com/scrape-conferences?category=engineering-and-technology&place=egypt`);
        console.log(res.data.conferences)
        return res.data.conferences;
    }
    const {data:conferences,isLoading,error} = useQuery({
        queryKey :['conference'],
        queryFn :fetchConference
    });

    return(
        <>
        <div className="w-full h-full p-4 bg-neutral-50 rounded-xl flex flex-col items-start justify-start overflow-scroll overflow-x-hidden">
            <h2 className="text-3xl font-semibold ml-4">Conference</h2>
            <div className="w-full flex justify-start items-center gap-3 flex-wrap h-fit p-2 mt-4 overflow-y-auto">
                {
                    isLoading?
                    Array.from({length:14}).map(
                        ()=> <PaperCardSkeleton/>
                    )
                    :
                    error?
                    <p>Error</p>
                    :
                    conferences?.map(
                        (conferece)=>{
                            return(<ConferenceCard title={conferece.title} date={conferences.date} url={conferece.link} location={conferece.venue}/>)
                        }
                    )
                }
                {/* <ConferenceCard title={"test"} date={"2002"} url={"google.com"} location={"egypt"}/> */}
            </div>
        </div>
        </>
    )
}
export default Conference;