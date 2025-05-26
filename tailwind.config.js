/** @type {import('tailwindcss').Config} */
export default {
    content:[
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme:{
        extend:{
            colors: {
                'wisdom-level-1': '#FFFAF0', // Pale yellow background
                'wisdom-level-1-text': '#333333', // Dark gray text color
                'wisdom-level-1-button': '#FAE2AB', // Button color
                'nitibot-title': '#815317', // Light brown/gold color for the title
                'nitibot-title-level-2': '#906b35',
                'level-2-button': '#e7cb80',
                'wisdom-level-2': '#f9eed1',
                'wisdom-level-1-button-text': '#2F0800', // Button text color
            },
        }
    },
    plugins:[]
}