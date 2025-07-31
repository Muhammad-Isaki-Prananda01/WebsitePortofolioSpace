// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    
    // Modals
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const resetModal = document.getElementById('reset-modal');
    
    // Close buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // Links to switch between modals
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const showResetLink = document.getElementById('show-reset');
    const showLoginFromResetLink = document.getElementById('show-login-from-reset');

    // All modals in an array for easy iteration
    const allModals = [loginModal, registerModal, resetModal];

    const openModal = (modal) => {
        allModals.forEach(m => m.classList.add('hidden')); // Close all others first
        modal.classList.remove('hidden');
    };

    const closeModal = (modal) => {
        modal.classList.add('hidden');
    };

    // Event Listeners
    if (loginBtn) {
        loginBtn.addEventListener('click', () => openModal(loginModal));
    }
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal'));
        });
    });

    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(registerModal);
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(loginModal);
        });
    }

    if (showResetLink) {
        showResetLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(resetModal);
        });
    }
    
    if (showLoginFromResetLink) {
        showLoginFromResetLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(loginModal);
        });
    }

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        allModals.forEach(modal => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Prevent form submission (for demonstration)
    const forms = document.querySelectorAll('#login-form, #register-form, #reset-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Fungsionalitas form dinonaktifkan untuk demo ini.');
            closeModal(form.closest('.modal'));
        });
    });
});