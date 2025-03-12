const Introduction4 = ({className})=>{
    return (
        <div className={`w-full h-full p-4 flex flex-col items-center justify-start text-gray-800 transition-opacity ease-in-out duration-1000 ${className}`}>
            <img className="w-[300px]" src="/assets/resume.webp" alt="career-path"/>
            <h5 className="w-full font-semibold mb-4">Explore Career Paths</h5>
            <h5 className="w-full font-semibold mb-2 text-[14px]">
                Based on your experience and skills, here are some potential career paths you might want to explore:
                <ul className="list-disc my-2">
                    <li><strong>Software Engineer:</strong> Develop and maintain software applications. Strong programming skills and problem-solving abilities are essential.</li>
                    <li><strong>Data Scientist:</strong> Analyze and interpret complex data to help businesses make decisions. Skills in statistics, machine learning, and data visualization are key.</li>
                    <li><strong>Project Manager:</strong> Lead teams, coordinate projects, and ensure deadlines are met. Strong leadership and communication skills are a must.</li>
                </ul>
            </h5>
        </div>
    )
}
export default Introduction4;