import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { customerGetOrderById, orderSelector } from '../../../features/orderSlice';
import { Button } from 'react-bootstrap';

export default function PendingInvoice() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const order = useSelector(orderSelector.selectCustomerOrdeyById);
    const [time, setTime] = useState(0);

    useEffect(() => {
        dispatch(customerGetOrderById(id));
    }, [dispatch, id]);

    useEffect(() => {
        const updatedAt = new Date(order?.updatedAt).getTime();
        const currentTime = new Date().getTime();
        const oneDayInMilliseconds = 10 * 60 * 1000;
        const timeDifference = currentTime - updatedAt;
        const remainingTime = oneDayInMilliseconds - timeDifference;
        setTime(remainingTime);

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1000);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [order?.updatedAt]);

    const formatTime = (time) => {
        if (time <= 0) {
            return '00:00:00';
        }

        const hours = Math.floor(time / (60 * 60 * 1000));
        const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((time % (60 * 1000)) / 1000);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>


            <div className="description-title-ticket">
                <h4>Pembayaran Sedang Di Periksa</h4>

                <div className="countdown-ticket">
                    <span className="time-block">{formatTime(time).split(':')[0]}</span>
                    <span>:</span>
                    <span className="time-block">{formatTime(time).split(':')[1]}</span>
                    <span>:</span>
                    <span className="time-block">{formatTime(time).split(':')[2]}</span>
                </div>

                <div className="payment-ticket">

                    <p>Pembayaran sedang diproses oleh admin, mohon tunggu maksimal 10 menit</p>
                    <Link to={`/order/status`}>
                        <Button variant="primary">Lihat Status Pesanan</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
