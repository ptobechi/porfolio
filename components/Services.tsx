import Image from "next/image";
import icon_one from "../assets/images/icon_one.svg"
import icon_two from "../assets/images/icon_two.svg"
import icon_three from "../assets/images/icon_three.svg"

const Services = () => {
    return (
        <section className="text-center justify-center py-10">
            <h1 className="uppercase font-extrabold text-red-900">
                Services
            </h1>

            <h1 className="lg:text-5xl font-semibold px-5 text-[1.75rem] leading-tight py-5 xl:px-96 lg:px-44">
            Design that solves problems, one product at a time.
            </h1>

            <div className="xl:px-46 lg:px-20 md:px-20 px-5 text-left lg:flex gap-3 mt-5">
                <div className="lg:flex-1 mb-5">
                    <Image src={icon_one} alt="icon one" className="mb-10" height={70} />
                    <h1 className="lg:text-2xl font-bold mb-5">
                    What I can do for you 
                    </h1>

                    <p className="mb-5">
                    Faster, better products that your users love. 
                    Here's all the services I provide:
                    </p>

                    <ul className="px-5 font-bold mb-10" style={{listStyleType:"square"}}>
                        <li>Design Strategy</li>
                        <li>Web and Mobile App Design</li>
                        <li>Front-end Development</li>
                    </ul>
                </div>

                <div className="lg:flex-1">
                    <Image src={icon_two} alt="icon one" className="mb-10" height={70} />
                    <h1 className="lg:text-2xl font-bold mb-5">
                    What I can do for you 
                    </h1>

                    <p className="mb-5">
                    Faster, better products that your users love. 
                    Here's all the services I provide:
                    </p>

                    <ul className="px-5 font-bold mb-10" style={{listStyleType:"square"}}>
                        <li>Design Strategy</li>
                        <li>Web and Mobile App Design</li>
                        <li>Front-end Development</li>
                    </ul>
                </div>

                <div className="lg:flex-1">
                    <Image src={icon_three} alt="icon one" className="mb-10" height={70} />
                    <h1 className="lg:text-2xl font-bold mb-5">
                    What I can do for you 
                    </h1>

                    <p className="mb-5">
                    Faster, better products that your users love. 
                    Here's all the services I provide:
                    </p>

                    <ul className="px-5 font-bold mb-10" style={{listStyleType:"square"}}>
                        <li>Design Strategy</li>
                        <li>Web and Mobile App Design</li>
                        <li>Front-end Development</li>
                    </ul>
                </div>
            </div>

            <div id="gallery"></div>
        </section>
    )
}
export default Services;