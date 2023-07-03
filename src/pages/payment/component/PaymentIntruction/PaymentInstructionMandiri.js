import React, { useState } from 'react';
import { Nav, Tabs, Tab } from 'react-bootstrap';

const PaymentInstructionMandiri = () => {
  const [tabKey, initTabKey] = useState('atmmandiri');

  return (
    <div>
      <Nav className="payment-option d-flex gap-5 ">
        <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
          <Tab eventKey="atmmandiri" title="ATM Mandiri">
            <div className="payment-detail ">
              <ul>
                <li>Masukkan PIN ATM kamu.</li>
                <li>
                  Pada menu utama, pilih menu “Bayar/Beli” lalu pilih menu “Multi Payment” (Jika di
                  layar belum tersedia, tekan menu “Lainnya” dan pilih “Multi Payment“).
                </li>
                <li>Masukkan nomor 88871 pada kode perusahaan kemudian tekan tombol “Benar“.</li>
                <li>Masukkan kode pembayaran (kode pembayaran Mandiri billpayment kamu)</li>
                <li>Periksa kembali data transaksimu dan selesaikan proses pembayaran.</li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </Nav>
    </div>
  );
};

export default PaymentInstructionMandiri;
