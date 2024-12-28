/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/js/**/*.vue',
        './resources/js/**/*.js',
        './resources/js/**/*.ts',
        './resources/views/**/*.blade.php',
    ],
    // Tránh xung đột với Ant Design
    corePlugins: {
        preflight: false, // Disable Tailwind's base styles
    },
    theme: {
        extend: {},
    },
    plugins: [],
}
