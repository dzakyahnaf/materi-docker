# 📝 Ujian Docker — Project-Based Exam

> **Durasi:** 2 Jam  
> **Cakupan Materi:** Day 1 & Day 2  
> **Tipe Ujian:** Implementasi Project  
> **Sifat:** Open Documentation (Boleh buka dokumentasi resmi Docker)

---

## 📋 Instruksi Umum

1. Semua pekerjaan dilakukan di komputer masing-masing yang sudah terinstall **Docker Engine**.
2. Buat satu folder utama bernama `ujian-docker-[NAMA]` sebagai root project.
3. Kumpulkan hasil ujian dalam bentuk **screenshot terminal + file project** (Dockerfile, source code, dll).
4. Setiap soal memiliki **bobot nilai** yang tertera.
5. Kerjakan secara **berurutan** dari Bagian A sampai Bagian D.
6. Pastikan setiap container yang dibuat bisa **diakses dan berfungsi dengan benar**.

---

## Bagian A — Teori Singkat (15 poin)

> Jawab pertanyaan berikut dengan **singkat dan jelas** di file `jawaban-teori.txt`.

### Soal A1 (5 poin)

Jelaskan perbedaan utama antara **Virtual Machine** dan **Container**. Sebutkan minimal 3 aspek perbedaannya dalam format tabel.

### Soal A2 (5 poin)

Sebutkan dan jelaskan **3 komponen utama** dalam Docker Architecture (Docker Client, Docker Host/Daemon, Docker Registry) beserta fungsinya masing-masing.

### Soal A3 (5 poin)

Apa perbedaan antara **Docker Image** dan **Docker Container**? Berikan analogi sederhana untuk masing-masing.

---

## Bagian B — Menjalankan Container dari Registry (20 poin)

> Tujuan: Menguji kemampuan pull image, membuat container, dan mengekspos port.

### Soal B1 — Menjalankan Nginx (10 poin)

Lakukan langkah-langkah berikut:

1. Pull image `nginx` versi `1.25` dari Docker Hub.
2. Buat container dengan nama `ujian-nginx` dari image tersebut.
3. Ekspos port container `80` ke port host `9090`.
4. Jalankan container tersebut.
5. Buka browser dan akses `http://localhost:9090`, pastikan halaman **Welcome to nginx!** tampil.

**Yang dikumpulkan:**
- Screenshot hasil perintah `docker images` yang menampilkan image nginx.
- Screenshot hasil perintah `docker container ls` yang menampilkan container `ujian-nginx` berjalan.
- Screenshot browser yang menampilkan halaman nginx.

---

### Soal B2 — Menjalankan MySQL (10 poin)

Lakukan langkah-langkah berikut:

1. Pull image `mysql` versi `8.0`.
2. Jalankan container dengan nama `ujian-mysql` menggunakan perintah `docker run`.
3. Gunakan flag `-e` untuk mengatur environment variable berikut:
   - `MYSQL_ROOT_PASSWORD=ujian2024`
   - `MYSQL_DATABASE=db_ujian`
4. Ekspos port container `3306` ke port host `3307`.

**Yang dikumpulkan:**
- Screenshot perintah `docker run` yang digunakan.
- Screenshot `docker container ls` yang menampilkan container `ujian-mysql` berjalan.

---

## Bagian C — Build Custom Docker Image (40 poin)

> Tujuan: Menguji kemampuan membuat Dockerfile, build image, dan menjalankan container dari image custom.

### Soal C1 — Aplikasi Python "Student Profile" (20 poin)

Buatlah sebuah web server sederhana menggunakan **Python** yang menampilkan profil peserta ujian.

#### Spesifikasi:

1. Buat folder project bernama `student-profile/`.
2. Buat file `app.py` dengan ketentuan:
   - Menggunakan modul bawaan Python `http.server` (tidak perlu install pip).
   - Saat diakses di browser, menampilkan teks berikut (sesuaikan dengan data diri):
     ```
     === Student Profile ===
     Nama  : [Nama Lengkap]
     NIM   : [NIM/ID]
     Kelas : [Nama Kelas]
     Pesan : Saya sedang belajar Docker!
     ```
   - Server berjalan di port `8000`.

3. Buat `Dockerfile` dengan ketentuan:
   - Base image: `python:3.12-alpine`
   - Working directory: `/app`
   - Copy file `app.py` ke dalam container
   - Expose port `8000`
   - Jalankan aplikasi dengan perintah `python app.py`

4. Build image dengan nama `student-profile:1.0`.
5. Jalankan container dengan nama `my-profile` dan mapping port `8000:8000`.

**Yang dikumpulkan:**
- File `app.py`
- File `Dockerfile`
- Screenshot `docker images` yang menampilkan image `student-profile:1.0`
- Screenshot browser yang menampilkan output profil

---

### Soal C2 — Aplikasi Node.js "Greeting API" dengan Environment Variable (20 poin)

