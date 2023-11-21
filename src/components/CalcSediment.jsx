import { useState } from 'react';

import CardCalculator from './CardCalculator';
import Button from './Button';
import Input from './Input';
import {
    bulkDensity,
    soilCarbonDensity,
    amountCarbonInCoreSection,
} from '../Calc/sedimentEquation';

export default function CalcSediment() {
    const [notifSaveData, setNotifSaveData] = useState(false);
    const [density, setDensity] = useState('Bulk Density');
    const [finalData, setFinalData] = useState([]);
    const [dataSediment, setDataSediment] = useState({
        stationCode: '',
        numberOfLayer: '',
        partOfLayer: '',
        dryWeight: 0,
        radius: 0,
        tubeHeight: 0,
        bulkDensity: 0,
        cOrganic: 0,
        soilCarbonDensity: 0,
        thicknessInterval: 0,
        amountCarbon: 0,
    });
    const [carbonSediment, setCarbonSediment] = useState([]);
    const [sumCarbon, setSumCarbon] = useState(0);

    const onDensity = (e) => {
        setDensity(e.target.value);
        document.getElementById('soilDensity').reset();
    };

    const onDataSediment = (e) => {
        setDataSediment({
            ...dataSediment,
            [e.target.name]: e.target.value,
        });
    };

    const calculateBulkDensity = (e) => {
        const bulkDensityValue = bulkDensity(
            Number(dataSediment.dryWeight),
            Number(dataSediment.radius),
            Number(dataSediment.tubeHeight),
        );
        setDataSediment({
            ...dataSediment,
            bulkDensity: bulkDensityValue.toFixed(6),
        });
        e.preventDefault();
    };

    const calculateSoilDensity = (e) => {
        e.preventDefault();
        const soilDensityValue = soilCarbonDensity(
            Number(dataSediment.bulkDensity),
            parseFloat(dataSediment.bulkDensity),
        );
        setDataSediment({
            ...dataSediment,
            soilCarbonDensity: soilDensityValue.toFixed(6),
        });
    };

    const saveDataInArray = () => {
        setFinalData([...finalData, dataSediment]);
        setNotifSaveData(!notifSaveData);
    };

    const calulateAmountCarbon = (e) => {
        e.preventDefault();
        const amountCarbonValue = amountCarbonInCoreSection(
            Number(dataSediment.soilCarbonDensity),
            Number(dataSediment.thicknessInterval),
        );
        setDataSediment({
            ...dataSediment,
            amountCarbon: amountCarbonValue.toFixed(6),
        });
    };

    const saveDataInLocalStorage = () => {
        localStorage.setItem('dataSediment', JSON.stringify(finalData));
        setNotifSaveData(!notifSaveData);
    };

    const dataSedimentCarbon = JSON.parse(localStorage.getItem('dataSediment'));

    const onCarbonSediment = (e) => {
        if (e.target.checked == true) {
            setCarbonSediment([...carbonSediment, e.target.value]);
        }
        console.log(carbonSediment);
    };

    const sumCarbonSediment = (e) => {
        e.preventDefault();
        const value = carbonSediment.reduce((a, b) => Number(a) + Number(b), 0);
        setSumCarbon(value.toFixed(6));
    };

    return (
        <>
            <div className='flex flex-wrap justify-center'>
                <CardCalculator>
                    <div className='flex'>
                        <CardCalculator.Title
                            border={
                                density === 'Bulk Density'
                                    ? 'border-x-4 border-t-4 border-mrv-sky-200'
                                    : 'none'
                            }
                        >
                            <input
                                type='button'
                                value='Bulk Density'
                                onClick={onDensity}
                            />
                        </CardCalculator.Title>
                        <CardCalculator.Title
                            border={
                                density === 'Soil Carbon Density'
                                    ? 'border-x-4 border-t-4 border-mrv-sky-200'
                                    : 'none'
                            }
                        >
                            <input
                                type='button'
                                value='Soil Carbon Density'
                                onClick={onDensity}
                            />
                        </CardCalculator.Title>
                    </div>

                    {density === 'Bulk Density' ? (
                        <CardCalculator.Content>
                            <form
                                onChange={onDataSediment}
                                onSubmit={calculateBulkDensity}
                                id='bulkDensity'
                            >
                                <div className='flex flex-col mb-3'>
                                    <label className='font-poppins text-white text-sm mb-2'>
                                        Station code
                                    </label>
                                    <input
                                        className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                        type='text'
                                        name='stationCode'
                                        value={dataSediment.stationCode}
                                        placeholder='Input the stationCode'
                                    />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-poppins text-white text-sm mb-2'>
                                        Number of layer
                                    </label>
                                    <input
                                        className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                        type='number'
                                        name='numberOfLayer'
                                        placeholder='Input number of layer'
                                    />
                                </div>

                                <div className='flex flex-col mb-3'>
                                    <label className='font-poppins text-white text-sm mb-2'>
                                        Select Layer
                                    </label>
                                    <input
                                        className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                        type='number'
                                        name='partOfLayer'
                                        placeholder='input the selected layer'
                                    />
                                    {/* <select
                                        className='p-1 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 font-poppins text-sm shadow-md'
                                        onChange={onSelectLayer}
                                    >
                                        <option>Select the layer</option>
                                        {selectLayer.map((items, index) => (
                                            <option key={index} value={items}>
                                                {items}
                                            </option>
                                        ))}
                                    </select> */}
                                </div>
                                <Input
                                    wide='w-5/6'
                                    unit='g'
                                    type='number'
                                    name='dryWeight'
                                    placeholder='Input Dry Weight'
                                >
                                    Dry Weight
                                </Input>
                                <div>
                                    <h3 className='font-semibold antialiased tracking-wider font-poppins text-white text-sm mb-2'>
                                        Sample Volume :
                                    </h3>
                                    <Input
                                        wide='w-5/6'
                                        unit='cm'
                                        type='number'
                                        name='radius'
                                        placeholder='Input Tube Radius'
                                    >
                                        Radius (r<sup>2</sup>)
                                    </Input>
                                    <Input
                                        wide='w-5/6'
                                        unit='cm'
                                        type='number'
                                        name='tubeHeight'
                                        placeholder='Input Tube Height'
                                    >
                                        Tube Height
                                    </Input>
                                </div>
                                <div className='flex gap-3'>
                                    <Button bgButton='bg-mrv-red' type='submit'>
                                        Calculate
                                    </Button>
                                    <Button
                                        bgButton='bg-mrv-red'
                                        onClick={() =>
                                            document
                                                .getElementById('bulkDensity')
                                                .reset()
                                        }
                                    >
                                        Reset
                                    </Button>
                                </div>
                            </form>
                            <div className='mt-4 flex flex-col'>
                                <p className='font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1'>
                                    -------------- Result --------------
                                </p>
                                <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                    Bulk Density :<br />
                                    <span className='font-semibold tracking-wide inline-block mt-1'>
                                        {dataSediment.bulkDensity} g/cm
                                        <sup>3</sup>
                                    </span>
                                </p>
                            </div>
                        </CardCalculator.Content>
                    ) : (
                        <CardCalculator.Content>
                            <form
                                id='soilDensity'
                                onSubmit={calculateSoilDensity}
                                onChange={onDataSediment}
                            >
                                <div className='flex flex-col mb-3'>
                                    <label className='font-poppins text-white text-sm mb-2'>
                                        Bulk Density
                                    </label>
                                    <input
                                        className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                        type='number'
                                        value={dataSediment.bulkDensity}
                                        name='bulkDensity'
                                    />
                                </div>
                                <Input
                                    wide='w-5/6'
                                    unit='g/m^3'
                                    wUnit='2/6'
                                    type='text'
                                    name='cOrganic'
                                    placeholder='Input % C Organic'
                                >
                                    % C Organic
                                </Input>
                                <div className='flex gap-3'>
                                    <Button bgButton='bg-mrv-red' type='submit'>
                                        Calculate
                                    </Button>
                                    <Button
                                        bgButton='bg-mrv-red'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .getElementById('soilDensity')
                                                .reset();
                                        }}
                                    >
                                        Reset
                                    </Button>
                                </div>
                            </form>
                            <div className='mt-4 flex flex-col'>
                                <p className='font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1'>
                                    -------------- Result --------------
                                </p>
                                <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                    Soil Carbon Density :<br />
                                    <span className='font-semibold tracking-wide inline-block mt-1'>
                                        {dataSediment.soilCarbonDensity} g/cm
                                        <sup>3</sup>
                                    </span>
                                </p>
                            </div>
                        </CardCalculator.Content>
                    )}
                </CardCalculator>

                {/*============= Amount Carbon in Core Section =============*/}
                <CardCalculator>
                    <CardCalculator.Title wide='w-60'>
                        Amount Carbon in Core Section
                    </CardCalculator.Title>
                    <CardCalculator.Content>
                        <form
                            onChange={onDataSediment}
                            onSubmit={calulateAmountCarbon}
                            id='amountCarbon'
                        >
                            <div className='flex flex-col mb-3'>
                                <label className='font-poppins text-white text-sm mb-2'>
                                    Soil carbon density
                                </label>
                                <input
                                    className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                    type='number'
                                    name='soilCarbonDensity'
                                    value={dataSediment.soilCarbonDensity}
                                />
                            </div>
                            <Input
                                wide='w-5/6'
                                unit='cm'
                                type='number'
                                name='thicknessInterval'
                                placeholder='Input thickness interval'
                            >
                                Thickness interval
                            </Input>
                            <div className='flex gap-3'>
                                <Button
                                    bgButton='bg-mrv-red'
                                    type='submit'
                                    onClick={calulateAmountCarbon}
                                >
                                    Calculate
                                </Button>
                                <Button
                                    onClick={() =>
                                        document
                                            .getElementById('amountCarbon')
                                            .reset()
                                    }
                                    bgButton='bg-mrv-red'
                                >
                                    Reset
                                </Button>
                            </div>
                        </form>
                        <div className='mt-4 flex flex-col'>
                            <p className='font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1'>
                                -------------- Result --------------
                            </p>
                            <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                Amount Carbon in Core Section :<br />
                                <span className='font-semibold tracking-wide inline-block mt-1'>
                                    {dataSediment.amountCarbon} g/cm<sup>3</sup>
                                </span>
                            </p>
                            {dataSediment.amountCarbon != 0 ? (
                                <Button
                                    onClick={saveDataInArray}
                                    bgButton='bg-mrv-sky-100 mt-3'
                                >
                                    Save
                                </Button>
                            ) : (
                                <div />
                            )}
                        </div>
                    </CardCalculator.Content>
                </CardCalculator>
                {/*============= END Amount Carbon in Core Section =============*/}

                {/*============= Summed Core Carbon =============*/}

                <CardCalculator>
                    <CardCalculator.Title wide='w-60'>
                        Summed Core Carbon
                    </CardCalculator.Title>
                    <CardCalculator.Content>
                        <form onSubmit={sumCarbonSediment}>
                            <div className='flex flex-col mb-3'>
                                <label className='font-poppins text-white text-sm border-b-2'>
                                    Select data
                                </label>
                                {/* <input
                                    className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                    type='number'
                                    name='soilCarbonDensity'
                                /> */}
                                {dataSedimentCarbon != null
                                    ? dataSedimentCarbon.map((items, index) => (
                                          <div
                                              key={index}
                                              className='flex justify-between items-center font-poppins text-sm text-white border-b-2 border-b-slate-200 py-1'
                                          >
                                              <div>
                                                  <p>
                                                      Layer :{' '}
                                                      {items.partOfLayer}
                                                  </p>
                                                  <p>
                                                      Carbon :{' '}
                                                      {items.amountCarbon}
                                                  </p>
                                              </div>
                                              <input
                                                  value={items.amountCarbon}
                                                  type='checkbox'
                                                  onChange={onCarbonSediment}
                                              />
                                          </div>
                                      ))
                                    : ''}
                            </div>
                            <div className='flex gap-3'>
                                <Button bgButton='bg-mrv-red' type='submit'>
                                    Calculate
                                </Button>
                                <Button
                                    bgButton='bg-mrv-red'
                                    onClick={() => localStorage.clear()}
                                >
                                    Reset
                                </Button>
                            </div>
                        </form>
                        <div className='mt-4 flex flex-col'>
                            <p className='font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1'>
                                -------------- Result --------------
                            </p>
                            <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                Summed core carbon :<br />
                                <span className='font-semibold tracking-wide inline-block mt-1'>
                                    {sumCarbon} g/cm<sup>3</sup>
                                </span>
                            </p>
                        </div>
                    </CardCalculator.Content>
                </CardCalculator>

                {/*============= END Summed Core Carbon =============*/}
            </div>

            {/*============= POP UP Status =============*/}

            <div
                className={`h-screen w-screen top-0 fixed bg-black bg-opacity-50 ${
                    notifSaveData ? 'flex' : 'hidden'
                } justify-center items-center`}
            >
                <div className='bg-slate-100 flex flex-col justify-center items-center w-60 h-32 rounded-md shadow-md p-2'>
                    <p className='text-lg font-semibold font-poppins'>Status</p>
                    <p className='font-poppins mb-3'>Sucess save data!</p>
                    <Button onClick={saveDataInLocalStorage}>OK</Button>
                </div>
            </div>

            {/*============= END POP UP Status =============*/}
        </>
    );
}
