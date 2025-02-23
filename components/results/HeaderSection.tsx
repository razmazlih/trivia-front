"use client"
import { Image } from '@heroui/react';
import NextImage from "next/image";
import CountUp from 'react-countup';


const HeaderSection = ({ score }: { score: number }) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl  font-bold">Your Final Score</h1>
            <p className="px-10 py-5 text-4xl mt-2 text-white font-bold bg-primary rounded-lg">
            <CountUp end={score} duration={2} />%
            </p>
            <div className='mt-7'>
            <Image
                as={NextImage}
                alt="HeroUI hero Image"
                src="https://res.cloudinary.com/drlmg8tzf/image/upload/v1739878480/happy_eatx9s.png"
                width={224}
                height={150}
                isBlurred
                isZoomed
                loading='eager'
            />
            </div>
        </div>
    );
};

export default HeaderSection;
