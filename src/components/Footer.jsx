import macacaLogo from '../assets/img/logo-text.png';
import { Link } from 'react-router-dom';
import { BiCopyright } from 'react-icons/bi';

export default function Footer() {
    return (
        <footer className='bg-mrv-sky-200 p-5 flex flex-wrap justify-between gap-10 text-slate-50 font-poppins'>
            <div>
                <img src={macacaLogo} alt='macaca' className=' w-48' />
                <p className='flex items-center gap-1 text-xs tracking-tight antialiased'>
                    <span>
                        <BiCopyright />
                    </span>
                    2023 Copyright macaca.com
                </p>
            </div>
            <div className='w-72'>
                <h3 className='font-semibold text-lg mb-2'>Contacts</h3>
                <p className='text-sm'>
                    jl. Raya Palka Km. 3 Sindangsari, Pabuaran, Kab. Serang
                    Provinsi Banten. <br />
                    Tel. +62 89 3489349038 <br />
                    Fax. +62 321 934692023 <br />
                    E-mail:{' '}
                    <span className='text-sky-800 underline'>
                        macaca@gmail.com
                    </span>
                </p>
            </div>
            <div>
                <h3 className='font-semibold text-lg mb-2'>Main Menu</h3>
                <ul className='text-sm'>
                    <li>
                        <Link className='text-sky-800 underline' to={`#`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='text-sky-800 underline' to={`#`}>
                            Calculator
                        </Link>
                    </li>
                    <li>
                        <Link className='text-sky-800 underline' to={`#`}>
                            Tutorials
                        </Link>
                    </li>
                    <li>
                        <Link className='text-sky-800 underline' to={`#`}>
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='w-72'>
                <h3 className='font-semibold text-lg mb-2'>Photos</h3>
                <p className='text-sm'>
                    All Image are copyrighted by their owners. If you own the
                    rights to an image and it is not credited, or you do not
                    want it to appear on our site, please contact us at{' '}
                    <span className='text-sky-800 underline'>
                        macaca@gmail.com
                    </span>
                </p>
            </div>
        </footer>
    );
}
