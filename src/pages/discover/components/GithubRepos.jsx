import { useQuery } from "@tanstack/react-query";
import Githubrepocard from "./Githubrepocard";
import axios from "axios";
import { useContext } from "react";
import { ProfileContext } from "@/components/context/ProfileContext";
import GithubrepocardSkeleton from "./GithubrepocardSkeleton";
import { Button } from "@/components/ui/button";

const GithubRepos = ()=>{
    const {ProfileData} = useContext(ProfileContext);

    const GetRepos = async()=>{
    const repos = await axios.get(`https://api.github.com/users/${ProfileData.github}/repos?sort=updated&direction=desc`);
    return repos.data;
    }

    const {data:repos,error,isLoading} = useQuery({
        queryKey:["repos"],
        queryFn: GetRepos
    });

    return(
        <div className="w-full h-fit flex flex-wrap gap-2 justify-start items-start p-4 rounded-xl bg-neutral-50 overflow-x-auto">
            {
                isLoading?
                Array.from({length:10}).map(
                    (i,_)=> <GithubrepocardSkeleton key={_}/>
                )
                :
                error?
                <h2 className="text-3xl font-semibold text-center">{error.message}</h2>
                :
                repos?.length > 0 ?
                repos.map(
                    (repo)=> <Githubrepocard key={repo.id} repoName={repo.name} repoLanguage={repo.language} repoDate={repo.updated_at} repoUrl={repo.html_url}/>
                )
                :
                ProfileData.github_login?
                <h2 className="text-3xl font-semibold text-center">No repositories found</h2>
                :
                <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="font-semibold text-center">Please Set your github username first</h2>
                <Button className={"my-4"} variant={"dark"}>Add Github</Button>
                </div>
            }
        </div>
    )
}
export default GithubRepos;