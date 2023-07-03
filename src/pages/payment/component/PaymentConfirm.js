/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import '../styles/paymentconfirm.css';
import '../styles/dropzone.css';
import { MdContentCopy } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { orderSelector } from '../../../features/orderSlice';
import successLogo from '../../../assets/icons/success.svg';

import IndexInstructionBCA from './PaymentIntruction/PaymentInstructionBCA';
import IndexInstructionBNI from './PaymentIntruction/PaymentInstructionBNI';
import IndexInstructionMandiri from './PaymentIntruction/PaymentInstructionMandiri';

export const PaymentConfirm = (props) => {
  const successUpload = useSelector(orderSelector.successUpload);
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const [inputValue, setInputValue] = useState(0);
  const [inputBankType, setInputBankType] = useState('');
  const [inputNoRek, setInputNoRek] = useState('');
  const [inputTitleBank, setInputTitleBank] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const inputRefRekNumber = useRef(null);
  const inputRefTotalPrice = useRef(null);

  const handleCopyText = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          console.log('Text copied to clipboard');
        })
        .catch((error) => {
          console.error('Failed to copy text:', error);
        });
    }
  };

  const handleCopyRekNumber = () => {
    handleCopyText(inputRefRekNumber);
  };

  const handleCopyTotalPrice = () => {
    handleCopyText(inputRefTotalPrice);
  };

  useEffect(() => {
    const getOrderData = localStorage.getItem('order_detail');
    if (!getOrderData) {
      handleShow();
      return;
    }

    const getOrderDataJson = JSON.parse(getOrderData);
    const bankType = getOrderDataJson.bankType;

    if (bankType === 'BCA') {
      setInputBankType('BCA');
      setInputNoRek('14122331');
      setInputTitleBank('BCA');
    } else if (bankType === 'BNI') {
      setInputBankType('BNI');
      setInputNoRek('1244112323231');
      setInputTitleBank('BNI');
    } else {
      setInputBankType('Mandiri');
      setInputNoRek('52311112');
      setInputTitleBank('MANDIRI');
    }
  }, [navigate]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setPreviewImage(URL.createObjectURL(file));
    setImage(file);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } =
    useDropzone({ onDrop });

  const handleClickConfirmation = (e) => {
    e.preventDefault();
    props.handleClick(image);
  };

  const totalPriceDisplay = `Rp ${props.data?.total_price}`;

  const dropzoneStyle = {
    border: '2px dashed #ccc',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    gap: '8px',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const activeStyle = {
    border: '2px dashed #007bff'
  };

  const acceptStyle = {
    border: '2px dashed #00e676'
  };

  const rejectStyle = {
    border: '2px dashed #ff1744'
  };

  let dropzoneStyleDynamic = { ...dropzoneStyle };
  if (isDragActive) {
    dropzoneStyleDynamic = { ...dropzoneStyleDynamic, ...activeStyle };
  }
  if (isDragAccept) {
    dropzoneStyleDynamic = { ...dropzoneStyleDynamic, ...acceptStyle };
  }
  if (isDragReject) {
    dropzoneStyleDynamic = { ...dropzoneStyleDynamic, ...rejectStyle };
  }

  const iconCopyStyle = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    paddingTop: '5px',
    paddingRight: '5px'
  };

  const inputStyle = {
    padding: '9px 12px',
    width: '700px',
    height: '30px',
    background: '#FFFFFF',
    border: '1px solid #3C3C3C',
    borderRadius: '2px'
  };

  const [bcaTransfer, setBCATransfer] = useState(false);
  const [bniTransfer, setBNITransfer] = useState(false);
  const [mandiriTransfer, setMandiriTransfer] = useState(false);

  const handleBCAClick = (e) => {
    e.preventDefault();
    setBCATransfer(true);
    setBNITransfer(false);
    setMandiriTransfer(false);
    setInputBankType('BCA');
    setInputNoRek('14122331');
    setInputTitleBank('BCA');
  };

  const handleBNIClick = (e) => {
    e.preventDefault();
    setBNITransfer(true);
    setBCATransfer(false);
    setMandiriTransfer(false);
    setInputNoRek('1244112323231');
    setInputTitleBank('BNI');
  };

  const handleMandiriClick = (e) => {
    e.preventDefault();
    setMandiriTransfer(true);
    setBNITransfer(false);
    setBCATransfer(false);
    setInputNoRek('52311112');
    setInputTitleBank('MANDIRI');
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bankType = localStorage.getItem('order_data');
  const bankTypeObjt = JSON.parse(bankType);
  const namaBank = bankTypeObjt.bankType;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="image_service">
              <div className="left-content-paymnet">
                <div className="payment-section reminder-payment">{props.children}</div>
                <div className="payment-section">
                  <h5>Lakukan Transfer Ke</h5>
                  <div className="payment-section-bank">
                    <Row>
                      <Col xs="auto">
                        <Button className="custom-button custom-btn-light">{inputTitleBank}</Button>
                      </Col>
                      <Col>
                        <div className="bank-info">
                          <p className="bank-name">{inputBankType} Transfer</p>
                          <p className="bank-an">a.n Binar Car Rental</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="coloumn-copy-rek">
                    <h5>Nomor Rekening</h5>
                    <div className="input-group">
                      <input
                        ref={inputRefRekNumber}
                        type="text"
                        value={inputNoRek}
                        readOnly
                        style={inputStyle}
                      />
                      <button onClick={handleCopyRekNumber} style={iconCopyStyle}>
                        <MdContentCopy />
                      </button>
                    </div>
                  </div>
                  <div className="coloumn-copy-totalpay">
                    <h5>Total Bayar</h5>
                    <div className="input-group">
                      <input
                        ref={inputRefTotalPrice}
                        type="text"
                        value={totalPriceDisplay}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                      <button onClick={handleCopyTotalPrice} style={iconCopyStyle}>
                        <MdContentCopy />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="payment-section">
                  <div className="payment-info">
                    {namaBank === 'BCA' ? (
                      <IndexInstructionBCA />
                    ) : namaBank === 'BNI' ? (
                      <IndexInstructionBNI />
                    ) : (
                      <IndexInstructionMandiri />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {!successUpload ? (
              <div className="right-content-payment">
                <div className="confirm-dropzone-title">
                  <h6>Konfirmasi Pembayaran</h6>
                  <p>
                    Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera
                    kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.
                  </p>
                </div>

                <div className="confrim-dorpzone-upload">
                  <h6>Upload Bukti Pembayaran</h6>
                  <p>
                    Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti
                    bayarmu
                  </p>
                </div>

                {props.errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    <p>{props.errorMessage}</p>
                  </div>
                )}
                <div>
                  <section className="container">
                    <div {...getRootProps({ className: 'dropzone', style: dropzoneStyleDynamic })}>
                      <input {...getInputProps()} accept="image/*" />
                      {previewImage ? (
                        <img
                          src={previewImage}
                          className="img-fluid"
                          alt="Preview"
                          style={{ height: '40vh', objectFit: 'cover' }}
                        />
                      ) : (
                        <p>Drag 'n' drop some files here, or click to select files</p>
                      )}
                    </div>
                    <aside>
                      {acceptedFiles.map((file) => (
                        <li key={file.path}>
                          {file.path} - {file.size} bytes
                        </li>
                      ))}
                    </aside>
                  </section>
                </div>
                <div className="d-grid gap-2">
                  <Button variant="flat" onClick={handleClickConfirmation}>
                    konfirmasi pembayaran
                  </Button>
                </div>
              </div>
            ) : (
              <div className="right-content-payment">
                <div className="success-upload">
                  <div className="description-title-ticket mb-5">
                    <img src={successLogo} alt="success" className="mb-3" />
                    <h4>Upload berhasil</h4>
                    <p>tunggu sebentar anda akan di arahankan kehalaman selanjutnya</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bank-option">
            <div>
              <Row>
                <Col>
                  <Button variant="light" onClick={handleBCAClick}>
                    BCA
                  </Button>
                </Col>
                <Col>
                  <p>BCA Transfer</p>
                </Col>
                <Col>{bcaTransfer ? <span>&#10003;</span> : null}</Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="light" onClick={handleBNIClick}>
                    BNI
                  </Button>
                </Col>
                <Col>
                  <p>BNI Transfer</p>
                </Col>
                <Col>{bniTransfer ? <span>&#10003;</span> : null}</Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="light" onClick={handleMandiriClick}>
                    MANDIRI
                  </Button>
                </Col>
                <Col>
                  <p>MANDIRI Transfer</p>
                </Col>
                <Col>{mandiriTransfer ? <span>&#10003;</span> : null}</Col>
              </Row>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PaymentConfirm;