Buatlah sebuah web server menggunakan **Node.js** yang memanfaatkan **Environment Variable** untuk konfigurasi dinamis.

#### Spesifikasi:

1. Buat folder project bernama `greeting-api/`.
2. Buat file `server.js` dengan ketentuan:
   - Menggunakan modul bawaan `http` (tanpa npm install).
   - Membaca **3 environment variable**:
     - `GREETING` → Salam pembuka (default: `"Hello"`)
     - `TARGET_NAME` → Nama target sapaan (default: `"World"`)
     - `APP_PORT` → Port server (default: `3000`)
   - Saat diakses, menampilkan:
     ```
     {GREETING}, {TARGET_NAME}! Welcome to Docker Exam 🐳
     ```
   - Server berjalan di port sesuai `APP_PORT`.

3. Buat `Dockerfile` dengan ketentuan:
   - Base image: `node:20-alpine`
   - Working directory: `/app`
   - Copy file `server.js` ke container
   - Expose port `3000`
   - Jalankan dengan `node server.js`

4. Build image dengan nama `greeting-api:1.0`.
5. Jalankan **2 container** dari image yang sama dengan konfigurasi berbeda:

   **Container 1:**
   ```bash
   Nama: greeting-1
   Port: 3001:3000
   GREETING=Halo
   TARGET_NAME=[Nama Kamu]
   ```

   **Container 2:**
   ```bash
   Nama: greeting-2
   Port: 3002:3000
   GREETING=Selamat Datang
   TARGET_NAME=Peserta Ujian
   ```

**Yang dikumpulkan:**
- File `server.js`
- File `Dockerfile`
- Screenshot `docker container ls` menampilkan kedua container berjalan
- Screenshot browser `http://localhost:3001` dan `http://localhost:3002` dengan output berbeda

---

## Bagian D — Docker Hub & Manajemen Container (25 poin)

> Tujuan: Menguji kemampuan push image ke registry dan manajemen lifecycle container.

### Soal D1 — Push Image ke Docker Hub (15 poin)

Gunakan salah satu image yang sudah dibuat di Bagian C, lalu upload ke Docker Hub.

Langkah-langkah:
1. Login ke Docker Hub menggunakan `docker login`.
2. Tag image `student-profile:1.0` menjadi format Docker Hub:
   ```
   [username-dockerhub]/student-profile:1.0
   ```
3. Push image ke Docker Hub.
4. Verifikasi image sudah muncul di halaman Docker Hub kamu.

**Yang dikumpulkan:**
- Screenshot perintah `docker tag` dan `docker push` beserta outputnya.
- Screenshot halaman Docker Hub yang menampilkan image `student-profile`.

---

### Soal D2 — Manajemen Lifecycle Container (10 poin)

Lakukan dan dokumentasikan langkah-langkah berikut secara berurutan:

1. Tampilkan semua container yang sedang berjalan.
   ```bash
   docker container ls
   ```

2. Hentikan container `greeting-1`.
   ```bash
   docker container stop greeting-1
   ```

3. Tampilkan semua container (termasuk yang berhenti).
   ```bash
   docker container ls -a
   ```

4. Jalankan ulang container `greeting-1`.
   ```bash
   docker container start greeting-1
   ```

5. Pastikan `greeting-1` sudah berjalan kembali.
   ```bash
   docker container ls
   ```

**Yang dikumpulkan:**
- Screenshot setiap langkah di atas (5 screenshot).

---

## 📊 Rekap Penilaian

| Bagian | Deskripsi | Bobot |
|--------|-----------|-------|
| **A** | Teori Singkat (3 soal) | 15 poin |
| **B** | Menjalankan Container dari Registry (2 soal) | 20 poin |
| **C** | Build Custom Docker Image (2 soal project) | 40 poin |
| **D** | Docker Hub & Manajemen Container (2 soal) | 25 poin |
| | **Total** | **100 poin** |

---

## ⏰ Alokasi Waktu yang Disarankan

| Bagian | Waktu |
|--------|-------|
| Bagian A — Teori | 10 menit |
| Bagian B — Container dari Registry | 20 menit |
| Bagian C — Build Custom Image | 60 menit |
| Bagian D — Docker Hub & Lifecycle | 20 menit |
| Review & Kumpulkan | 10 menit |
| **Total** | **120 menit (2 jam)** |

---

## 📌 Kriteria Penilaian

| Kriteria | Keterangan |
|----------|------------|
| **Fungsionalitas** | Container berjalan dan aplikasi bisa diakses |
| **Dockerfile** | Instruksi benar dan efisien (FROM, WORKDIR, COPY, EXPOSE, CMD) |
| **Environment Variable** | Konfigurasi dinamis berfungsi dengan benar |
| **Dokumentasi** | Screenshot lengkap dan jelas |
| **Kebersihan** | Penamaan container dan image rapi dan konsisten |

---

> **Selamat mengerjakan! 🐳🚀**
