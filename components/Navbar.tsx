const NavBar = () => {
    return (
        <nav className="bg-white border-gray-20 lg:px-24 lg:py-5">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Talentifyhub Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-dark">Talentifyhub</span>
                </a>
                <a href="#gallery" className="text-gray-900 inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg">
                    Gallery
                </a>
                {/* <div className="w-full font-extrabold md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium">
                        <li>
                            <a href="#gallery" className="block font-bold text-gray-900">Gallery</a>
                        </li>
                    </ul>
                </div> */}

                {/* <div className="hidden w-full font-extrabold md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <a href="#" className="block font-bold py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                        <a href="#" className="block font-bold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                        <a href="#" className="block font-bold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                        <a href="#" className="block font-bold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}
export default NavBar;