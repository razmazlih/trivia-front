'use client';
import { Button, Image } from '@heroui/react';
import nextImage from 'next/image';

const MainSection = () => {
    return (
        <div>
            <section>
                <h1 className="text-3xl text-center font-bold">
                    Welcome to TriviaMaster!
                </h1>
                <p className="mt-4 text-gray-500 text-center">
                    Dive into the world of trivia and challenge your knowledge!
                </p>
            </section>
            <div className="flex justify-center mt-8">
                <Button
                    variant="shadow"
                    color="primary"
                    className="text-white font-semibold"
                    size='lg'
                >
                    Start the Trivia
                </Button>
            </div>
            <section className="flex flex-wrap justify-center gap-12 mt-10">
                <Image
                    as={nextImage}
                    shadow="lg"
                    alt="lamp"
                    src="/lamp.png"
                    width={200}
                    height={200}
                    isBlurred
                />
                <Image
                    as={nextImage}
                    alt="people"
                    src="/people.png"
                    width={200}
                    height={200}
                    isBlurred
                />
            </section>
        </div>
    );
};

export default MainSection;
