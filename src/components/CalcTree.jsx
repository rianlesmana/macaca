import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Button from './Button';
import CardCalculator from './CardCalculator';
import Input from './Input';
import avicenniaAlba from '../assets/img/Avicennia alba.jpg';
import avicenniaMarina from '../assets/img/Avicennia marina.jpg';
import avicenniaOfficinalis from '../assets/img/Avicennia officinalis.jpg';
import bruguieraCylindrica from '../assets/img/Bruguiera cylindrica.jpg';
import rhizophoraApiculata from '../assets/img/Rhizophora apiculata.jpg';
import rhizophoraMucronata from '../assets/img/Rhizophora mucronata.jpg';
import rhizophoraStylosa from '../assets/img/Rhizophora stylosa.jpg';
import {
    agbAvcAlba,
    agbAvcMarina,
    agbAvcOfficinalis,
    agbBrgCylindrica,
    agbRzpApiculata,
    agbRzpMucronata,
    agbRzpStylosa,
} from '../Calc/agbEquation';
import {
    bgbAvcAlba,
    bgbAvcMarina,
    bgbAvcOfficinalis,
    bgbBrgCylindrica,
    bgbRzpApiculata,
    bgbRzpMucronata,
    bgbRzpStylosa,
} from '../Calc/bgbEquation';
// import ExportToExcel from '../export/ExportToExcel';

