import { useState } from "react";
import { Link } from "react-router-dom";
import { BiAlignRight } from "react-icons/bi";
import macacaLogo from "../assets/img/logo-macaca.png";

const navMenu = [
    {
        path: "#home",
        name: "Home",
    },
    {
        path: "#calculator",
        name: "Calculator",
    },
    {
        path: "#tutorial",
        name: "Tutorial",
    },
    {
        path: "#about",
        name: "About",
    },
    {
        path: "#",
        name: "Language",
    },
];

export default function Navbar() {
    const [condition, setCondition] = useState(false);
    function navCondition() {
        setCondition(!condition);
    }

    return (
        <nav className="flex justify-between px-5 py-2 md:py-0 items-center bg-white fixed w-full z-50 shadow-sm">
            <Link to={`#`}>
                <img src={macacaLogo} alt="Macaca" className="h-10 md:h-12" />
            </Link>

            {/** Menu Mobile */}
            <div className="md:hidden">
                <Link
                    onClick={navCondition}
                    to={`#`}
                    className="inline-block text-slate-600 text-2xl"
                >
                    <BiAlignRight />
                </Link>
                <ul
                    className={`${
                        condition ? "absolute" : "hidden"
                    } bg-white h-screen w-screen sm:w-96 z-20 top-0 right-0 shadow-md`}
                >
                    <div className="flex flex-col justify-center items-center gap-3 mt-14">
                        {navMenu.map((value, index) => {
                            return (
                                <li key={index}>
                                    {/* <Link
                                        className="bg-slate-50 active:text-white active:bg-sky-200 flex justify-center items-center font-poppins font-semibold text-sm w-48 h-10 rounded-md shadow-sm border-b-4 border-b-transparent hover:border-b-mrv-sky-200 transition-all duration-500"
                                        to={value.path}
                                    >
                                        {value.name}
                                    </Link> */}

                                    <a
                                        className="bg-slate-50 active:text-white active:bg-sky-200 flex justify-center items-center font-poppins font-semibold text-sm w-48 h-10 rounded-md shadow-sm border-b-4 border-b-transparent hover:border-b-mrv-sky-200 transition-all duration-500"
                                        href={`${value.path}`}
                                        onClick={navCondition}
                                    >
                                        {value.name}
                                    </a>
                                </li>
                            );
                        })}
                        <li>
                            <Link
                                onClick={navCondition}
                                className="bg-slate-50 flex justify-center items-center h-16 w-16 rounded-md shadow-sm font-poppins font-semibold text-xl border-4 border-transparent hover:border-mrv-sky-200 transition-all duration-500 mt-8"
                                to="#"
                            >
                                X
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>

            {/** Menu Desktop & Tablet */}
            <ul className="md:flex items-center hidden">
                {navMenu.map((value, index) => (
                    <li key={index}>
                        {/* <Link
                            className="inline-block py-5 px-6 border-b-4 border-b-transparent hover:border-b-mrv-sky-200 hover:bg-slate-50 font-poppins text-sm font-semibold transition-all duration-300"
                            to={value.path}
                        >
                            {value.name}
                        </Link> */}

                        <a
                            className="inline-block py-5 px-6 border-b-4 border-b-transparent hover:border-b-mrv-sky-200 hover:bg-slate-50 font-poppins text-sm font-semibold transition-all duration-300"
                            href={value.path}
                        >
                            {value.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
