"use client"
import { useState } from "react";
import { MdEmail } from "react-icons/md";

type ModalProps = {
    isOpen: boolean;
    toggleModal: () => void;
};

const Modal = ({ isOpen, toggleModal } : ModalProps ) => {
    const [step, setStep] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopupModal = (e: any) => {
        e.preventDefault();

        setIsPopupOpen(!isPopupOpen);
        const mainElement = document.querySelector('isPopupOpen');
        if (mainElement) {
          mainElement.classList.toggle('blur', !isPopupOpen);
        }
      };

    if (!isOpen) return null;

    return (
        <>
        <div className="isPopupOpen">
            <div id="select-modal" tabIndex={-1} aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Schedule or Apply for
                            </h3>
                            <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        
                        {/* <!-- Modal body --> */}
                        <div className="p-4 md:p-5">
                            {
                                step === 0 ?
                                <>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">Select your desired option:</p>
                                <ul className="space-y-4 mb-4">
                                    <li>
                                        <input type="radio" id="job-1" name="job" value="job-1" className="hidden peer" required />
                                        <label htmlFor="job-1" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">                           
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Private Vacation Trip</div>
                                            </div>
                                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="job-2" name="job" value="job-2" className="hidden peer" />
                                        <label htmlFor="job-2" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Business Proposal</div>
                                            </div>
                                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="job-3" name="job" value="job-3" className="hidden peer" />
                                        <label htmlFor="job-3" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Business Partnership/Sponsorship</div>
                                            </div>
                                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                                        </label>
                                    </li>
                                </ul>
                                <button onClick={() => setStep(step + 1)} className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Next step
                                </button>
                                </>
                                :
                                step === 1 ?
                                <form className="space-y-4" onSubmit={togglePopupModal}>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Token</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <button onClick={() => setStep(step - 1)}  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Go Back
                                            </button>
                                        </div>
                                        <a href="#" onClick={togglePopupModal} className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                                            Don't have a  token?
                                        </a>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Proceed
                                    </button>
                                </form>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            isPopupOpen &&
            <div id="popup-modal" tabIndex={-1} aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={togglePopupModal} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Kindly contact us via support@talentifyhub.org to get a token
                            </h3>
                            <a href="mailto:support@talentifyhub.org" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Contact us <MdEmail className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Modal;
