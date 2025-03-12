const Introduction5 = ({className})=>{
    return (
        <div className={`w-full h-full p-4 flex flex-col items-center justify-start text-gray-800 transition-opacity ease-in-out duration-1000 ${className}`}>
            <img className="w-[300px]" src="/assets/analytics.webp" alt="job-market"/>
            <h5 className="w-full font-semibold mb-4">The Job Market Today</h5>
            <h5 className="w-full font-semibold mb-2 text-[14px]">
                The job market is constantly evolving. Here are some insights based on your industry:
                <ul className="list-disc my-1">
                    <li><strong>Tech Industry Growth:</strong> The tech industry continues to expand rapidly, with a high demand for software engineers, data scientists, and cybersecurity experts.</li>
                    <li><strong>Remote Work Opportunities:</strong> Many companies are now offering remote work options, especially in tech-related fields.</li>
                    <li><strong>In-Demand Skills:</strong> Skills like cloud computing, artificial intelligence, and machine learning are highly sought after in today’s job market.</li>
                </ul>
            </h5>
        </div>
    )
}
export default Introduction5;