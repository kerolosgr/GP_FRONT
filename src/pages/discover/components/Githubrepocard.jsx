import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { format,formatDistance,formatDate,subDays } from "date-fns"
import { languageColors } from "./GithubLanguageColor"

const Githubrepocard = ({repoName,repoLanguage,repoDate,repoUrl})=>{
    const languageColor = (language)=>{
        return <span className={cn(`block w-[10px] h-[10px] outline-2 rounded-[50%]`)} style={{ outlineColor: languageColors[language] }}></span>
    }
    return(
        <div className="w-full md:w-[430px] h-[170px] md:h-[150px] my-1 py-4 px-3 flex flex-col md:flex-row flex-shrink-0 justify-start items-start rounded-lg border border-gray-300">
            <div className="flex flex-col justify-start items-start w-full md:w-[70%] h-full">
            <h4 className="text-[16px] md:text-[21px] font-semibold text-neutral-700 line-clamp-2">{repoName}</h4>
            <span className="flex items-center mt-2 gap-1.5">
                {languageColor(repoLanguage)}
                <p className="text-[12px] font-normal text-neutral-500">{repoLanguage??"No Language"}</p>
            </span>
            <p className="mt-auto text-[12px] font-normal text-neutral-500">updated on {format(repoDate, "MMM dd yyyy")} , {formatDistance(subDays(repoDate, 3), new Date(), { addSuffix: true })}.</p>
            </div>
            <div className="flex flex-col justify-start items-start w-[30%] h-full">
                <Button className={"w-full mt-auto ml-auto"} variant={"dark"}><Link to={repoUrl}>Visit Repository</Link></Button>
            </div>
        </div>
    )
}
export default Githubrepocard