export default function CalcTree() {
    const dataCarbon = [];
    const finalResult = localStorage.getItem('dataSpecies')
        ? JSON.parse(localStorage.getItem('dataSpecies'))
        : [];

    const resultCarbonArea = localStorage.getItem('dataCarbonArea')
        ? JSON.parse(localStorage.getItem('dataCarbonArea'))
        : [];

    const [species, setSpecies] = useState(null);
    const [viewResult, setViewResult] = useState(false);
    const [notifSaveData, setNotifSaveData] = useState(false);
    const [viewFullData, setViewFullData] = useState(false);
    const [result, setResult] = useState({
        stationCode: null,
        species: null,
        diameter: null,
        height: null,
        agb: null,
        bgb: null,
        carbonAgb: null,
        carbonBgb: null,
        carbonTotal: null,
    });
    const [carbonArea, setCarbonArea] = useState({
        stationCode: '',
        totalCarbon: null,
        areaOfPlot: null,
        carbonAreaMet: 0,
        carbonAreaHek: 0,
    });

    const listOfSpecies = [
        'Avicennia alba',
        'Avicennia marina',
        'Avicennia officinalis',
        'Bruguiera cylindrica',
        'Rhizophora apiculata',
        'Rhizophora mucronata',
        'Rhizophora stylosa',
    ];

    const changeSpecies = (e) => {
        const value = e.target.value;
        setSpecies(value);
    };

    const onChangeForm = (e) => {
        setResult({
            ...result,
            [e.target.name]: e.target.value,
        });
    };

    const calCulateBiomass = (e) => {
        e.preventDefault();
        if (result.species == 'Avicennia alba') {
            const agbValue = agbAvcAlba(parseFloat(result.diameter));
            const bgbValue = bgbAvcAlba(parseFloat(result.diameter));
            setResult({
                ...result,
                agb: agbValue.toFixed(6),
                bgb: bgbValue.toFixed(6),
            });
        }

        if (result.species == 'Avicennia marina') {
            const agbValue = agbAvcMarina(parseFloat(result.diameter));
            const bgbValue = bgbAvcMarina(parseFloat(result.diameter));
            setResult({
                ...result,
                agb: agbValue.toFixed(6),
                bgb: bgbValue.toFixed(6),
            });
        }

        if (result.species == 'Avicennia officinalis') {
            const agbValue = agbAvcOfficinalis(parseFloat(result.diameter));
            const bgbValue = bgbAvcOfficinalis(parseFloat(result.diameter));
            setResult({
                ...result,
                agb: agbValue.toFixed(6),
                bgb: bgbValue.toFixed(6),
            });
        }

        if (result.species == 'Bruguiera cylindrica') {
            const agbValue = agbBrgCylindrica(parseFloat(result.diameter));
            const bgbValue = bgbBrgCylindrica(parseFloat(result.diameter));
            setResult({
                ...result,
                agb: agbValue.toFixed(6),
                bgb: bgbValue.toFixed(6),
            });
        }

        if (result.species == 'Rhizophora apiculata') {
            const agbValue = agbRzpApiculata(parseFloat(result.diameter));
            const bgbValue = bgbRzpApiculata(parseFloat(result.diameter));
            setResult({
                ...result,
                agb: agbValue.toFixed(6),
                bgb: bgbValue.toFixed(6),
            });
        }

        if (result.species == 'Rhizophora mucronata') {
            const agbValue = agbRzpMucronata(
                Number(result.diameter),
                Number(result.height),
            );
            const bgbValue = bgbRzpMucronata(
                Number(result.diameter),
                Number(result.height),
            );
            setResult({
                ...result,
                agb: agbValue.toFixed(6),
                bgb: bgbValue.toFixed(6),
            });
        }

        if (result.species == 'Rhizophora stylosa') {
            const agbValue = agbRzpStylosa(
                Number(result.diameter),
                Number(result.height),
            );
            const bgbValue = bgbRzpStylosa(
                Number(result.diameter),
                Number(result.height),
            );
            setResult({
                ...result,
                agb: agbValue.toFixed(6),
                bgb: bgbValue.toFixed(6),
            });
        }
    };

    const calCulateCarbon = (e) => {
        e.preventDefault();
        const carbonAgbValue = Number(result.agb) * 0.5;
        const carbonBgbValue = Number(result.bgb) * 0.5;
        const totalCarbon = Number(carbonAgbValue) + Number(carbonBgbValue);
        setResult({
            ...result,
            carbonAgb: carbonAgbValue.toFixed(6),
            carbonBgb: carbonBgbValue.toFixed(6),
            carbonTotal: totalCarbon.toFixed(6),
        });
    };

    const closePopUp = () => {
        setSpecies(null);
    };

    const onReset = () => {
        document.getElementById('bioMass').reset();
        document.getElementById('carbonEachTree').reset();
        setResult({
            species: null,
            diameter: null,
            height: null,
            agb: null,
            bgb: null,
            carbonAgb: null,
            carbonBgb: null,
            carbonTotal: null,
        });
    };

    const clearData = () => {
        localStorage.clear();
        setViewFullData(!viewFullData);
    };

    const saveValue = () => {
        finalResult.push(result);
        localStorage.setItem('dataSpecies', JSON.stringify(finalResult));
        setNotifSaveData(!notifSaveData);
    };

    const changeTotalCarbon = (e) => {
        if (e.target.checked == true) {
            dataCarbon.push(e.target.value);
        }
    };

    const onCarbonArea = (e) => {
        setCarbonArea({
            ...carbonArea,
            [e.target.name]: e.target.value,
        });
    };

    const sumCarbonArea = () => {
        const carbon =
            Number(carbonArea.totalCarbon) / Number(carbonArea.areaOfPlot);
        const conHektar = (Number(carbon) * 1000) / 10000;
        // const conHektar = Number(carbon) / 10000;
        setCarbonArea({
            ...carbonArea,
            carbonAreaMet: carbon.toFixed(6),
            carbonAreaHek: conHektar.toFixed(6),
        });
    };

    const finalResultCarbonArea = () => {
        resultCarbonArea.push(carbonArea);
        localStorage.setItem(
            'dataCarbonArea',
            JSON.stringify(resultCarbonArea),
        );
        setNotifSaveData(!notifSaveData);
    };

    const sumDataCarbon = () => {
        const data = dataCarbon;
        const sum = data.reduce((a, b) => Number(a) + Number(b), 0);
        setCarbonArea({
            ...carbonArea,
            totalCarbon: sum.toFixed(6),
        });
        setViewResult(!viewResult);
    };

    const data = localStorage.getItem('dataSpecies');
    const parseData = JSON.parse(data);
    const dataArea = JSON.parse(localStorage.getItem('dataCarbonArea'));
    console.log(parseData);

    // const excelData = [...dataArea, ...parseData];

    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {/*============= AGB & BGB =============*/}
                <CardCalculator>
                    <CardCalculator.Title wide='w-32'>
                        AGB & BGB
                    </CardCalculator.Title>
                    <CardCalculator.Content>
                        <form
                            onSubmit={calCulateBiomass}
                            id='bioMass'
                            onChange={onChangeForm}
                        >
                            <div className='flex flex-col gap-2 mb-3'>
                                <label
                                    htmlFor='species'
                                    className='font-poppins text-white text-sm'
                                >
                                    Species
                                    <span className='text-red-600 text-lg ml-1'>
                                        *
                                    </span>
                                </label>
                                <select
                                    id='species'
                                    name='species'
                                    className='p-1 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 font-poppins text-sm shadow-md'
                                    onChange={changeSpecies}
                                    required
                                >
                                    <option value={undefined}>
                                        Select Species
                                    </option>
                                    {listOfSpecies.map((value, index) => (
                                        <option key={index} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex flex-col mb-3'>
                                <label
                                    className='font-poppins text-white text-sm mb-2'
                                    htmlFor='stationCode'
                                >
                                    Station Code
                                    <span className='text-red-600 text-lg ml-1'>
                                        *
                                    </span>
                                </label>
                                <input
                                    className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                    type='text'
                                    name='stationCode'
                                    placeholder='Input Station Code'
                                    required
                                />
                            </div>
                            <Input
                                wide='w-5/6'
                                unit='cm'
                                type='text'
                                name='diameter'
                                placeholder='Input diameter of tree'
                                required
                            >
                                Diameter at Breast Height (DBH)
                                <span className='text-red-600 text-lg ml-1'>
                                    *
                                </span>
                            </Input>

                            {result.species != 'Rhizophora mucronata' ? (
                                ''
                            ) : (
                                <Input
                                    wide='w-5/6'
                                    unit='m'
                                    type='text'
                                    name='height'
                                    placeholder='Input height of tree'
                                >
                                    Height (H)
                                    <span className='text-red-600 text-lg ml-1'>
                                        *
                                    </span>
                                </Input>
                            )}

                            {result.species != 'Rhizophora stylosa' ? (
                                ''
                            ) : (
                                <Input
                                    wide='w-5/6'
                                    unit='m'
                                    type='text'
                                    name='height'
                                    placeholder='Input height of tree'
                                >
                                    Height (H)
                                    <span className='text-red-600 text-lg ml-1'>
                                        *
                                    </span>
                                </Input>
                            )}
                            <Button bgButton='bg-mrv-red' type='submit'>
                                Calculate
                            </Button>
                        </form>

                        {result.agb || result.bgb != null ? (
                            <div className='mt-4'>
                                <p className='font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1'>
                                    -------------- Result --------------
                                </p>
                                <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                    Above Ground Biomass :<br />
                                    <span className='font-semibold tracking-wide'>
                                        {result.agb} Kg
                                    </span>
                                </p>
                                <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                    Below Ground Biomass :<br />
                                    <span className='font-semibold tracking-wide'>
                                        {result.bgb} Kg
                                    </span>
                                </p>
                            </div>
                        ) : (
                            <div />
                        )}
                    </CardCalculator.Content>
                </CardCalculator>
                {/*============= END AGB & BGB =============*/}

                {/*============= Carbon Content of Each Tree =============*/}
                <CardCalculator>
                    <CardCalculator.Title wide='w-60'>
                        Carbon Content of Each Tree
                    </CardCalculator.Title>
                    <CardCalculator.Content>
                        <form
                            onSubmit={calCulateCarbon}
                            id='carbonEachTree'
                            onChange={onChangeForm}
                        >
                            <div className='flex flex-col gap-2 mb-3'>
                                <label
                                    htmlFor='species'
                                    className='font-poppins text-white text-sm'
                                >
                                    Species
                                    <span className='text-red-600 text-lg ml-1'>
                                        *
                                    </span>
                                </label>
                                <select
                                    id='species'
                                    name='species'
                                    value={
                                        result.species != null
                                            ? result.species
                                            : ''
                                    }
                                    className='p-1 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 font-poppins text-sm shadow-md'
                                    onChange={changeSpecies}
                                    required
                                >
                                    <option>Select Species</option>
                                    {listOfSpecies.map((value, index) => (
                                        <option key={index} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <Input
                                wide='w-5/6'
                                unit='kg'
                                type='number'
                                name='agb'
                                value={result.agb != null ? result.agb : ''}
                                placeholder='Input value AGB'
                                required
                            >
                                Above Ground Biomass (AGB)
                                <span className='text-red-600 text-lg ml-1'>
                                    *
                                </span>
                            </Input>
                            <Input
                                wide='w-5/6'
                                unit='kg'
                                type='number'
                                name='bgb'
                                value={result.bgb != null ? result.bgb : ''}
                                placeholder='Input value BGB'
                                required
                            >
                                Below Ground Biomass (BGB)
                                <span className='text-red-600 text-lg ml-1'>
                                    *
                                </span>
                            </Input>
                            <Button bgButton='bg-mrv-red' type='submit'>
                                Calculate
                            </Button>
                            <Button
                                bgButton='bg-mrv-red mt-3 ml-2'
                                onClick={onReset}
                            >
                                Reset
                            </Button>
                        </form>

                        {result.carbonAgb && result.carbonBgb != null ? (
                            <div className={`mt-4 flex flex-col`}>
                                <p className='font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1'>
                                    -------------- Result --------------
                                </p>
                                <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                    Carbon AGB :<br />
                                    <span className='font-semibold tracking-wide'>
                                        {result.carbonAgb} Kg C
                                    </span>
                                </p>
                                <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                    Carbon BGB :<br />
                                    <span className='font-semibold tracking-wide'>
                                        {result.carbonBgb} Kg C
                                    </span>
                                </p>
                                <Button
                                    bgButton='mt-3 bg-mrv-sky-100 py-2'
                                    onClick={saveValue}
                                >
                                    Save Value
                                </Button>
                            </div>
                        ) : (
                            <div />
                        )}
                    </CardCalculator.Content>
                </CardCalculator>
                {/*============= END Carbon Content of Each Tree =============*/}

                {/*============= Carbon in Live Tree Component =============*/}
                <CardCalculator>
                    <CardCalculator.Title wide='w-60'>
                        Carbon in Live Tree Component
                    </CardCalculator.Title>
                    <CardCalculator.Content>
                        <div id='carbonLiveTreeComponent'>
                            <div className='flex flex-col mb-3'>
                                <label
                                    className='font-poppins text-white text-sm mb-2'
                                    htmlFor='stationCode'
                                >
                                    Station Code
                                    <span className='text-red-600 text-lg ml-1'>
                                        *
                                    </span>
                                </label>
                                {/* <input
                                    className="rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md"
                                    type="text"
                                    name="stationCode"
                                    placeholder="Input Station Code"
                                    onChange={onCarbonArea}
                                /> */}
                                <input
                                    type='text'
                                    onChange={onCarbonArea}
                                    name='stationCode'
                                    className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                    placeholder='Input Station Code'
                                    required
                                />
                            </div>
                            <div className='flex flex-col mb-3'>
                                <label className='font-poppins text-white text-sm mb-2'>
                                    Carbon Content of Tree
                                    <span className='text-red-600 text-lg ml-1'>
                                        *
                                    </span>
                                </label>
                                <input
                                    className='rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md'
                                    type='number'
                                    name='carbonContentOfTree'
                                    placeholder='Select carbon content of tree'
                                    value={
                                        carbonArea.totalCarbon != null
                                            ? carbonArea.totalCarbon
                                            : ''
                                    }
                                    onChange={onCarbonArea}
                                    required
                                />
                                {parseData != null ? (
                                    <Button
                                        bgButton={`${
                                            viewResult
                                                ? 'bg-mrv-red'
                                                : 'bg-mrv-green'
                                        } mt-3 py-2`}
                                        onClick={() =>
                                            setViewResult(!viewResult)
                                        }
                                    >
                                        {viewResult ? 'Close' : 'Change'}
                                    </Button>
                                ) : (
                                    ''
                                )}
                            </div>

                            {viewResult ? (
                                <div className='absolute w-[18.5rem] h-[22rem] bg-white rounded-md overflow-scroll p-3'>
                                    {/** Get dataSpecies From local storage */}
                                    {parseData.map((value, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='flex justify-between items-center border-b-2 py-1'
                                            >
                                                <div className='font-poppins text-sm'>
                                                    <label
                                                        className='font-semibold'
                                                        htmlFor={value.species}
                                                    >
                                                        {value.species}
                                                    </label>
                                                    <div className='text-xs'>
                                                        <p>
                                                            Station:{' '}
                                                            {value.stationCode}
                                                        </p>
                                                        <p>
                                                            Carbon:{' '}
                                                            {value.carbonTotal}{' '}
                                                            kg
                                                        </p>
                                                    </div>
                                                </div>
                                                <input
                                                    type='checkbox'
                                                    value={value.carbonTotal}
                                                    name={value.species}
                                                    onChange={changeTotalCarbon}
                                                />
                                            </div>
                                        );
                                    })}

                                    <Button
                                        bgButton='bg-mrv-green mt-5'
                                        onClick={sumDataCarbon}
                                    >
                                        Change
                                    </Button>
                                </div>
                            ) : (
                                ''
                            )}

                            <Input
                                wide='w-5/6'
                                unit='m2'
                                type='number'
                                name='areaOfPlot'
                                placeholder='Input Area Of Plot'
                                value={
                                    carbonArea.areaOfPlot != null
                                        ? carbonArea.areaOfPlot
                                        : ''
                                }
                                onChange={onCarbonArea}
                            >
                                Area Of Plot
                                <span className='text-red-600 text-lg ml-1'>
                                    *
                                </span>
                            </Input>
                            <Button
                                bgButton='bg-mrv-red'
                                onClick={sumCarbonArea}
                            >
                                Calculate
                            </Button>
                            <Button
                                bgButton='bg-mrv-red ml-2'
                                onClick={clearData}
                            >
                                Reset
                            </Button>
                        </div>

                        <div className='flex flex-col'>
                            <p className='font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1'>
                                -------------- Result --------------
                            </p>
                            <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                Carbon (kgC/m<sup>2</sup>) :<br />
                                <span className='font-semibold tracking-wide'>
                                    {carbonArea.carbonAreaMet} KgC/m<sup>2</sup>
                                </span>
                            </p>
                            <p className='font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2'>
                                Carbon (tonC/ha) :<br />
                                <span className='font-semibold tracking-wide'>
                                    {carbonArea.carbonAreaHek} tonC/ha
                                </span>
                            </p>
                            <Button
                                bgButton='mt-3 bg-mrv-sky-100 py-2'
                                onClick={finalResultCarbonArea}
                            >
                                Save Data
                            </Button>
                            <Button
                                onClick={() => setViewFullData(!viewFullData)}
                                bgButton='bg-mrv-red mt-3 py-2'
                            >
                                View Result
                            </Button>
                        </div>
                    </CardCalculator.Content>
                </CardCalculator>
                {/*============= END Carbon in Live Tree Component =============*/}
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
                    <Button onClick={() => setNotifSaveData(!notifSaveData)}>
                        OK
                    </Button>
                </div>
            </div>

            {/*============= END POP UP Status =============*/}

            {/*============= POP UP View FUll Data =============*/}

            <div
                className={`h-screen w-screen top-0 fixed bg-black bg-opacity-60 ${
                    viewFullData ? 'flex' : 'hidden'
                } justify-center items-center`}
            >
                <div className='bg-slate-100 w-80 md:w-96 h-[33rem] mt-12 rounded-md shadow-md p-3'>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => setViewFullData(!viewFullData)}
                            className='text-xl text-slate-400'
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <div className='h-[85%] overflow-scroll'>
                        <h1 className='font-poppins font-semibold text-center text-lg'>
                            Result Calculating Carbon
                        </h1>
                        <p className='font-poppins text-sm font-semibold text-slate-800 mt-3 mb-2'>
                            Carbon data on station mangrove:
                        </p>
                        {dataArea != null ? (
                            dataArea.map((item, index) => (
                                <table
                                    className='font-poppins text-sm border-y-2 w-full border-y-slate-400'
                                    key={index}
                                >
                                    <tr>
                                        <td>Station code</td>
                                        <td>:</td>
                                        <td>{item.stationCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Area</td>
                                        <td>:</td>
                                        <td>
                                            {item.areaOfPlot} m<sup>2</sup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Carbon</td>
                                        <td>:</td>
                                        <td>
                                            {item.carbonAreaMet} KgC/m
                                            <sup>2</sup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Carbon (ton/ha)</td>
                                        <td>:</td>
                                        <td>{item.carbonAreaHek} ton/ha</td>
                                    </tr>
                                </table>
                            ))
                        ) : (
                            <p>There is no calculation data yet</p>
                        )}
                        <p className='font-poppins text-sm font-semibold text-slate-800 mt-3 mb-2'>
                            Carbon data on each tree :
                        </p>
                        {parseData != null ? (
                            parseData.map((item, index) => (
                                <table
                                    key={index}
                                    className='text-sm font-poppins w-full border-t-2 border-y-slate-400 border-dashed mb-1'
                                >
                                    <tr>
                                        <td>Species</td>
                                        <td>:</td>
                                        <td>{item.species}</td>
                                    </tr>
                                    <tr>
                                        <td>Carbon on AGB</td>
                                        <td>:</td>
                                        <td>{item.carbonAgb} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Carbon on BGB</td>
                                        <td>:</td>
                                        <td>{item.carbonBgb} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Total Carbon</td>
                                        <td>:</td>
                                        <td>{item.carbonTotal} kg</td>
                                    </tr>
                                </table>
                            ))
                        ) : (
                            <p>There is no calculation data yet</p>
                        )}
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <Button bgButton='bg-mrv-red' onClick={clearData}>
                            Clear Data
                        </Button>
                    </div>
                </div>
            </div>

            {/*============= END POP UP View FUll Data =============*/}

            {/*============= POP UP Speciess =============*/}

            {/** Pop up Avicennia alba */}
            <div
                className={`${
                    species == 'Avicennia alba' ? 'fixed' : 'hidden'
                } z-30 w-screen h-screen bg-black bg-opacity-60 top-0 pt-14 left-0`}
            >
                <div className='flex justify-center items-center h-full w-full'>
                    <div className='bg-slate-50 w-96 p-5 flex flex-col justify-center items-center gap-5 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl text-center text-slate-800 border-b-2 border-b-slate-400 w-60'>
                            Avicennia alba
                        </h2>
                        <img
                            src={avicenniaAlba}
                            alt='Avicennia alba'
                            className='w-80'
                        />
                        <Button onClick={closePopUp}>Next</Button>
                    </div>
                </div>
            </div>
            {/** END */}

            {/** Pop up Avicennia marina */}
            <div
                className={`${
                    species == 'Avicennia marina' ? 'fixed' : 'hidden'
                } z-30 w-screen h-screen bg-black bg-opacity-60 top-0 pt-14 left-0`}
            >
                <div className='flex justify-center items-center h-full w-full'>
                    <div className='bg-slate-50 w-96 p-5 flex flex-col justify-center items-center gap-5 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl text-center text-slate-800 border-b-2 border-b-slate-400 w-60'>
                            Avicennia marina
                        </h2>
                        <img
                            src={avicenniaMarina}
                            alt='Avicennia marina'
                            className='w-80'
                        />
                        <Button onClick={closePopUp}>Next</Button>
                    </div>
                </div>
            </div>
            {/** END */}

            {/** Pop up Avicennia officinalis */}
            <div
                className={`${
                    species == 'Avicennia officinalis' ? 'fixed' : 'hidden'
                } z-30 w-screen h-screen bg-black bg-opacity-60 top-0 pt-14 left-0`}
            >
                <div className='flex justify-center items-center h-full w-full'>
                    <div className='bg-slate-50 w-96 p-5 flex flex-col justify-center items-center gap-5 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl text-center text-slate-800 border-b-2 border-b-slate-400 w-60'>
                            Avicennia officinalis
                        </h2>
                        <img
                            src={avicenniaOfficinalis}
                            alt='Avicennia officinalis'
                            className='w-80'
                        />
                        <Button onClick={closePopUp}>Next</Button>
                    </div>
                </div>
            </div>
            {/** END */}

            {/** Pop up Avicennia Bruguiera cylindrica */}
            <div
                className={`${
                    species == 'Bruguiera cylindrica' ? 'fixed' : 'hidden'
                } z-30 w-screen h-screen bg-black bg-opacity-60 top-0 pt-14 left-0`}
            >
                <div className='flex justify-center items-center h-full w-full'>
                    <div className='bg-slate-50 w-96 p-5 flex flex-col justify-center items-center gap-5 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl text-center text-slate-800 border-b-2 border-b-slate-400 w-60'>
                            Bruguiera cylindrica
                        </h2>
                        <img
                            src={bruguieraCylindrica}
                            alt='Bruguiera cylindrica'
                            className='w-80'
                        />
                        <Button onClick={closePopUp}>Next</Button>
                    </div>
                </div>
            </div>
            {/** END */}

            {/** Pop up Rhizophora apiculata */}
            <div
                className={`${
                    species == 'Rhizophora apiculata' ? 'fixed' : 'hidden'
                } z-30 w-screen h-screen bg-black bg-opacity-60 top-0 pt-14 left-0`}
            >
                <div className='flex justify-center items-center h-full w-full'>
                    <div className='bg-slate-50 w-96 p-5 flex flex-col justify-center items-center gap-5 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl text-center text-slate-800 border-b-2 border-b-slate-400 w-60'>
                            Rhizophora apiculata
                        </h2>
                        <img
                            src={rhizophoraApiculata}
                            alt='Rhizophora apiculata'
                            className='w-80'
                        />
                        <Button onClick={closePopUp}>Next</Button>
                    </div>
                </div>
            </div>
            {/** END */}

            {/** Pop up Rhizophora mucronata */}
            <div
                className={`${
                    species == 'Rhizophora mucronata' ? 'fixed' : 'hidden'
                } z-30 w-screen h-screen bg-black bg-opacity-60 top-0 pt-14 left-0`}
            >
                <div className='flex justify-center items-center h-full w-full'>
                    <div className='bg-slate-50 w-96 p-5 flex flex-col justify-center items-center gap-5 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl text-center text-slate-800 border-b-2 border-b-slate-400 w-60'>
                            Rhizophora mucronata
                        </h2>
                        <img
                            src={rhizophoraMucronata}
                            alt='Rhizophora mucronata'
                            className='w-80'
                        />
                        <Button onClick={closePopUp}>Next</Button>
                    </div>
                </div>
            </div>
            {/** END */}

            {/** Pop up Rhizopora stylosa */}
            <div
                className={`${
                    species == 'Rhizophora stylosa' ? 'fixed' : 'hidden'
                } z-30 w-screen h-screen bg-black bg-opacity-60 top-0 pt-20 left-0`}
            >
                <div className='flex justify-center items-center h-full w-full'>
                    <div className='bg-slate-50 w-96 p-5 flex flex-col justify-center items-center gap-5 rounded-md shadow-md'>
                        <h2 className='font-semibold text-xl text-center text-slate-800 border-b-2 border-b-slate-400 w-60'>
                            Rhizophora stylosa
                        </h2>
                        <img
                            src={rhizophoraStylosa}
                            alt='Rhizopora stylosa'
                            className='w-80'
                        />
                        <Button onClick={closePopUp}>Next</Button>
                    </div>
                </div>
            </div>
            {/** END */}

            {/*============= END POP UP Speciess =============*/}
        </>
    );
}
