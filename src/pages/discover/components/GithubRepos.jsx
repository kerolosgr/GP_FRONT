import { useQuery } from "@tanstack/react-query";
import Githubrepocard from "./Githubrepocard";
import axios from "axios";
import { useContext } from "react";
import { ProfileContext } from "@/components/context/ProfileContext";

const GithubRepos = ()=>{
    const {ProfileData} = useContext(ProfileContext);

    const GetRepos = async()=>{
    const repos = await axios.get(`https://api.github.com/users/${ProfileData.github_login}/repos?sort=updated&direction=desc`);
    return repos.data;
    }

    const {data:repos,error,isLoading} = useQuery({
        queryKey:["repos"],
        queryFn: GetRepos
    });

    return(
        <div className="w-full h-full flex flex-col justify-start items-start p-4 rounded-xl bg-neutral-50 overflow-x-auto">
            {
                isLoading?
                <h2 className="text-3xl font-semibold text-center">loading...</h2>
                :
                error?
                <h2 className="text-3xl font-semibold text-center">{error.message}</h2>
                :
                repos?.length > 0 ?
                repos.map(
                    (repo)=> <Githubrepocard key={repo.id} repoName={repo.name} repoLanguage={repo.language} repoDate={repo.updated_at} repoUrl={repo.html_url}/>
                )
                :
                <h2 className="text-3xl font-semibold text-center">No repositories found</h2>
            }
        </div>
    )
}
export default GithubRepos;