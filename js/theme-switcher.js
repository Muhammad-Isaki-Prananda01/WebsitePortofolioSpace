// js/theme-switcher.js

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeIcon = themeSwitcher.querySelector('i');
    const docHtml = document.documentElement;

    // Function to set the theme
    const setTheme = (theme) => {
        docHtml.setAttribute('data-theme', theme);
        if (theme === 'light') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        // Save theme to localStorage
        localStorage.setItem('portfolioTheme', theme);
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('portfolioTheme');
    // Check for user's OS preference
    const osPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

    // Set initial theme based on priority: localStorage > OS preference > default (dark)
    const initialTheme = savedTheme || osPreference;
    setTheme(initialTheme);


    themeSwitcher.addEventListener('click', () => {
        const currentTheme = docHtml.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
});