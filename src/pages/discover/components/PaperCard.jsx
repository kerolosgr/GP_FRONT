const PaperCard = ()=>{
    return(
        <>
        <div className="flex flex-col justify-start items-start w-full md:w-[330px] min-h-[200px] p-4 rounded-xl border-2 hover:shadow transition duration-200 ease-in-out">
            <h4 className="text-[16px] font-semibold text-gray-800 line-clamp-3">Packing Input Frame Context in Next-Frame Prediction Models for Video Generatione</h4>
            <p className="text-gray-700 text-[14px] my-2">lllyasviel/framepack <span className="font-semibold">17 Apr 2025</span></p>
            <p className="text-gray-700 font-semibold text-[12px] line-clamp-2">We present a neural network structure, FramePack, to train next-frame (or next-frame-section) prediction models for video generation.</p>
        </div>
        </>
    )
}
export default PaperCard;