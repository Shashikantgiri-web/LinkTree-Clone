/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    900: "#0c4a6e",
                },
                accent: {
                    purple: "#9333ea",
                    pink: "#db2777",
                    emerald: "#059669",
                }
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "float": "float 3s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                }
            },
            boxShadow: {
                "premium": "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
                "glass": "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }
        },
    },
    plugins: [],
};
