import React, { useEffect, useState } from "react";
import ImageWithLoading from "../../../../components/ui/ImageWithLoading";
import { BsFillPeopleFill } from 'react-icons/bs'
import Accordion from "react-bootstrap/Accordion";
import "../styles/cardetail.css";
import LoadingSpiner from "../../../../components/ui/LoadingSpinner";
import nullImage from '../../../../assets/images/imagenotfound.jpeg'

export default function CarDetail(props) {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, []);

    // if (loading) {
    //     return (
    //         <LoadingSpiner />
    //     );
    // }



    const formatter = new Intl.NumberFormat("id-ID", {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });


    return (
        <div className="container detailcar">
            <div className="row row-car-detail">
                <div className="col d-flex mt-5 col-detail car-description">
                    <div className="w-100">
                        <h5>Tentang Paket</h5>
                        <h6>Inculde</h6>
                        <ul>
                            <li>
                                Apa saja yang termasuk dalam paket misal durasi max 12 jam
                            </li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                        <h6>Inculde</h6>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>
                                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                                20.000/jam
                            </li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>


                        <Accordion className="accordion-detail" defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header >
                                    Refund, Reschedule, Overtime
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>
                                            Jika overtime lebih dari 12 jam akan ada tambahan biaya
                                            Rp 20.000/jam
                                        </li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>
                                            Jika overtime lebih dari 12 jam akan ada tambahan biaya
                                            Rp 20.000/jam
                                        </li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>
                                            Jika overtime lebih dari 12 jam akan ada tambahan biaya
                                            Rp 20.000/jam
                                        </li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>
                <div className="col-md-5 d-flex mt-5 detail-car-card">
                    <div className="card-car">
                        <div className="image-car-detail">
                            {props.data?.image ? <ImageWithLoading src={props.data?.image} alt={props.data?.name} /> : <ImageWithLoading src={nullImage} alt={'null image'} />}

                            <p className="card-title-detail-name"> {props.data?.name}</p>
                            <p className="card-title-detail">
                                <BsFillPeopleFill />
                                {" "}
                                {props.data?.category === "small"
                                    ? "2-4 orang"
                                    : props.data?.category === "medium"
                                        ? "4-6 orang"
                                        : props.data?.category === "large"
                                            ? "6-8 orang"
                                            : props.data?.category}
                            </p>

                            <div className="row align-items-start">
                                <div className="col totaldetail">Total</div>
                                <div className="col pricedetail">
                                    {formatter.format(props.data?.price)}
                                </div>
                            </div>
                            {/* Calendar section */}
                            <div className="calendar-section">
                                {props.children}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}