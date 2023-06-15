import { Button, Card } from 'react-bootstrap'
import ImageWithLoading from '../../../../components/ui/ImageWithLoading'
import moment from 'moment';
import nullImage from '../../../../assets/images/imagenotfound.jpeg'
import '../../styles/cardpayment.css'
import 'moment/locale/id';
import { Link } from 'react-router-dom';
moment.locale('id')


export default function AllPaymentStatus(props) {

  const formatter = new Intl.NumberFormat("id-ID", {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });

  const newDataOrders = props.data?.orders?.map(orderItem => {
    const carItem = props.cars?.cars?.find(carItem => carItem.id === orderItem.CarId);
    return {
      id: orderItem.id,
      total_price: orderItem.total_price,
      start_rent_at: orderItem.start_rent_at,
      finish_rent_at: orderItem.finish_rent_at,
      status: orderItem.status,
      slip: orderItem.slip,
      UserId: orderItem.UserId,
      CarId: orderItem.CarId,
      carName: carItem ? carItem.name : null,
      carImage: carItem ? carItem.image : null,
      createdAt: orderItem.createdAt,
      updatedAt: orderItem.updatedAt
    };
  });


  return (
    <>
      {newDataOrders?.map(o => (
        <Card className='card-status-payment' key={o.id}>
          <Card.Header>
            {!o.status && !o.slip ? "BELUM BAYAR" :
              !o.status && o.slip ? "SEDANG PROSES" : "SELESAI"}

          </Card.Header><Card.Body>
            <div className='row'>
              <div className='col-md-9 card-content-payment'>
                {o.carImage === null || o.carImage === undefined ?
                  (
                    <div>
                      <ImageWithLoading
                        src={nullImage}
                        alt={'null'}
                      />
                    </div>
                  ) :
                  (
                    <div>
                      <img
                        src={o.carImage}
                        alt={o.carName}
                        style={{ width: "350px", height: "250px" }}
                      />
                    </div>
                  )
                }
                <div className="col-md-5 border-right">
                  <div className="p-3">
                    <div className="row">
                      <div className="col-md-6"><label className="labels"><strong>No Pesanan</strong></label> <p> {o?.id} </p></div>
                    </div>
                    <div className="col-md-6"><label className="labels"><strong>Total Bayar</strong></label>
                        <p>{formatter.format(o.total_price)}</p>
                      </div>
                    <div className="row">
                      <div className="col-md-6"><label className="labels"><strong>Car / Type</strong></label>
                        <p>{o?.carName}</p>
                      </div>
                     
                      <div className="col-md-12"><label className="labels"><strong>Mulai sewa</strong></label>
                        <p>{moment(o?.start_rent_at).format('DD MMMM YYYY')}</p>
                      </div>
                      <div className="col-md-12"><label className="labels"><strong>Berakhir sewa</strong></label>
                        <p>{moment(o?.finish_rent_at).format('DD MMMM YYYY')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 mt-3'>
                <div className="col-md-6"><label className="labels"><strong>Tanggal order :</strong></label>  <p>{moment(o?.created_at).format('DD MMMM YYYY')}</p></div>
              </div>
            </div>

            <div className='payment-option-button'>
              {
                !o.status && !o.slip &&
                <>
                  <Link to={`/payment/confirm/order/${o.id}`}>
                    <Button variant="primary">Bayar Sekarang</Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.preventDefault()
                      props.handleDelete(o.id)
                    }}
                  >
                    Batalkan Pesanan
                  </Button>
                  <Link to={`/order/detail/${o.id}`}>
                    <Button variant="info">Lihat Detail</Button>
                  </Link>
                </>
              }
              {
                !o.status && o.slip &&
                <Link to={`/order/detail/${o.id}`}>
                  <Button variant="info">Lihat Detail</Button>
                </Link>
              }
              {
                o.status && o.slip &&

                <>
                  <Link to={`/payment/invoice/${o.id}`}>
                    <Button variant="primary">Donwload Slip</Button>
                  </Link>
                  <Link to={`/car/list/${o.CarId}`}>
                    <Button variant="warning">Sewa Lagi</Button>
                  </Link>
                  <Link to={`/order/detail/${o.id}`}>
                    <Button variant="info">Lihat Detail</Button>
                  </Link>
                </>
              }
            </div>

          </Card.Body>
        </Card>
      ))}

    </>
  )
}


