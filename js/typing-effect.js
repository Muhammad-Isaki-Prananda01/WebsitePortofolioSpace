document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.getElementById('typing-text');

    if (typingTextElement) {
        const textsToType = [
            "Cyber Security Enthusiast",
            "Web Developer",
            "Network Engineer",
            "Linux Administrator"
        ];
        let textArrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentText = textsToType[textArrayIndex];
            const typingSpeed = 150;
            const deletingSpeed = 75;
            const pauseDuration = 2000;

            if (isDeleting) {
                // Hapus karakter
                typingTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Tambah karakter
                typingTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            // Jika kata selesai diketik
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, pauseDuration); // Jeda di akhir kata
                return;
            }

            // Jika kata selesai dihapus
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textArrayIndex = (textArrayIndex + 1) % textsToType.length;
                setTimeout(typeEffect, typingSpeed); // Mulai ketik kata berikutnya
                return;
            }

            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(typeEffect, speed);
        }

        // Mulai efek setelah jeda singkat
        setTimeout(typeEffect, 500);
    }
});