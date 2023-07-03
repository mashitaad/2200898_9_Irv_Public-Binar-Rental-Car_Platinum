import React, { useState } from 'react';
import { Nav, Tabs, Tab } from 'react-bootstrap';

const PaymentInstructionBNI = () => {
  const [tabKey, initTabKey] = useState('atmbni');
  return (
    <div>
      <Nav className="payment-option d-flex gap-5 ">
        <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
          <Tab eventKey="atmbni" title="ATM BNI">
            <div className="payment-detail ">
              <ul>
                <li>Masukkan kartu ATM dan PIN BNI kamu</li>
                <li>
                  Pada menu utama, pilih menu “Menu Lainnya” , “Transfer” , “Rekening Tabungan” , ke
                  “Rekening BNI”
                </li>
                <li>Masukkan nomor Virtual Account</li>
                <li>Masukkan jumlah pembayaran sesuai tagihan</li>
                <li>
                  Di halaman konfirmasi, pastikan data transaksi sudah benar kemudian pilih “Ya“
                </li>
              </ul>
            </div>
          </Tab>
        </Tabs>
      </Nav>
    </div>
  );
};

export default PaymentInstructionBNI;
