// js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Intersection Observer for Scroll Animations ---
    const sections = document.querySelectorAll('.section');
    const skillLevels = document.querySelectorAll('.skill-level');
    const timelineContainer = document.querySelector('.timeline-container');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'skills') {
                    skillLevels.forEach(skill => {
                        const level = skill.closest('.skill-item').querySelector('.skill-percent').textContent;
                        skill.style.setProperty('--skill-level-width', level);
                    });
                }

                // Unobserve after animation to save resources
                // observer.unobserve(entry.target); 
                // Note: Commented out if you want animations to re-trigger on scroll up/down
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    // --- Active Navbar Link on Scroll ---
    const navPills = document.querySelectorAll('.nav-pill');
    
    const navObserverOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navPills.forEach(pill => {
                    pill.classList.remove('active');
                    if (pill.getAttribute('href') === `#${id}`) {
                        pill.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // --- World Clocks in Footer ---
    function updateWorldClocks() {
        const now = new Date();

        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };

        // Get elements
        const timeWibEl = document.getElementById('time-wib');
        const timeWitaEl = document.getElementById('time-wita');
        const timeWitEl = document.getElementById('time-wit');
        const timeUtcEl = document.getElementById('time-utc');

        // Update DOM if elements exist
        if (timeWibEl) {
            timeWibEl.textContent = now.toLocaleTimeString('en-GB', { ...options, timeZone: 'Asia/Jakarta' }); // WIB
        }
        if (timeWitaEl) {
            timeWitaEl.textContent = now.toLocaleTimeString('en-GB', { ...options, timeZone: 'Asia/Makassar' }); // WITA
        }
        if (timeWitEl) {
            timeWitEl.textContent = now.toLocaleTimeString('en-GB', { ...options, timeZone: 'Asia/Jayapura' }); // WIT
        }
        if (timeUtcEl) {
            timeUtcEl.textContent = now.toLocaleTimeString('en-GB', { ...options, timeZone: 'UTC' });
        }
    }
    setInterval(updateWorldClocks, 1000);
    updateWorldClocks(); // Initial call

    // --- Set Current Year in Footer ---
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // --- Back to Top Button ---
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // --- SKILLS RADAR CHARTS ---
    const createRadarChart = (canvasId, chartLabels, chartData, datasetLabel, colorObject) => {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        // Hancurkan instance grafik yang ada untuk mencegah duplikat
        if (window[canvasId] instanceof Chart) {
            window[canvasId].destroy();
        }

        const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
        const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
        const pointLabelColor = isDarkMode ? '#e0e0e0' : '#333';
        const ticksColor = isDarkMode ? '#B0B0B0' : '#666';

        const data = {
            labels: chartLabels,
            datasets: [{
                label: datasetLabel,
                data: chartData,
                fill: true,
                backgroundColor: colorObject.bg,
                borderColor: colorObject.border,
                pointBackgroundColor: colorObject.border,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: colorObject.border
            }]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: { color: gridColor },
                    grid: { color: gridColor },
                    pointLabels: {
                        color: pointLabelColor,
                        font: { size: 11, family: "'Poppins', sans-serif" }
                    },
                    ticks: {
                        color: ticksColor,
                        backdropColor: 'transparent',
                        stepSize: 20,
                        font: { size: 10 }
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: pointLabelColor,
                        font: { family: "'Poppins', sans-serif" }
                    }
                }
            }
        };

        // Buat grafik baru dan simpan di properti window yang unik
        window[canvasId] = new Chart(ctx, { type: 'radar', data: data, options: options });
    };

    const initAllCharts = () => {
        // Chart 1: Cyber Security
        createRadarChart(
            'cyberSecurityChart',
            ['Keamanan Jaringan', 'Vulnerability Assessment', 'Penetration Testing', 'Analisis Malware'],
            [80, 70, 65, 55],
            'Cyber Security',
            { bg: 'rgba(0, 191, 255, 0.25)', border: 'rgb(0, 191, 255)' } // Warna Primer
        );

        // Chart 2: Jaringan & Infrastruktur
        createRadarChart(
            'networkingChart',
            ['Konfigurasi Router/Switch', 'Admin Server Linux', 'Protokol Jaringan', 'Virtualisasi'],
            [85, 80, 90, 65],
            'Jaringan & Infrastruktur',
            { bg: 'rgba(159, 89, 255, 0.25)', border: 'rgb(159, 89, 255)' } // Warna Sekunder
        );

        // Chart 3: Pemrograman & Tools
        createRadarChart(
            'programmingChart',
            ['Python (Scripting)', 'Bash Scripting', 'Web Dev (HTML/CSS/JS)', 'Security Tools'],
            [80, 75, 70, 70],
            'Pemrograman & Tools',
            { bg: 'rgba(255, 0, 255, 0.25)', border: 'rgb(255, 0, 255)' } // Warna Aksen
        );
    };

    // Pastikan Chart.js sudah dimuat
    if (typeof Chart !== 'undefined') {
        initAllCharts(); // Render pertama kali

        // Gunakan MutationObserver untuk merender ulang grafik saat tema berubah
        const themeObserver = new MutationObserver((mutations) => {
            if (mutations.some(m => m.attributeName === 'data-theme')) {
                initAllCharts();
            }
        });
        themeObserver.observe(document.documentElement, { attributes: true });
    }
});