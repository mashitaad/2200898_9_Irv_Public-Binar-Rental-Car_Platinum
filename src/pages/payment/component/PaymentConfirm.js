import React, { useEffect, useRef, useState } from 'react'
import '../styles/paymentconfirm.css'
import { Button, Col, Row } from 'react-bootstrap'

export const PaymentConfirm = (props) => {
    const [inputValue, setInputValue] = useState(0);
    const [inputBankType, setInputBankType] = useState('')
    const [inputNoRek, setInputNoRek] = useState('')
    const [inputTitleBank, setInputTitleBank] = useState('')

    function handleChange(event) {
        const newValue = event.target.value;
        setInputValue(newValue);
    }


    const inputRef = useRef(null);
    const handleCopy = () => {
        if (inputRef.current) {
            inputRef.current.select();
            navigator.clipboard.writeText(inputRef.current.value)
                .then(() => {
                    console.log('Text copied to clipboard');
                })
                .catch((error) => {
                    console.error('Failed to copy text:', error);
                });
        }
    };

    const getOrderData = localStorage.getItem('order_detail')
    const getOrderDataJson = JSON.parse(getOrderData)
    const bankType = getOrderDataJson.bankType


    useEffect(() => {

        if (bankType === 'BCA') {
            setInputBankType('BCA')
            setInputNoRek('14122331')
            setInputTitleBank("BCA")
        } else if (bankType === 'BNI') {
            setInputBankType('BNI')
            setInputNoRek('1244112323231')
            setInputTitleBank("BNI")
        } else {
            setInputBankType('Mandiri')
            setInputNoRek('52311112')
            setInputTitleBank("MANDIRI")
        }
    }, [bankType])


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="image_service">
                        <div className='left-content-paymnet'>
                            <div className='payment-section reminder-payment'>


                                {props.children}

                            </div>
                            <div className='payment-section'>
                                <h5>lakukan transfer ke</h5>
                                <div className='payment-section-bank'>
                                    <Row>
                                        <Col>
                                            <Button
                                                variant="light"
                                            >{inputTitleBank}</Button>{' '}
                                        </Col>
                                        <Col>
                                            <p>{inputBankType} Transfer</p>
                                            <p>a.n Binar Car Rental</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='coloumn-copy-rek'>
                                    <h5>no rekening</h5>
                                    <input ref={inputRef}
                                        type="text"
                                        value={inputNoRek}
                                    />
                                    <button onClick={handleCopy}>
                                        <p>copy</p>
                                    </button>

                                </div>
                                <div className='coloumn-copy-totalpay'>
                                    <h5>total bayar</h5>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={props.data?.total_price}
                                        onChange={handleChange}
                                    />
                                    <button onClick={handleCopy}>
                                        <p>copy</p>
                                    </button>

                                </div>
                            </div>
                            <div className='payment-section'>
                                <div className='payment-info'>
                                    <h5>intruksi pemabayaran</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='right-content-payment'>
                        <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>

                        {/* 
                        <Link to={'/payment/confrimation'}> */}
                        <div className="d-grid gap-2">
                            <Button
                                variant="flat"

                            >
                                konfirmasi pembayaran
                            </Button>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>

    )
}


PaymentConfirm.preventDefault = {
    handleClick: () => ''
}