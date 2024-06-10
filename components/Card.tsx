type BannerProps = {
    toggleModal: () => void;
};

const Card = ({toggleModal}: BannerProps) => {
    return (
        <h1 className="lg:text-5xl lg:px-24 lg:w-2/3 mb-5 font-extrabold leading-tight px-5 text-4xl">
            Ready to make something kickass? <br />
            <span className="underline-hover text-amber-600">
            Let's get on a call.
            </span>
            <button onClick={toggleModal} className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Get Started
            </button>
        </h1>
    )
}
export default Card