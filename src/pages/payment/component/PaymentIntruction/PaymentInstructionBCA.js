import React, { useState } from 'react';
import { Nav, Tabs, Tab } from 'react-bootstrap';

const PaymentInstructionBCA = () => {
  const [tabKey, initTabKey] = useState('atmBCA');
  return (
    <div>
      <Nav className="payment-option d-flex gap-5 ">
        <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
          <Tab eventKey="atmBCA" title="ATM BCA">
            <div className="payment-detail ">
              <ul>
                <li>Masukkan PIN ATM kamu.</li>
                <li>
                  Pada menu utama, pilih menu “Bayar/Beli” lalu pilih menu “Multi Payment” (Jika di
                  layar belum tersedia, tekan menu “Lainnya” dan pilih “Multi Payment“).
                </li>
                <li>Masukkan nomor 88871 pada kode perusahaan kemudian tekan tombol “Benar“.</li>
                <li>Masukkan kode pembayaran (kode pembayaran BCA billpayment kamu)</li>
                <li>Periksa kembali data transaksimu dan selesaikan proses pembayaran.</li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="mBCA" title="M-BCA">
            <div className="payment-detail ">
              <ul>
                <li>Lakukan log in pada aplikasi BCA mobile.</li>
                <li>Pilih “m-BCA” masukan kode akses m-BCA.</li>
                <li>Pilih “m-Transfer“</li>
                <li>Pilih “BCA Virtual Account</li>
                <li>Masukkan nomor BCA Virtual Account dan klik “OK“</li>
                <li>Konfirmasi no virtual account dan rekening pendebetan“</li>
                <li>Periksa kembalian rincian pembayaran kamu, lalu klik “Ya“</li>
                <li>Masukan pin m-BCA.</li>
                <li>Pembayaran selesai.</li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="BCAclick" title="BCA-Click">
            <div className="payment-detail ">
              <ul>
                <li>Login pada aplikasi KlikBCA, masukkan user ID & PIN</li>
                <li>Pilih “Transfer Dana“, kemudian pilih “Transfer ke BCA Virtual Account“.</li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan
                  transaksi
                </li>
                <li>
                  Pastikan data yang dimasukkan sudah benar, dan Input “Respon KeyBCA“, lalu klik
                  “Kirim“.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="internet-banking" title="Internet Banking">
            <div className="payment-detail ">
              <ul>
                <li>
                  Klik Internet Banking pada kolom Pilih Metode Pembayaran di laman Pembayaran, lalu
                  pilih “Klik BCA“.
                </li>
                <li>
                  Setelah klik “Bayar Sekarang“, kamu akan diarahkan ke laman Klik BCA. Silakan
                  login menggunakan User ID dan PIN KlikBCA kamu.
                </li>
                <li>
                  Pilih Pembayaran e-Commerce pada menu utama Klik BCA. Pilih Market Place pada
                  pilihan Kategori dan BLIBLI.COM pada pilihan Nama Perusahaan
                </li>
                <li>Pilih nomor rekening BCA kamu, lalu klik “Lanjutkan“.</li>
                <li>
                  Beri tanda centang pada transaksi yang ingin kamu bayar, lalu klik “Lanjutkan”
                </li>
                <li>Masukkan respon keyBCA appli 1 dan Klik “Kirim”</li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </Nav>
    </div>
  );
};

export default PaymentInstructionBCA;
