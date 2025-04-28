import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const About = ()=>{
    const test = async ()=>{
        await axios.get('https://scrappingall-production.up.railway.app/scrape-jobs?query=internship&pages=2'),then(
            res=>{
                console.log(res.data);
            }
        );
    }

    const {data,error,isLoading} = useQuery(
        {queryKey:["test"],queryFn:test},
    )
    return(
        <>
        <h1>About Page</h1>
        </>
    )
}
export default About;