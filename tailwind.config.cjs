/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                xxl: '1536px',
            },
            fontFamily: {
                sans: ['Work_Sans', ...fontFamily.sans], //Work Sans as the default sans font
            },
            fontSize: {
                'display-1': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }], // 60px text-6xl
                'display-2': ['3rem', { lineHeight: '1.1', fontWeight: '700' }], // 48px text-5xl
                'heading-1': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }], // 36px text-4xl
                'heading-2': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }], // 30px text-3xl
                'heading-3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px text-2xl
                'heading-4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px text-xl
                'heading-5': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }], // 18px text-lg
                'heading-6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }], // 16px text-base

                'lead-paragraph': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }], // 18px text-lg

                'body-large': ['1rem', { lineHeight: '1.75', fontWeight: '400' }], // 16px text-base
                'body-normal': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px text-sm
                'body-medium': ['0.875rem', { lineHeight: '1.75', fontWeight: '400' }], // 14px text-sm
                'body-small': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }], // 12px text-xs
            },
            spacing: {
                '2': '0.5rem', // 8px
                '4': '1rem', // 16px
                '6': '1.5rem', // 24px
                '8': '2rem', // 32px
                '10': '2.5rem', // 40px
                '12': '3rem', // 48px (new custom spacing)
                '16': '4rem', // 64px
                '20': '5rem', // 80px
                '24': '6rem', // 96px
                '32': '8rem', // 128px
            },
            colors: {
                // Main brand color
                main: {
                    green: 'rgba(199, 255, 165)', // Green with 40% opacity
                    lightGreen: 'rgba(199, 255, 165, 0.4)', // Same with 40% opacity if needed
                },
                accent: {
                    lilac: '#C6C7F8', // Use for small accents, badges, icons
                },
                typography: {
                    primary: {
                        grey: '#5A5E60', // Use for body text, paragraph text, form labels, and modal backgrounds *
                        white: '#FFFFFF', // Use for background page, cards, containers and also for text on dark backgrounds and buttons *
                        black: '#212427', // Use for headings, subheadings, and strong contrast text *
                    },
                },
                neutral: {
                    white: '#FCFCFC', // Use white color for backgrounds, cards, containers, and text on dark backgrounds *
                    default: '#E5E7EB', // Use grey color for borders, dividers, and input field backgrounds
                    lighter: '#F9FAFB', // Use grey color for light section backgrounds and hover states
                    light: '#E9ECEF', // Use grey color for light section backgrounds and hover states
                    dark: '#ABB5BE', // Use grey color for secondary text or disabled elements
                },
                status: {
                    success: {
                        green: '#4D7C0F', // Use for success messages or positive action icons *
                        greenBg: '#D1E7DD', // Use for success notification backgrounds *
                    },
                    error: {
                        red: '#B91C1C', // Use for error messages, form validation errors, and warning elements *
                        redBG: '#F8D7DA', // Use for error notification backgrounds *
                    },
                },
            },
            backgroundImage: {
                'gradient-button': 'linear-gradient(to right, #62A30D, #7ECC16)', // 500 + 600
            },
            boxShadow: {
                custom: '0 10px 20px rgba(194, 194, 194, 0.16)', // Custom shadow #C2C2C2
            },
        },
    },
    plugins: [
        function ({ addBase }) {
            addBase({
                '@font-face': [
                    {
                        fontFamily: 'Work_Sans',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        src: 'url("/src/assets/fonts/Work_Sans/WorkSans-Regular.ttf") format("TrueType")',
                    },
                    {
                        fontFamily: 'Work_Sans',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        src: 'url("/src/assets/fonts/Work_Sans/WorkSans-Medium.ttf") format("TrueType")',
                    },
                    {
                        fontFamily: 'Work_Sans',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        src: 'url("/src/assets/fonts/Work_Sans/WorkSans-SemiBold.ttf") format("TrueType")',
                    },
                    {
                        fontFamily: 'Work_Sans',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        src: 'url("/src/assets/fonts/Work_Sans/WorkSans-Bold.ttf") format("TrueType")',
                    },
                    {
                        fontFamily: 'Work_Sans',
                        fontStyle: 'normal',
                        fontWeight: '800',
                        src: 'url("/src/assets/fonts/Work_Sans/WorkSans-ExtraBold.ttf") format("TrueType")',
                    },
                ],
                h1: { fontFamily: 'Work_Sans, sans-serif' },
            });
        },
    ],
};