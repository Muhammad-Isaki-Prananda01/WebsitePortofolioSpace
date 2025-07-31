// js/language-switcher.js

const setLanguage = (lang) => {
    const langSwitcher = document.getElementById('language-switcher');
    const langText = langSwitcher.querySelector('.language-text');
    const docHtml = document.documentElement;

    docHtml.setAttribute('lang', lang);
    langText.textContent = lang.toUpperCase();

    const trans = translations[lang];

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (trans[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.placeholder) el.placeholder = trans[key];
            } else {
                el.innerHTML = trans[key];
            }
        }
    });

    document.querySelectorAll('[data-translate-title]').forEach(el => {
        const key = el.getAttribute('data-translate-title');
        if (trans[key]) {
            el.title = trans[key];
        }
    });

    // Dispatch a custom event to notify other scripts of the language change
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
    localStorage.setItem('portfolioLang', lang);
};

document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('language-switcher');

    langSwitcher.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'id' ? 'en' : 'id';
        setLanguage(newLang);
    });

    // Set initial language
    const savedLang = localStorage.getItem('portfolioLang');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (['id', 'en'].includes(browserLang) ? browserLang : 'id');
    setLanguage(initialLang);
});