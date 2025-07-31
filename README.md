# Portofolio Pribadi - Muhammad Isaki Prananda

Selamat datang di repositori kode sumber untuk website portofolio pribadi saya. Website ini dirancang untuk menampilkan keahlian, proyek, dan perjalanan saya di dunia teknologi, dengan fokus pada Keamanan Siber (Cyber Security), Jaringan Komputer, dan Pengembangan Web.

---

### ✨ [Lihat Live Demo](https://isakidev.my.id) <!-- Ganti dengan link portofolio Anda yang sudah di-hosting -->

---

![Screenshot Portofolio](https://raw.githubusercontent.com/Isaki-Prananda/Portofolio-Isaki-Prananda/main/assets/img/screenshot.png) 
<!-- Ganti screenshot.png dengan nama file screenshot Anda -->

## 🚀 Fitur Utama

Website ini dibangun dengan beberapa fitur modern untuk memberikan pengalaman pengguna yang baik:

*   **🎨 Tema Ganda (Terang & Gelap):** Beralih antara mode terang dan gelap untuk kenyamanan visual. Preferensi tema dari sistem operasi juga akan dideteksi saat pertama kali membuka website.
*   **🌐 Dukungan Multi-Bahasa:** Konten tersedia dalam **Bahasa Indonesia (id)** dan **Bahasa Inggris (en)**, dengan pilihan yang tersimpan di perangkat pengguna.
*   **✨ Efek Mengetik Dinamis:** Judul profesi pada bagian hero section ditampilkan dengan animasi mengetik yang menarik untuk menyorot berbagai keahlian.
*   **📊 Visualisasi Keahlian Interaktif:**
    *   **Bagan Radar (Chart.js):** Menampilkan tingkat kemahiran dalam berbagai domain (Cyber Security, Jaringan, Pemrograman) secara visual.
    *   **Bilah Kemajuan (Skill Bars):** Bar keahlian dianimasikan saat pengguna melakukan scroll ke bagian tersebut.
*   **🤖 AI Assistant Chatbot:** Sebuah chatbot sederhana berbasis JavaScript untuk menjawab pertanyaan umum tentang profil, keahlian, dan proyek saya.
*   **🚀 Animasi Scroll:** Elemen dan bagian halaman muncul secara halus saat pengguna melakukan scroll, diimplementasikan menggunakan `IntersectionObserver` untuk performa optimal.
*   **🕰️ Jam Dunia Real-time:** Menampilkan waktu saat ini di berbagai zona waktu Indonesia (WIB, WITA, WIT) dan UTC di bagian footer.
*   **📱 Desain Responsif:** Tampilan yang optimal di berbagai ukuran layar, dari desktop hingga perangkat mobile.
*   **⬆️ Tombol "Kembali ke Atas":** Memudahkan navigasi untuk kembali ke bagian atas halaman.

## 🛠️ Teknologi yang Digunakan

*   **Frontend:**
    *   HTML5
    *   CSS3 (dengan Custom Properties / Variables)
    *   JavaScript (ES6+)
*   **Library:**
    *   Chart.js - Untuk membuat bagan radar interaktif.
    *   Font Awesome - Untuk ikon.

## 📂 Struktur Proyek

Struktur file diatur agar mudah dipahami dan dikelola.

```
/
├── css/
│   └── style.css         # Styling utama, variabel, dan layout
├── js/
│   ├── script.js         # Skrip utama (observer, jam, dll.)
│   ├── auth.js           # Logika untuk modal login/register
│   ├── chatbot.js        # Logika fungsionalitas chatbot
│   ├── language-switcher.js # Logika untuk pergantian bahasa
│   ├── theme-switcher.js # Logika untuk pergantian tema
│   ├── typing-effect.js  # Logika untuk efek mengetik
│   └── translations.js   # Objek JavaScript berisi semua teks terjemahan (ID & EN)
├── assets/
│   └── ...               # Berisi gambar, ikon, dan aset lainnya
└── index.html            # File HTML utama
```

## ⚙️ Instalasi dan Menjalankan Secara Lokal

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/Isaki-Prananda/Portofolio-Isaki-Prananda.git
    ```

2.  **Buka direktori proyek:**
    ```bash
    cd Portofolio-Isaki-Prananda
    ```

3.  **Buka file `index.html` di browser Anda.**

    > **Rekomendasi:** Untuk pengalaman terbaik dan memastikan semua skrip berjalan dengan benar, disarankan untuk menggunakan ekstensi **"Live Server"** di Visual Studio Code. Ini akan membuat server lokal dan menghindari potensi masalah terkait `CORS` atau path file.

## 👤 Kontak

Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan atau ingin berkolaborasi.

*   **GitHub:** Isaki-Prananda
*   **Email:** isaki.prananda@gmail.com
<!-- *   **LinkedIn:** Profil LinkedIn Anda -->

---

Terima kasih telah mengunjungi repositori saya!


## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.

<!-- Anda bisa membuat file LICENSE terpisah dan isinya:

MIT License

Copyright (c) 2024 Muhammad Isaki Prananda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

-->