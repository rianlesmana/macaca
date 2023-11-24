import bg from '../assets/img/bg-top.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/img/logo-macaca.png';

export default function About() {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className='w-screen h-screen bg-cover bg-center overflow-y-scroll'
        >
            <Navbar />
            <main className='py-28 w-full flex flex-col items-center'>
                <section className='bg-white w-80 md:w-[40rem] p-5 rounded-md shadow-md'>
                    <h1 className='text-center text-xl font-poppins text-slate-800 font-semibold'>
                        About MACACA
                    </h1>
                    <p className='text-center font-poppins text-sm border-b-2 pb-2'>
                        Mangrove Carbon Calculator
                    </p>
                    <div className='w-full flex justify-center mt-5'>
                        <img src={logo} alt='macaca' className='w-60' />
                    </div>

                    <article className='mt-5'>
                        <h2 className='font-semibold text-slate-800 mb-1 font-poppins'>
                            Background
                        </h2>
                        <p className=' text-justify indent-12'>
                            Mangroves are one of the deep coastal ecosystems
                            that have an important role in mitigating global
                            climate change. Mangroves are part of the parameters
                            of blue carbon that functions as a carbon sink in
                            the atmosphere and then stores it in biomass and
                            sediments (Sondak and Chung, 2015; Nasprianto, et
                            al. 2016). Every 1 ha of mangrove forest can store
                            4x more carbon than terrestrial forests, and absorb
                            20x more CO2 emissions than terrestrial tropical
                            forests (Donato et al. 2012 in Yaqin et al. 2022).
                            The absorbed carbon is stored in mangrove biomass,
                            namely in several parts such as stems, leaves, and
                            sediments. According Bachmid et al. (2018) Mangroves
                            have an optimal function in absorption reaching
                            77.9% stored in stems, leaves, and sediments.
                            Menurut Kauffman et al. (2012) The largest mangrove
                            carbon storage is found in sediment. Mangrove carbon
                            stores are mostly allocated proportionally
                            underground or sedimentary. The determination of
                            stored carbon is done using conversion rates. The
                            carbon contained in organic matter is 46%-50%, so
                            the estimated amount of carbon stored is by
                            multiplying 46%-50% or 0.46-0.5 by the carbon
                            absorption biomass (Hairiah dan Rahayu 2007). The
                            carbon absorption biomass is obtained through
                            mangrove biomass analysis, namely above-ground
                            biomass (AGB) and below-ground biomass (BGB).
                            Biomass analysis is carried out by the allometric
                            method, which requires measurement parameters,
                            namely diameter at breast height (DBH) and tree
                            height (H).
                        </p>
                        <br />

                        <p className='text-justify indent-12'>
                            Estimation of carbon storage in mangrove trees is
                            also needed to measure sediment. Analysis of carbon
                            content in sediments is carried out using
                            graphimetric methods for sediment weight
                            measurement. Menurut Badan Standarisasi Nasional
                            (2011) The initial process of calculating carbon
                            content in sediments requires specific gravity data
                            (bulk density) obtained from the division between
                            dry weight and sample volume. So from these
                            parameters, calculations related to organic carbon
                            in sediments can be carried out by multiplying the
                            depth of the soil, specific gravity, and the
                            percentage of organic carbon from the laboratory.
                        </p>
                        <br />
                        <p className='text-justify indent-12'>
                            Selection of mangrove carbon measurement methods
                            that are inaccurate or not in accordance with the
                            conditions of mangrove locations can result in
                            errors. Various methods such as biomass measurement,
                            and soil analysis have different levels of accuracy.
                            Errors can occur if the sample taken does not
                            accurately represent the entire mangrove ecosystem
                            to be counted. Misidentification of calculated
                            mangrove species can result in inaccurate carbon
                            values because different mangrove species can have
                            different levels of carbon accumulation. Data
                            collection can involve measurements and
                            observations. The collected data is then sorted
                            correctly, especially if the data is spread across
                            multiple sources or in different formats. Data in
                            different units of measurement needs to be converted
                            to consistent units for accurate calculations. The
                            calculation process can be long and complicated,
                            especially if it involves a lot of data, complex
                            mathematical formulas, or in-depth analysis methods
                            that have the potential for miscalculations.
                        </p>
                        <br />
                        <p className='text-justify indent-12'>
                            Automatic calculations can be known using MAngrove
                            CArbon CAlculator (MACACA) software. MAngrove CArbon
                            CAlculator (MACACA) is software created to calculate
                            how much-estimated amount of carbon is absorbed and
                            stored in upper biomass and lower biomass, as well
                            as carbon sequestration stored in sediments. MACACA
                            is designed to facilitate data analysis in the
                            calculation of mangrove carbon in trees and
                            sediments. Other advantages of MACACA software
                            include: (1) There are guidelines that can be used
                            to identify the type of mangrove in a particular
                            area, (2) Shorten the process of analyzing data
                            contained in above-ground, below-ground, and
                            sedimentary biomass. (3) Can be operated in multiple
                            platforms, (4) Operated offline so that it can be
                            used in locations constrained by internet signal
                            networks, (5) Data obtained on this device can be
                            exported into files to process data, (6) The graphic
                            display obtained can be used directly.
                        </p>
                    </article>
                    <article className='mt-5'>
                        <h2 className='font-poppins font-semibold text-slate-800 mb-1'>
                            Goals
                        </h2>
                        <ul className='text-justify list-disc pl-8'>
                            <li>
                                Create a mangrove carbon calculator that can be
                                accessed on various platforms and can be
                                accessed offline, so there is no need for a
                                strong signal in certain areas
                            </li>
                            <li>
                                Summarize the process of analyzing carbon
                                calculation data on trees and sediments, so as
                                to facilitate research
                            </li>
                        </ul>
                    </article>
                    <article className='mt-5'>
                        <h2 className='font-poppins font-semibold text-slate-800 mb-1'>
                            Benefits
                        </h2>
                        <ul className='text-justify list-disc pl-8'>
                            <li>
                                Mangrove tree identification guide to find out
                                the types of mangroves based on observations on
                                pictures of leaves, flowers, and fruits
                            </li>
                            <li>
                                AGB and BGB carbon content (Streamlining the
                                data analysis process)
                            </li>
                            <li>
                                Carbon content in sediments (Streamlining the
                                data analysis process)
                            </li>
                            <li>
                                Can be operated on many platforms such as in web
                                applications
                            </li>
                            <li>
                                Can be operated offline to avoid difficulties in
                                the network at the survey location
                            </li>
                        </ul>
                    </article>
                    <article className='mt-5'>
                        <h2 className='font-poppins font-semibold text-slate-800 mb-1'>
                            Uniqueness of the Carbon Calculator
                        </h2>
                        <ul className='text-justify list-disc pl-8'>
                            <li>App can run offline *</li>
                            <li>
                                In addition to calculating the carbon in
                                mangrove trees, the calculator can also
                                calculate the carbon content of mangrove
                                sediments.
                            </li>
                            <li>
                                The application is able to display
                                identification images of mangrove species (with
                                images of stems, leaves, and fruits) to minimize
                                the occurrence of identification errors.
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}
