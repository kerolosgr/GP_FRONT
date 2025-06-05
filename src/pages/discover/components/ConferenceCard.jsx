const ConferenceCard = ({url,title,date,location})=>{
    return(
        <>
        <a href={url} target="_blank" className="flex flex-col justify-start items-start w-full md:w-[320px] min-h-[200px] p-4 rounded-xl border-2 hover:shadow transition duration-200 ease-in-out">
            <h4 className="text-[16px] font-semibold text-gray-800 line-clamp-3">{title}</h4>
            <p className="text-gray-700 text-[14px] my-2">{title} <span className="font-semibold">{date}</span></p>
            <p className="text-gray-700 font-semibold text-[12px] line-clamp-2">{location}</p>
        </a>
        </>
    )
}
export default ConferenceCard;