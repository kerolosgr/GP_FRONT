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
        const res = await axios.get(`https://api.kerolos-safwat.me/api/v1/coursat?query=${skillsConcat}`);
        console.log(res.data);
        return res.data;
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
                courses?.data.map(
                    (course)=> <CourseCard key={course.course_url} title={course.title} author={course.instructor} platform={"Coursat"} description={course.duration} rating={course.rating} image_url={course.image_url} url={course.course_url}/>
                )
            }
            </div>
        </div>
    )
}
export default Courses;