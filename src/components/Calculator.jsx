import { useState } from 'react';
import btnBiomass from '../assets/img/btn-biomass.png';
import btnSediment from '../assets/img/btn-sedimen.jpg';
import CalcTree from './CalcTree';
import CalcSediment from './CalcSediment';

export default function Calculator() {
    const [calculator, setCalculator] = useState('tree');

    const onClickTree = () => {
        setCalculator('tree');
    };

    const onClickSediment = () => {
        setCalculator('sediment');
    };

    return (
        <div id='calculator' className='my-10'>
            <h2 className='text-center font-poppins font-semibold text-slate-800 text-xl'>
                Lets check your Carbon!
            </h2>
            {/*============= Button Swicth =============*/}
            <div className='flex gap-10 justify-center p-8 border-b-4 border-b-mrv-sky-200 w-80 mx-auto'>
                <button
                    onClick={onClickTree}
                    className='bg-gradient-to-r from-mrv-sky-200 to-mrv-green w-28 flex flex-col justify-evenly items-center'
                >
                    <p className='font-poppins font-semibold text-white py-4 text-sm tracking-wider'>
                        Tree
                    </p>
                    <img src={btnBiomass} alt='biomass' className='w-full' />
                </button>
                <button
                    onClick={onClickSediment}
                    className='bg-gradient-to-r from-mrv-sky-200 to-mrv-green w-28 flex flex-col justify-evenly items-center'
                >
                    <p className='font-poppins font-semibold text-white py-4 text-sm tracking-wider'>
                        Sediment
                    </p>
                    <img src={btnSediment} alt='sediment' className='w-full' />
                </button>
            </div>

            {/*============= Calculator =============*/}
            <div className='transition-all duration-300 flex justify-center mt-10'>
                {calculator === 'tree' ? <CalcTree /> : <div />}
                {calculator === 'sediment' ? <CalcSediment /> : <div />}
            </div>
        </div>
    );
}
