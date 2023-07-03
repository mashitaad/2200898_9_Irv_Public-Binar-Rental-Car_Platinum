import React, { useState } from 'react';
import { Nav, Tabs, Tab } from 'react-bootstrap';

const PaymentInstructionBCA = () => {
  const [tabKey, initTabKey] = useState('atmbca');

  return (
    <div>
      <Nav className="payment-option d-flex gap-5 ">
        <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
          <Tab eventKey="atmbca" title="ATM BCA">
            <div className="payment-detail ">
              <ul>
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                <li>
                  Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678,
                  maka ditulis 7002012345678
                </li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan
                  transaksi
                </li>
                <li>Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </Nav>
    </div>
  );
};

export default PaymentInstructionBCA;
