/* eslint-disable react/prop-types */
export default function Input({
    type,
    name,
    children,
    unit,
    wide,
    wUnit = "w-1/6",
    ...props
}) {
    return (
        <div className="flex flex-col mb-4">
            <label className={`font-poppins text-white text-sm mb-2`}>
                {children}
            </label>
            <div className="flex">
                <input
                    className={`${wide} rounded-tl-md rounded-bl-md p-2 focus:outline-none focus:ring-4 transition-all duration-300 font-poppins text-sm shadow-md`}
                    type={type}
                    name={name}
                    {...props}
                />
                <div
                    className={`${wUnit} bg-slate-100 py-2 px-3 font-poppins font-semibold rounded-tr-md rounded-br-md text-sm border-l-2 border-l-sky-200 text-slate-700 shadow-md text-center`}
                >
                    {unit}
                </div>
            </div>
        </div>
    );
}
