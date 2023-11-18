import Navbar from '../components/Navbar';
import bgHeader from '../assets/img/bg-top.png';
import mangrove from '../assets/img/img-mangrove.png';
import bgBot from '../assets/img/bg-down.png';
import { BiCaretLeftCircle } from 'react-icons/bi';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';

export default function Home() {
    return (
        <>
            <header id='home'>
                <Navbar />
                <div
                    style={{ backgroundImage: `url(${bgHeader})` }}
                    className='pt-28 pb-24 pl-5 md:pt-40 md:pb-44 md:pl-20 text-white font-yanone bg-cover'
                >
                    <h1 className='text-4xl md:text-5xl antialiased'>
                        Welcome to
                    </h1>
                    <h1 className='text-5xl md:text-6xl mt-1 antialiased tracking-wide'>
                        MANGROVE CARBON CALCULATOR
                    </h1>
                </div>
            </header>
            <main>
                {/*============= Calculator =============*/}
                <Calculator />

                {/*============= Tutorials! =============*/}
                <div
                    id='tutorial'
                    className='flex flex-col items-center gap-7 p-4'
                >
                    <h2 className='font-poppins font-semibold antialiased tracking-tight text-xl text-slate-800 text-center'>
                        Tutorials!
                        <br />
                        <span className='font-normal text-sm'>
                            Having trouble using our calculator? Check out the
                            tutorial here.
                        </span>
                    </h2>
                    <div className='bg-mrv-sky-200 w-5/6 h-40 sm:h-60 md:w-4/6 md:h-80 lg:w-3/6 text-slate-100 text-6xl flex justify-center items-center'>
                        <BiCaretLeftCircle />
                    </div>
                </div>

                {/*============= About Us =============*/}
                <div id='about' className='flex flex-col gap-7 mt-10'>
                    <div
                        style={{ backgroundImage: `url(${bgBot})` }}
                        className='bg-cover p-10'
                    >
                        <h2 className='font-poppins font-semibold antialiased tracking-tight text-2xl text-white text-center mb-16'>
                            About Us
                        </h2>
                        <div className='flex justify-center gap-16 flex-wrap'>
                            <img
                                src={mangrove}
                                alt='mangrove'
                                className='w-96'
                            />
                            <div className='w-96'>
                                <p className='text-justify font-poppins text-slate-50 text-sm'>
                                    Mangrove Carbon Calculator (MACACA) is a
                                    software created to calculate the estimated
                                    amount of carbon sequestered and stored in
                                    the upper biomass and lower biomass, as well
                                    as carbon uptake stored in sediments. MACACA
                                    is designed to facilitate data analysis in
                                    the calculation of mangrove carbon in trees
                                    and sediments.
                                </p>
                                <div className='flex flex-col gap-3 mt-12'>
                                    <textarea
                                        placeholder='Any feedback on our services?'
                                        className='p-2 rounded-md font-poppins text-sm focus:outline-none focus:ring-4 shadow-md transition-all duration-300'
                                    />
                                    <button className='bg-mrv-sky-200 w-28 py-1 rounded-md shadow-md font-poppins font-semibold text-slate-100 hover:bg-mrv-sky-100 hover:ring-4 transition-all duration-300'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
