import React, { useState } from 'react';
import { Nav, Tabs, Tab } from 'react-bootstrap';

const PaymentInstructionBCA = () => {
  const [tabKey, initTabKey] = useState('atmbca');

  return (
    <div>
            <Nav className='payment-option d-flex gap-5 '>
                <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)} >
                    <Tab eventKey="atmbca" title="ATM BCA" >
                    <Tab eventKey="atmmandiri" title="ATM Mandiri" >
                <div className='payment-detail '>
                    <ul>
                        <li>Masukkan PIN ATM kamu.</li>
                        <li>Pada menu utama, pilih menu “Bayar/Beli” lalu pilih menu “Multi Payment” (Jika di layar belum tersedia, tekan menu “Lainnya” dan pilih “Multi Payment“).</li>
                        <li>Masukkan nomor 88871 pada kode perusahaan kemudian tekan tombol “Benar“.</li>
                        <li>Masukkan kode pembayaran (kode pembayaran Mandiri billpayment kamu)</li>
                        <li>Periksa kembali data transaksimu dan selesaikan proses pembayaran.</li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey="atmbca" title="ATM BCA" >
                <div className='payment-detail '>
                    <ul>
                        <li>Masukkan PIN ATM kamu.</li>
                        <li>Pada menu utama, pilih menu “Bayar/Beli” lalu pilih menu “Multi Payment” (Jika di layar belum tersedia, tekan menu “Lainnya” dan pilih “Multi Payment“).</li>
                        <li>Masukkan nomor 88871 pada kode perusahaan kemudian tekan tombol “Benar“.</li>
                        <li>Masukkan kode pembayaran (kode pembayaran Mandiri billpayment kamu)</li>
                        <li>Periksa kembali data transaksimu dan selesaikan proses pembayaran.</li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey="atmbni" title="ATM BNI" >
                <div className='payment-detail '>
                    <ul>
                        <li>Masukkan PIN ATM kamu.</li>
                        <li>Pada menu utama, pilih menu “Bayar/Beli” lalu pilih menu “Multi Payment” (Jika di layar belum tersedia, tekan menu “Lainnya” dan pilih “Multi Payment“).</li>
                        <li>Masukkan nomor 88871 pada kode perusahaan kemudian tekan tombol “Benar“.</li>
                        <li>Masukkan kode pembayaran (kode pembayaran Mandiri billpayment kamu)</li>
                        <li>Periksa kembali data transaksimu dan selesaikan proses pembayaran.</li>
                    </ul>
                </div>
            </Tab>
                    </Tab>
                </Tabs>
            </Nav>
        </div>
  )
}


export default PaymentInstructionBCA;
