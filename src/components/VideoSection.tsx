"use client"

const VideoSection = () => {
  return (
    <div className="flex justify-center">
        <div className="w-full flex flex-col gap-3 md:gap-12 lg:gap-12 sm:px-0 sm:max-w-xl md:max-w-3xl lg:max-w-7xl">
            <div className="flex items-center gap-2 bg-[#d0f1f1] text-pink-400 rounded-3xl bg-primary-50 bg-[url(/grid-line.png)] bg-cover bg-center overflow-visible px-8 py-20 sm:px-16 sm:py-24">
                <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-heading-1 font-bold mb-1 mt-1.5 text-stroke-3 text-pink-400 text-2xl md:text-3xl lg:text-5xl">
                        Welcome to Kidz Station!
                    </h3>                
                    <p className="text-sm sm:text-base text-pink-400 mb-2">
                    Kidz Station is the most explorative toy store that offers a unique experience for play where parents & kids can team up together. Let your imagination run as you embark on a new adventure filled with thrills and excitement. Welcome to Kidz Station Imagine Play
                    </p>
                </div>
                <div className="flex-1 aspect-video">
                    <div className="aspect-video w-full relative">
                        <video
                            src="/video.mp4"
                            controls
                            muted
                            loop
                            playsInline
                            poster="/thumbnail.webp"
                            className="w-full h-full object-cover rounded-3xl"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoSection