# Queasy - Aplikasi Kuis

**Queasy** adalah aplikasi web kuis yang dibangun dengan **React** dan menggunakan **Tailwind CSS** untuk styling. Aplikasi ini menyediakan antarmuka yang ramah pengguna untuk mengikuti kuis dengan soal yang diambil dari API [Open Trivia Database](https://opentdb.com/). Aplikasi ini memiliki fitur timer, sistem login, serta fitur melanjutkan kuis menggunakan penyimpanan lokal (local storage).

## Fitur

- **Sistem Login**: Pengguna harus melakukan login sebelum mengikuti kuis.
- **API Soal**: Soal kuis diambil secara acak dari API [Open Trivia Database](https://opentdb.com/).
- **Pelacakan Progres**: Menampilkan total jumlah soal dan jumlah soal yang telah dikerjakan.
- **Timer**: Pengguna memiliki batas waktu untuk mengerjakan kuis. Setelah waktu habis, kuis otomatis ditutup.
- **Satu Soal Per Halaman**: Setiap soal ditampilkan satu per satu. Setelah pengguna memilih jawaban, soal berikutnya akan muncul.
- **Ringkasan Kuis**: Setelah kuis selesai, atau ketika waktu habis, pengguna dapat melihat hasil pengerjaannya, termasuk:
  - Jumlah jawaban benar.
  - Jumlah jawaban salah.
  - Total soal yang dijawab.
- **Melanjutkan Kuis**: Jika browser ditutup atau di-refresh, pengguna dapat melanjutkan kuis dari titik terakhir menggunakan penyimpanan lokal (local storage).

## Teknologi yang Digunakan

- **React**: Framework front-end untuk membangun antarmuka pengguna.
- **Tailwind CSS**: Framework CSS berbasis utilitas untuk styling aplikasi.
- **Open Trivia Database API**: Menyediakan soal-soal kuis.
- **LocalStorage**: Digunakan untuk menyimpan progres kuis agar dapat dilanjutkan jika browser ditutup.
- **React Router**: Untuk navigasi antar halaman.

## Memulai

### Prasyarat

Pastikan Anda sudah menginstall **Node.js** di komputer Anda. Anda bisa mengunduhnya di [sini](https://nodejs.org/).

### Instalasi

1. Clone repository:

   ```bash
   git clone https://github.com/username/queasy-app.git

2. Masuk direktori proyek

   ```bash
   cd queasy-app

3. Install dependensi yang diperlukan:

   ```bash
   npm install
   
4. Buat file .env untuk konfigurasi API, dan tambahkan variabel berikut:

   ```bash
   VITE_REACT_API_URL=https://opentdb.com/api.php](https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
   
5. Jalakan server

   ```bash
   npm run dev
   
6. Akses aplikasi di browser pada:

   ```bash
   http://localhost:5173/
   
6. Untuk membuat build produksi:

   ```bash
   npm run build
