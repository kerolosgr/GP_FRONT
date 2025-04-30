import { useContext } from "react";
import CourseCard from "./CourseCard";
import CoursesCardSkeleton from "./CoursesCardSkeleton";
import { ProfileContext } from "@/components/context/ProfileContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Courses = ()=>{
    const {ProfileData,profileLoading,profileError,githubLoading,githubError,ProfileGithubData} = useContext(ProfileContext);
    const skillsConcat = ProfileData?.skills.join(' ');

    const fetchCourses = async ()=>{
        const res = await axios.post(`https://scrappingall-production.up.railway.app/scrape-courses?query=${skillsConcat}&pages=10`,{query:skillsConcat});
        // console.log(res.data);
        return res.data.result;
    };
    const {data:courses,isLoading,error}=useQuery({
        queryKey:["courses"],
        queryFn: fetchCourses
    });
    return(
        <div className="w-full h-full p-4 bg-neutral-50 rounded-xl flex flex-col items-start justify-start overflow-scroll overflow-x-hidden">
            <h2 className="text-3xl font-semibold ml-4">Courses</h2>
            <div className="w-full flex justify-start items-center gap-3 flex-wrap h-fit p-2 mt-4">
            {/* <CoursesCardSkeleton/>
            <CourseCard/> */}
            {
                isLoading?
                Array.from({length:8}).map((i,_)=> <CoursesCardSkeleton key={_}/>)
                :
                error?
                <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="font-semibold text-center">Sorry , an error occured {error.message}</h2>
                </div>
                :
                courses?.map(
                    (course)=> <CourseCard key={course.image} duration={course.details.duration} title={course.title} author={course.instructor} platform={course.details.provider} description={course.description} rating={5} image_url={course.image} url={course.course_url}/>
                )
            }
            </div>
        </div>
    )
}
export default Courses;