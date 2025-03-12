const Introduction3 = ({className})=>{
    return(
        <div className={`w-full h-full p-4 flex flex-col items-center justify-start text-gray-800 transition-opacity ease-in-out duration-1000 ${className}`}>
            <img className="w-[300px]" src="/assets/brain.webp" alt="lamp"/>
            <h5 className="w-full font-semibold mb-4">Skills Matter</h5>
            <h5 className="w-full font-semibold mb-2 text-[14px]">
            It’s important to showcase both your hard and soft skills. Here's a quick breakdown of each:
            <ul className="list-disc my-2">
                <li>Hard Skills: These are your technical abilities, such as programming, data analysis, or graphic design.</li>
                <li>Soft Skills: These include communication, problem-solving, and teamwork. They are just as important in the workplace!</li>
            </ul>
            </h5>
        </div>
    )
}
export default Introduction3;