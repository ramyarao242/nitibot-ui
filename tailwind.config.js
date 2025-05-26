/** @type {import('tailwindcss').Config} */
export default {
    content:[
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme:{
        extend:{
            colors: {
                "level1-background": "#FDF6E3",
                "level1-nitibot-title-color": "#8B5E3C",
                "level1-text-color": "#8B5E3C",
                "level1-button-background": "#FDF6E3",
                "level1-button-text": "#8B5E3C",
        
                "level2-background": "#F5E8C7",
                "level2-nitibot-title-color": "#8B5E3C",
                "level2-text-color": "#8B5E3C",
                "level2-button-background": "#F5E8C7",
                "level2-button-text": "#8B5E3C",
        
                "level3-background": "#1E1E1E", // Lighter black
                "level3-nitibot-title-color": "#FFFFFF",
                "level3-text-color": "#FFFFFF",
                "level3-button-background": "#1E1E1E",
                "level3-button-text": "#FFFFFF",
        
                "level4-background": "#000000", // Darker black
                "level4-nitibot-title-color": "#FFD700",
                "level4-text-color": "#FFD700",
                "level4-button-background": "#000000",
                "level4-button-text": "#FFD700",
        
                "level5-background": "#FFD700",
                "level5-nitibot-title-color": "#8B5E3C",
                "level5-text-color": "#8B5E3C",
                "level5-button-background": "#FFD700",
                "level5-button-text": "#8B5E3C",
            },
        }
    },
    plugins:[]
}