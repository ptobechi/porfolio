import one from "../assets/images/concert_one.avif"
import two from "../assets/images/concert_two.avif"
import three from "../assets/images/concert_three.webp"
import four from "../assets/images/concert_four.webp"
import Image from "next/image"

const Gallery = () => {
    return (
        <div className="grid w-auto md:grid-cols-3 gap-4 lg:px-24 px-5 mb-20">
            <div className="order-1">
                <Image className="h-full max-w-full rounded-lg" 
                    src={two} 
                    alt=""
                />
            </div>
            <div className="order-3">
                <Image className="h-full max-w-full rounded-lg" 
                    src={one} 
                    alt=""
                />
            </div>
            <div className="flex lg:flex-col gap-3 order-2 lg:order-3 mx-auto">
                <Image className="h-auto rounded-lg flex-1 w-1/2 lg:w-full" 
                    src={three} 
                    alt=""
                />
                <Image className="h-auto rounded-lg flex-1 w-1/2 lg:w-full" 
                    src={four} 
                    alt=""
                />
            </div>
        </div>
    )
}
export default Gallery;