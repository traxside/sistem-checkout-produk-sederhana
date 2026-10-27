# Case Study: Sistem Checkout Produk Sederhana
Dibuat oleh: Richie Leonardo
## Deskripsi Case Study
Studi kasus terkait menghasilkan program untuk sistem checkout sederhana yang meminta data seperti harga produk, jumlah produk, dan status member pembeli. 

Alur sistem checkout adalah sebagai berikut :
```
Lakukan validasi input sebelum perhitungan -> hitung subtotal -> cek kondisi member terkait pemberian diskon -> hitung diskon -> cek subtotal setelah diskon memenuhi syarat gratis ongkos kirim -> menghitung total pembayaran -> memberikan output.
```

Alur yang lebih lengkap dapat dilihat pada flowchart.png

Struktur hasil pengerjaan studi kasus adalah sebagai berikut:
```
./
├── analysis.md
├── checkout.js
├── flowchart.png
├── pseudocode.md
├── README.md
└── testing.md
```

## Cara Menjalankan Program
Sebelum menjalankan program, pastikan Node.js telah diinstall pada komputer. Jika sudah dapat langsung menjalankan file checkout.js di terminal pada direktori assignment seperti berikut:

```
node checkout.js
```

## Ringkasan Penggunaan AI
Terdapat penggunaan AI pada testing.md untuk membantu dalam menyarankan penggunaan format tabel sehingga detail terkait testing dapat lebih mudah dibaca. Juga terdapat penggunaan AI untuk membantu melakukan review dan memverifikasi logic dari flowchart, pseudocode, dan code javascript yang telah dikerjakan terlebih dahulu.

