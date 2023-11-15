import { useState } from "react";

import CardCalculator from "./CardCalculator";
import Button from "./Button";
import Input from "./Input";

export default function CalcSediment() {
    const [density, setDensity] = useState("Bulk Density");

    const onDensity = (e) => {
        setDensity(e.target.value);
    };
    return (
        <>
            <div className="flex flex-wrap justify-center">
                <CardCalculator>
                    <div className="flex">
                        <CardCalculator.Title
                            border={
                                density === "Bulk Density"
                                    ? "border-x-4 border-t-4 border-mrv-sky-200"
                                    : "none"
                            }
                        >
                            <input
                                type="button"
                                value="Bulk Density"
                                onClick={onDensity}
                            />
                        </CardCalculator.Title>
                        <CardCalculator.Title
                            border={
                                density === "Soil Carbon Density"
                                    ? "border-x-4 border-t-4 border-mrv-sky-200"
                                    : "none"
                            }
                        >
                            <input
                                type="button"
                                value="Soil Carbon Density"
                                onClick={onDensity}
                            />
                        </CardCalculator.Title>
                    </div>

                    {density === "Bulk Density" ? (
                        <CardCalculator.Content>
                            <form>
                                <div className="flex flex-col mb-3">
                                    <label className="font-poppins text-white text-sm mb-2">
                                        Number of layer
                                    </label>
                                    <input
                                        className="rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md"
                                        type="number"
                                        name="numberOfLayer"
                                    />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className="font-poppins text-white text-sm mb-2">
                                        Select Layer
                                    </label>
                                    <input
                                        className="rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md"
                                        type="number"
                                        name="partOfLayer"
                                    />
                                </div>
                                <Input
                                    wide="w-5/6"
                                    unit="g"
                                    type="number"
                                    name="dryWeight"
                                    placeholder="Input Dry Weight"
                                >
                                    Dry Weight
                                </Input>
                                <div>
                                    <h3 className="font-semibold antialiased tracking-wider font-poppins text-white text-sm mb-2">
                                        Sample Volume :
                                    </h3>
                                    <Input
                                        wide="w-5/6"
                                        unit="cm"
                                        type="number"
                                        name="radius"
                                        placeholder="Input Tube Radius"
                                    >
                                        Radius (r<sup>2</sup>)
                                    </Input>
                                    <Input
                                        wide="w-5/6"
                                        unit="cm"
                                        type="number"
                                        name="tubeHeight"
                                        placeholder="Input Tube Height"
                                    >
                                        Tube Height
                                    </Input>
                                </div>
                                <div className="flex gap-3">
                                    <Button bgButton="bg-mrv-red" type="submit">
                                        Calculate
                                    </Button>
                                    <Button bgButton="bg-mrv-red" type="submit">
                                        Reset
                                    </Button>
                                </div>
                            </form>
                            <div className="mt-4 flex flex-col">
                                <p className="font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1">
                                    -------------- Result --------------
                                </p>
                                <p className="font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2">
                                    Bulk Density :<br />
                                    <span className="font-semibold tracking-wide inline-block mt-1">
                                        20 g/cm<sup>3</sup>
                                    </span>
                                </p>
                            </div>
                        </CardCalculator.Content>
                    ) : (
                        <CardCalculator.Content>
                            <form>
                                <div className="flex flex-col mb-3">
                                    <label className="font-poppins text-white text-sm mb-2">
                                        Number of layer
                                    </label>
                                    <input
                                        className="rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md"
                                        type="number"
                                        name="numberOfLayer"
                                    />
                                </div>
                                <Input
                                    wide="w-5/6"
                                    unit="g/m^3"
                                    wUnit="2/6"
                                    type="number"
                                    name="cOrganic"
                                    placeholder="Input % C Organic"
                                >
                                    % C Organic
                                </Input>
                                <div className="flex gap-3">
                                    <Button bgButton="bg-mrv-red" type="submit">
                                        Calculate
                                    </Button>
                                    <Button bgButton="bg-mrv-red">Reset</Button>
                                </div>
                            </form>
                            <div className="mt-4 flex flex-col">
                                <p className="font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1">
                                    -------------- Result --------------
                                </p>
                                <p className="font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2">
                                    Soil Carbon Density :<br />
                                    <span className="font-semibold tracking-wide inline-block mt-1">
                                        20 g/cm<sup>3</sup>
                                    </span>
                                </p>
                            </div>
                        </CardCalculator.Content>
                    )}
                </CardCalculator>

                {/*============= Amount Carbon in Core Section =============*/}
                <CardCalculator>
                    <CardCalculator.Title wide="w-60">
                        Amount Carbon in Core Section
                    </CardCalculator.Title>
                    <CardCalculator.Content>
                        <form>
                            <div className="flex flex-col mb-3">
                                <label className="font-poppins text-white text-sm mb-2">
                                    Soil carbon density
                                </label>
                                <input
                                    className="rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md"
                                    type="number"
                                    name="soilCarbonDensity"
                                />
                            </div>
                            <Input
                                wide="w-5/6"
                                unit="cm"
                                type="number"
                                name="thicknessInterval"
                                placeholder="Input thickness interval"
                            >
                                Thickness interval
                            </Input>
                            <div className="flex gap-3">
                                <Button bgButton="bg-mrv-red" type="submit">
                                    Calculate
                                </Button>
                                <Button bgButton="bg-mrv-red">Reset</Button>
                            </div>
                        </form>
                        <div className="mt-4 flex flex-col">
                            <p className="font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1">
                                -------------- Result --------------
                            </p>
                            <p className="font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2">
                                Amount Carbon in Core Section :<br />
                                <span className="font-semibold tracking-wide inline-block mt-1">
                                    20 g/cm<sup>3</sup>
                                </span>
                            </p>
                        </div>
                    </CardCalculator.Content>
                </CardCalculator>
                {/*============= END Amount Carbon in Core Section =============*/}

                {/*============= Summed Core Carbon =============*/}

                <CardCalculator>
                    <CardCalculator.Title wide="w-60">
                        Summed Core Carbon
                    </CardCalculator.Title>
                    <CardCalculator.Content>
                        <form>
                            <div className="flex flex-col mb-3">
                                <label className="font-poppins text-white text-sm mb-2">
                                    Select Layer
                                </label>
                                <input
                                    className="rounded-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md"
                                    type="number"
                                    name="soilCarbonDensity"
                                />
                            </div>
                            <div className="flex gap-3">
                                <Button bgButton="bg-mrv-red" type="submit">
                                    Calculate
                                </Button>
                                <Button bgButton="bg-mrv-red">Reset</Button>
                            </div>
                        </form>
                        <div className="mt-4 flex flex-col">
                            <p className="font-poppins font-semibold text-white antialiased tracking-wider text-sm inline-block  w-full text-center py-1">
                                -------------- Result --------------
                            </p>
                            <p className="font-poppins text-sm tracking-tight text-white antialiased border-b-2 py-2">
                                Summed core carbon :<br />
                                <span className="font-semibold tracking-wide inline-block mt-1">
                                    20 g/cm<sup>3</sup>
                                </span>
                            </p>
                        </div>
                    </CardCalculator.Content>
                </CardCalculator>

                {/*============= END Summed Core Carbon =============*/}
            </div>
        </>
    );
}
