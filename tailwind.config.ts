import { type Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                orange: {
                    50: '#ffeae5',
                    100: '#ffcfcb',
                    200: '#ffb3b0',
                    300: '#ff9694',
                    400: '#ff7a79',
                    500: '#F85455',
                    600: '#db383b',
                    700: '#b72c30',
                    800: '#921f24',
                    900: '#6e1418',
                    950: '#4a090c',
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        primary: '#F85455',
                        secondary: '#EE457E',
                    },
                },
                dark: {
                    colors: {
                        primary: '#F85455',
                        secondary: '#EE457E',
                    },
                },
            },
        }),
    ],
};

export default config;