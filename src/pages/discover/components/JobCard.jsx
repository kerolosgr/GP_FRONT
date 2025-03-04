import { Activity } from "lucide-react";

const JobCard = ()=>{
    return (
        <div className="w-[420px] h-[300px] p-4 flex flex-col justify-start items-start border rounded-xl border-gray-300 hover:shadow transition">
                    <div className="w-full flex justify-between items-center">
                        <div>
                            <h5 className="font-semibold text-[18px] my-2">Software Engineer</h5>
                            <p>Advansys</p>
                            <p>Nasr City</p>
                            <span className="bg-[#e8f3fc] min-w-[120px] max-w-[200px] h-[25px] flex justify-start py-2 px-4 items-center text-center rounded text-[12px] font-semibold my-2"><Activity size={15} color="#237ea3" className="mr-2" />3 days ago</span>
                        </div>
                        <div className="w-[110px] h-[110px]">
                            <img className="object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" width={110} height={110} alt="co. img" />
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-2 text-[14px]">
                        <p>Full-time</p>
                        <p>Remote</p>
                    </div>
                    <p className="mt-2 text-[12px] font-semibold text-gray-700 line-clamp-5">Join Advansys as a Software Engineer Intern and gain hands-on experience in a fast-paced and innovative environment. You'll work alongside experienced engineers and contribute to various software development projects, enhancing your technical skills while learning about real-world applications.Join Advansys as a Software Engineer Intern and gain hands-on experience in a fast-paced and innovative environment. You'll work alongside experienced engineers and contribute to various software development projects, enhancing your technical skills while learning about real-world applications.</p>
                </div>
    )
}
export default JobCard;