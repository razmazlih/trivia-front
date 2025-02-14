'use client';
import { Link } from '@heroui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MainFooter = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 mb-7 mt-14">
            <div className="flex gap-5">
                <Link href="#" className='text-gray-950' aria-label="Facebook">
                    <FaFacebook />
                </Link>
                <Link href="#" className='text-gray-950' aria-label="Twitter">
                    <FaTwitter />
                </Link>
                <Link href="#" className='text-gray-950' aria-label="Instagram">
                    <FaInstagram />
                </Link>
                <Link href="#" className='text-gray-950' aria-label="LinkedIn">
                    <FaLinkedin />
                </Link>
            </div>
            <div className="flex gap-6">
                <Link href="#" className='text-gray-950'>Privacy Policy</Link>
                <Link href="#" className='text-gray-950'>Terms of Service</Link>
                <Link href="#" className='text-gray-950'>Help</Link>
            </div>
        </div>
    );
};

export default MainFooter;
