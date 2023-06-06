import ImageWithLoading from "../../../../components/ui/ImageWithLoading";
import { BsFillPeopleFill } from 'react-icons/bs'
import Accordion from "react-bootstrap/Accordion";
import "../styles/cardetail.css";
import nullImage from '../../../../assets/images/imagenotfound.jpeg'

export default function CarDetail(props) {
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
                            {props.car?.image ? <ImageWithLoading src={props.car?.image} alt={props.data?.name} /> : <ImageWithLoading src={nullImage} alt={'null image'} />}

                            <p className="card-title-detail-name"> {props.car?.name}</p>
                            <p className="card-title-detail">
                                <BsFillPeopleFill />
                                {" "}
                                {props.car?.category === "small"
                                    ? "2-4 orang"
                                    : props.car?.category === "medium"
                                        ? "4-6 orang"
                                        : props.car?.category === "large"
                                            ? "6-8 orang"
                                            : props.car?.category}
                            </p>

                            <div className="row align-items-start">
                                <div className="col totaldetail">Total</div>
                                <div className="col pricedetail">
                                    {formatter.format(props.car?.price)}
                                </div>
                            </div>
                            {/* Calendar section */}
                            {props.message && (
                                <div className="alert alert-danger" role="alert">
                                    {props.message}
                                </div>
                            )}
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