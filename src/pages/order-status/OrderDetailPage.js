import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { customerGetOrderById, orderSelector } from '../../features/orderSlice';
import { carSelectors, getCarById } from '../../features/carSlice';
import { Button } from 'react-bootstrap';
import NavBarPayment from './components/NavBarPayment';
import SideBarAdmin from './components/SIdeBarPayment';
import { useParams } from 'react-router-dom';
import notFoundSlip from '../../assets/images/imagenotfound.jpeg'
import moment from 'moment';


export default function OrderDetailPage() {
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };
    const { id } = useParams()
    const dispatch = useDispatch()

    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });
    const order = useSelector(orderSelector.selectCustomerAllOrders)
    useEffect(() => {
        dispatch(customerGetOrderById(id))
    }, [dispatch, id])

    useEffect(() => {
        if (order?.CarId) {
            dispatch(getCarById(order.CarId))
        }
    }, [dispatch, order?.CarId])
    const car = useSelector(carSelectors.selectCarById)


    const orderDetail = {
        id: order?.id,
        total_price: order?.total_price,
        start_rent_at: order?.start_rent_at,
        finish_rent_at: order?.finish_rent_at,
        status: order?.status,
        slip: order?.slip,
        UserId: order?.UserId,
        CarId: order?.CarId,
        carName: car?.name,
        carImage: car?.image,
        customerEmail: order?.User?.email,
        createdAt: order?.createdAt,
        updatedAt: order?.updatedAt

    }

    console.log(orderDetail)

    return (
        <>
            <NavBarPayment />
            <SideBarAdmin>
                <div className="container rounded bg-white mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <div>
                                    <img
                                        src={orderDetail.slip ? orderDetail.slip : notFoundSlip }
                                        alt={''}
                                        onClick={toggleZoom}
                                        style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                    {isZoomed && (
                                        <div
                                            style={{
                                                position: 'fixed',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 9999,
                                            }}
                                            onClick={toggleZoom}
                                        >
                                            <img src={orderDetail.slip ? orderDetail.slip : notFoundSlip } alt={''} style={{ maxWidth: '90%', maxHeight: '90%' }} />
                                        </div>
                                    )}
                                </div>

                                <strong>
                                    <p>
                                        bukti transfer
                                    </p>
                                </strong>
                            </div>
                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Detail Pesanan</h4>
                                </div>
                                <div className="row mt-2">

                                    <div className="col-md-6"><label className="labels"><strong>email</strong></label> <p>{orderDetail.customerEmail}</p></div>
                                    <div className="col-md-6"><label className="labels"><strong>No Pesanan</strong></label> <p> {orderDetail.id} </p></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels"><strong>Car/Type</strong></label>
                                        <p>{orderDetail.carName}</p>
                                    </div
                                    ><div className="col-md-12"><label className="labels"><strong>Status Pesanan</strong></label>
                                        <p>{!orderDetail.status && !orderDetail.slip ? "Belum Bayar" :
                                            !orderDetail.status && orderDetail.slip ? "Sedang di Proses" : "selesai"
                                        }
                                        </p>
                                    </div>
                                    <div className="col-md-12"><label className="labels"><strong>Tanggal Mulai</strong></label>
                                        <p>
                                            {moment(orderDetail.start_rent_at).format('DD MMMM YYYY')}
                                        </p>
                                    </div
                                    ><div className="col-md-12"><label className="labels"><strong>Tanggal Berakhir</strong></label>
                                        <p>
                                            {moment(orderDetail.finish_rent_at).format('DD MMMM YYYY')}
                                        </p>
                                    </div>
                                    <div className="col-md-12"><label className="labels"><strong>Total Bayar</strong></label>
                                        <p>
                                            {formatter.format(orderDetail.total_price)}
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                </div>
                                <div className="mt-5 text-center">
                                    {
                                        orderDetail.status && orderDetail.slip &&
                                        <>
                                            <Button variant='success'>Sewa Lagi</Button>
                                            <Button variant='success'>download slip</Button>
                                        </>
                                    }
                                    {
                                        !orderDetail.status && orderDetail.slip &&
                                        <>
                                            <Button variant='success'>Kembali</Button>
                                        </>

                                    }
                                    {
                                        !orderDetail.status && !orderDetail.slip &&
                                        <>
                                            <Button variant='success'>Bayar Sekarang</Button>
                                            <Button variant='danger'>Batalkan Pesanan</Button>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </SideBarAdmin>
        </>
    )
}
