import '../styles/paymentreceipt.css'
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from '../../../assets/icons/logo.png'

const PaymentReceipt = () => {
    const [loader, setLoader] = useState(false);

    const downloadPDF = () => {
        const capture = document.querySelector('.actual-receipt');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('receipt.pdf');
        })
    }
    return (
        <div className="wrapper">
            <div className="receipt-box">
                <div className="actual-receipt">
                    <div className="receipt-organization-logo">
                        <img alt="logo" src={logo} />
                    </div>
                    <h5>Binar Car Rental</h5>
                    <h6>
                    Jalan Suroyo No. 161 Mayangan Kota robolonggo 672000 
                    </h6>
                    <div className="phone-and-website">
                        <p>
                            <a href={`binarcarrental@gmail.com`}>
                            binarcarrental@gmail.com
                            </a>
                        </p>
                        <p> 081-233-334-808</p>
                        <p>
                            <a
                                href="https://www.youtube.com/@jsSolutions"
                                target="blank"
                            >
                            </a>
                        </p>

                    </div>

                    <div className="colored-row first">
                        <span>Customer Email</span>
                    </div>

                    <div className="data-row">
                        <span className="font-weight">Email</span>
                        <span>example@gmail.com</span>
                    </div>
                    <div className="colored-row first">
                        <span>Order Number</span>
                        <span>id</span>
                    </div>

                    <div className="data-row">
                        <span className="font-weight">number</span>
                        <span>1233</span>
                    </div>


                    <div className="colored-row">
                        <span>Transaction Details</span>
                        <span />
                    </div>

                    <div className="data-row border-bottom">
                        <span>
                            <span className="font-weight">
                                Car Type
                                :
                            </span>
                            {' '}
                            expander
                        </span>
                        <span>
                            <span className="font-weight">
                                Price
                                {' '}
:
                            </span>
                            {' '}
                            500.000
                        </span>
                    </div>

                    <div className="data-row border-bottom">
                        <span>
                            <span className="font-weight">
                                start rent :
                                {' '}
                                
                            </span>
                            {' '}
                            2023-02-12 
                        </span>
                        <span>
                            <span className="font-weight">
                                finish rent :
                            </span>
                            {' '}
                            2023-02-14 
                        </span>
                    </div>
                    <div className="data-row border-bottom">
                        <span>
                            <span className="font-weight">
                                total day 
                                {' '}
                                :
                            </span>
                            {' '}
                            2
                        </span>
                      
                    </div>
                    <div className="data-row border-bottom">
                        <span className="font-weight">
                            Transaction: 1.000.000
                        </span>
                        <span />
                    </div>
                    <div className="colored-row">
                        <span>Thank You For Your Order </span>
                        <span />
                    </div>

                </div>
                {/* end of actual receipt */}

                {/* receipt action */}
                <div className="receipt-actions-div">
                    <div className="actions-right">
                        <button
                            className="receipt-modal-download-button"
                            onClick={downloadPDF}
                            disabled={!(loader === false)}
                        >
                            {loader ? (
                                <span>Downloading</span>
                            ) : (
                                <span>Download</span>
                            )}

                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PaymentReceipt;