/* eslint-disable react/prop-types */
function CardCalculator({ children }) {
    return <div className='p-5'>{children}</div>;
}

function CardTitle({
    wide,
    border = 'border-x-4 border-t-4 border-mrv-sky-200',
    children,
}) {
    return (
        <h2
            className={`${border} rounded-t-md ${wide} p-1 font-poppins text-center text-sm font-semibold tracking-tight antialiased ml-1 transition-all duration-200`}
        >
            {children}
        </h2>
    );
}

// eslint-disable-next-line react/prop-types
function CardContent({ children }) {
    return (
        <div className='bg-gradient-to-r from-mrv-sky-200 to-mrv-green w-80 rounded-md py-5 px-3 shadow-md shadow-slate-400 transition-all duration-100'>
            {children}
        </div>
    );
}

CardCalculator.Title = CardTitle;
CardCalculator.Content = CardContent;

export default CardCalculator;
