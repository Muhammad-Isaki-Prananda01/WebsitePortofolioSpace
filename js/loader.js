// js/loader.js

document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');

    // Listen for the window's 'load' event, which fires after all content
    // (including images, stylesheets, etc.) has been fully loaded.
    window.addEventListener('load', () => {
        // Add the 'loaded' class to trigger the fade-out animation
        loadingScreen.classList.add('loaded');
    });
});