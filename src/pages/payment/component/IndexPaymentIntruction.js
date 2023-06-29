import React, { useState } from 'react';
import { Nav, Tabs, Tab } from 'react-bootstrap';

export default function PaymentInstructionBCA() {

    const [tabKey, initTabKey] = useState(
        'atmbca',
        'mbca',
        'bcaklik',
        'internetbanking'
    )

    return (
       
        <div>
            <h1>BCA</h1>
            <Nav className='payment-option d-flex gap-5 '>
                <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)} >
                    <Tab eventKey="atmbca" title="ATM BCA" >
                        <div className='payment-detail '>
                            <ul>
                                <li>Masukkan kartu ATM, lalu PIN</li>
                                <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                                <li>Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
                                <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                                <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                            </ul>
                        </div>
                    </Tab>
                    <Tab eventKey="mbca" title="M-BCA">
                        <div className='payment-detail '>
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
                    <Tab eventKey="bcaklik" title="BCA Klik">
                        <div className='payment-detail '>
                            <ul>
                                <li>Login pada aplikasi KlikBCA, masukkan user ID & PIN</li>
                                <li>Pilih “Transfer Dana“, kemudian pilih “Transfer ke BCA Virtual Account“.</li>
                                <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                                <li>Pastikan data yang dimasukkan sudah benar, dan Input “Respon KeyBCA“, lalu klik “Kirim“.</li>
                            </ul>
                        </div>
                    </Tab>
                    <Tab eventKey="internetbanking" title="Internet Banking">
                        <div className='payment-detail '>
                            <ul>
                                <li>Klik Internet Banking pada kolom Pilih Metode Pembayaran di laman Pembayaran, lalu pilih “Klik BCA“.</li>
                                <li>Setelah klik “Bayar Sekarang“, kamu akan diarahkan ke laman Klik BCA. Silakan login menggunakan User ID dan PIN KlikBCA kamu.</li>
                                <li>Pilih Pembayaran e-Commerce pada menu utama Klik BCA. Pilih Market Place pada pilihan Kategori dan BLIBLI.COM pada pilihan Nama Perusahaan</li>
                                <li>Pilih nomor rekening BCA kamu, lalu klik “Lanjutkan“.</li>
                                <li>Beri tanda centang pada transaksi yang ingin kamu bayar, lalu klik “Lanjutkan”</li>
                                <li>Masukkan respon keybca appli 1 dan Klik “Kirim”</li>
                            </ul>
                        </div>
                    </Tab>
                </Tabs>
            </Nav>
        </div>
    )
}


