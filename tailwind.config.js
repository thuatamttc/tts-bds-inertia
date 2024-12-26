import defaultTheme from "tailwindcss/defaultTheme";
import bdsToanThinhConfig from './resources/js/bdstoanthinh/packages/@core/ui-kit/tailwind-config/src/index'
/** @type {import('tailwindcss').Config} */
export default {
    ...bdsToanThinhConfig,
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php", // Chỉ quét files blade trong views
       
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
