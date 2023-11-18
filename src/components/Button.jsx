/* eslint-disable react/prop-types */
export default function Button({
    children,
    bgButton = 'bg-mrv-sky-100',
    ...props
}) {
    return (
        <button
            {...props}
            className={`${bgButton} py-1 px-3 rounded-md shadow-md text-white font-poppins font-semibold text-sm`}
        >
            {children}
        </button>
    );
}
