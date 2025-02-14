'use client';
import { useState, useEffect } from 'react';
import { Button, Image } from '@heroui/react';
import nextImage from 'next/image';

const MainSection = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isClient) {
        return null; // לא מרנדר כלום עד שהלקוח מוכן
    }

    return (
        <div>
            <section>
                <h1 className="text-3xl lg:text-4xl lg:mt-10 text-center font-bold">
                    Welcome to TriviaMaster!
                </h1>
                <p className="mt-4 text-gray-500 text-center text-lg">
                    Dive into the world of trivia and challenge your knowledge!
                </p>
            </section>
            <div className="flex justify-center mt-8 lg:mt-12">
                <Button
                    variant="shadow"
                    color="primary"
                    className="text-white font-semibold"
                    size="lg"
                >
                    Start the Trivia
                </Button>
            </div>
            <section className="flex flex-wrap justify-center gap-16 mt-10 lg:mt-16 lg:gap-20">
                <Image
                    as={nextImage}
                    shadow="lg"
                    alt="lamp"
                    src="/lamp.png"
                    width={windowWidth > 768 ? 300 : 200}
                    height={windowWidth > 768 ? 300 : 200}
                    className="lg:w-[500px] lg:h-[300px]"
                    isBlurred
                />
                <Image
                    as={nextImage}
                    alt="people"
                    src="/people.png"
                    width={windowWidth > 768 ? 300 : 200}
                    height={windowWidth > 768 ? 300 : 200}
                    className="lg:w-[300px] lg:h-[300px]"
                    isBlurred
                />
            </section>
        </div>
    );
};

export default MainSection;