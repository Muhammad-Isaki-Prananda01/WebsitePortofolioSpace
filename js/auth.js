// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Seleksi Elemen DOM ---
    const loginBtn = document.getElementById('login-btn');
    const userProfile = document.getElementById('user-profile');
    const profilePic = userProfile.querySelector('.profile-pic');
    const usernameSpan = userProfile.querySelector('.username');

    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const resetModal = document.getElementById('reset-modal');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const resetForm = document.getElementById('reset-form');

    const closeButtons = document.querySelectorAll('.close-modal');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const showLoginFromResetLink = document.getElementById('show-login-from-reset');
    const showResetLink = document.getElementById('show-reset');

    // --- Fungsi Utilitas Modal ---
    const openModal = (modal) => modal.classList.remove('hidden');
    const closeModal = (modal) => modal.classList.add('hidden');

    // --- Fungsi untuk Memperbarui Tampilan Navbar ---
    const updateNavbarUI = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const user = JSON.parse(localStorage.getItem('portfolioUser'));

        if (isLoggedIn && user) {
            // Jika pengguna sudah login
            loginBtn.classList.add('hidden');
            userProfile.classList.remove('hidden');
            usernameSpan.textContent = user.name;
            profilePic.src = user.profilePic || 'img/download.jpg'; // Gunakan gambar default jika tidak ada
            userProfile.title = `${user.name} (Logout)`; // Menampilkan nama lengkap di tooltip
            // Hapus atribut 'data-translate' agar nama pengguna tidak ditimpa
            // oleh skrip pengubah bahasa.
            usernameSpan.removeAttribute('data-translate');
        } else {
            // Jika pengguna logout
            loginBtn.classList.remove('hidden');
            userProfile.classList.add('hidden');
            // Kembalikan atribut 'data-translate' agar "Guest" bisa diterjemahkan lagi.
            usernameSpan.setAttribute('data-translate', 'username');
            // Reset teks secara manual ke default berdasarkan bahasa saat ini.
            // Ini untuk memastikan teks langsung berubah saat logout.
            const currentLang = document.documentElement.lang || 'id';
            usernameSpan.textContent = (currentLang === 'en') ? 'Guest' : 'Tamu';
        }
    };

    // --- Event Listener untuk Membuka/Menutup Modal ---
    loginBtn.addEventListener('click', () => openModal(loginModal));

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.add('hidden');
        });
    });

    // Navigasi antar modal
    showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); closeModal(loginModal); openModal(registerModal); });
    showLoginLink.addEventListener('click', (e) => { e.preventDefault(); closeModal(registerModal); openModal(loginModal); });
    showResetLink.addEventListener('click', (e) => { e.preventDefault(); closeModal(loginModal); openModal(resetModal); });
    showLoginFromResetLink.addEventListener('click', (e) => { e.preventDefault(); closeModal(resetModal); openModal(loginModal); });


    // --- Logika Registrasi ---
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;
        const agreeTerms = document.getElementById('register-agree-terms').checked;

        // Validasi persetujuan
        if (!agreeTerms) {
            alert('Anda harus menyetujui Syarat & Ketentuan serta Kebijakan Privasi untuk mendaftar.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password dan konfirmasi password tidak cocok!');
            return;
        }

        // Untuk demonstrasi, kita gunakan localStorage.
        // Di aplikasi nyata, data ini akan dikirim ke server.
        const newUser = {
            name: name,
            email: email,
            profilePic: 'img/download.jpg' // Gambar profil default
        };

        // Kita hanya akan menyimpan satu user untuk demo ini.
        localStorage.setItem('portfolioUser', JSON.stringify(newUser));
        // Menyimpan password di localStorage TIDAK AMAN, ini hanya untuk demo.
        localStorage.setItem('portfolioUserPass', password);

        alert('Registrasi berhasil! Silakan login dengan akun Anda.');
        closeModal(registerModal);
        openModal(loginModal);
        registerForm.reset();
    });

    // --- Logika Login ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const agreeTerms = document.getElementById('login-agree-terms').checked;

        // Validasi persetujuan
        if (!agreeTerms) {
            alert('Anda harus menyetujui Syarat & Ketentuan serta Kebijakan Privasi untuk melanjutkan.');
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem('portfolioUser'));
        const storedPass = localStorage.getItem('portfolioUserPass');

        if (storedUser && storedUser.email === email && storedPass === password) {
            // Login berhasil
            localStorage.setItem('isLoggedIn', 'true');
            alert(`Selamat datang kembali, ${storedUser.name}!`);
            closeModal(loginModal);
            updateNavbarUI();
        } else {
            // Login gagal
            alert('Email atau password yang Anda masukkan salah.');
        }
        loginForm.reset();
    });

    // --- Logika Logout ---
    userProfile.addEventListener('click', () => {
        const user = JSON.parse(localStorage.getItem('portfolioUser'));
        if (confirm(`Apakah Anda yakin ingin logout, ${user.name}?`)) {
            localStorage.removeItem('isLoggedIn');
            // Opsional: Anda bisa menghapus data user saat logout
            // localStorage.removeItem('portfolioUser');
            // localStorage.removeItem('portfolioUserPass');
            updateNavbarUI();
        }
    });

    // --- Pengecekan Awal Saat Halaman Dimuat ---
    // Cek apakah pengguna sudah login dari sesi sebelumnya
    updateNavbarUI();
});