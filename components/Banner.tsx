import Image from "next/image";
import smiley_man from "../assets/images/60ad1c2b0e1d633fc7ef2e69_Group 160-min-p-1080.jpeg"

const Banner = () => {
    return (
        <section className="lg:flex items-center xl:px-40 lg:px-24 px-5">
            <div className="lg:flex flex-col lg:flex-1 lg:justify-between gap-3 mt-10">
                <h1 className="lg:text-6xl capitalize text-[2.75rem] leading-tight py-5">
                Connect with your favorite Artist today
                </h1>

                <p className="text-xl">
                Hi! I’m Ghost, a product designer based in Berlin.
                I create user-friendly interfaces for fast-growing startups.
                </p>

                <div className="">
                <button className="py-2.5 bg-amber-600 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-non rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Schedule a Call
                </button>
                </div>

            </div>

            <div className="lg:flex-1">
                <Image src={smiley_man} alt="" style={{
                    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                    transformStyle: "preserve-3d", 
                }}  
                />
            </div>
        </section>
    )
}
export default Banner;