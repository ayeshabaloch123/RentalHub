import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-[87.46vw] md:w-full lg:w-[57%] bg-white ">
            <div className="justify-start mx-auto lg:max-w-full md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between pt-3 md:py-5 md:mr-[64px]  md:block">
                        <a href="javascript:void(0)">
                        <img src={logo} alt="logo" className="w-[30px] h-[24px] md:w-[5vw] md:h-[4vw]"/>
                        </a>
                        <div className="md:hidden">
                            <button
                                className=" text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                      
                        <ul className="items-center justify-center text-center space-y-8 md:flex lg:space-x-[39px]  md:space-x-[2.3vw]  md:space-y-0">
                        <li className="cursor-pointer nav-hover  md:text-[1.4vw] font-[400]"><a href="">Home</a></li>
                        <li className="cursor-pointer nav-hover md:text-[1.4vw] font-[400]"><a href="#how_it_works">How it works</a></li>
                        <li className="cursor-pointer nav-hover md:text-[1.4vw] font-[400]"><a  href="#services"> Our Services</a></li>
                        <li className="cursor-pointer nav-hover md:text-[1.4vw] font-[400]"><a href="#team">Team</a></li>
                        <li className="cursor-pointer nav-hover  md:text-[1.4vw] font-[400]"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}