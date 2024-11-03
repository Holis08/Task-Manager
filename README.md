---

# Dokumentasi Pengujian API Task Manager

## 1. Pendahuluan
Dokumentasi ini menjelaskan proses pengujian API yang dikembangkan oleh Mahasiswa B menggunakan Jest. Tujuannya adalah untuk memastikan bahwa semua endpoint API berfungsi dengan baik dan memberikan hasil yang diharapkan.

## 2. Lingkungan Pengujian
- **Node.js**: v14.x atau yang lebih baru
- **Jest**: v26.x atau yang lebih baru
- **Supertest**: v6.x atau yang lebih baru
- **MongoDB**: Terkoneksi ke database lokal

## 3. Persiapan
Sebelum menjalankan pengujian, pastikan semua dependensi telah diinstal:
```bash
npm install --save-dev jest supertest
```

## 4. Menjalankan Pengujian
Untuk menjalankan pengujian, gunakan perintah berikut:
```bash
npx jest
```

## 5. Hasil Pengujian
Setelah menjalankan pengujian, hasil yang didapat adalah sebagai berikut:
```
 PASS  tests/taskManager.test.js
  Task Manager API
    √ GET /tasks - harus mengembalikan daftar tugas (362 ms)
    √ POST /tasks - harus menambahkan tugas baru (125 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        4.345 s
```

## 6. Deskripsi Pengujian
### 6.1 Endpoint `GET /tasks`
- **Tujuan**: Mengambil daftar semua tugas yang ada dalam database.
- **Metode**: GET
- **Status Code yang Diharapkan**: 200 OK
- **Hasil yang Diharapkan**: Daftar tugas dalam format JSON.

### 6.2 Endpoint `POST /tasks`
- **Tujuan**: Menambahkan tugas baru ke dalam database.
- **Metode**: POST
- **Body yang Diharapkan**:
```json
{
  "title": "Judul Tugas",
  "description": "Deskripsi Tugas"
}
```
- **Status Code yang Diharapkan**: 201 Created
- **Hasil yang Diharapkan**: Tugas baru yang ditambahkan dalam format JSON.

## 7. Dokumentasi Penggunaan
API ini dapat digunakan oleh klien untuk mengelola tugas. Pastikan untuk mengirim permintaan yang sesuai dengan format yang ditentukan di atas.

## 8. Catatan
- Jika menemukan masalah atau error selama pengujian, jalankan Jest dengan opsi berikut untuk mendeteksi masalah:
```bash
npx jest --detectOpenHandles
```

## 9. Komit dan Pull Request
- Hasil pengujian dan dokumentasi telah disimpan dan dikomit dengan pesan:
```
Menambahkan pengujian API dasar dan dokumentasi penggunaan
```
- PR telah dibuat di GitHub untuk meminta tinjauan dari tim.

---
