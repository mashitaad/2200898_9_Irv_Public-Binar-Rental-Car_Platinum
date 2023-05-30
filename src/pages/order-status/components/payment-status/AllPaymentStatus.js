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
      carName: carItem ? carItem.name : 'unknown',
      carImage: carItem ? carItem.image : 'unknown',
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
            !o.status&& o.slip ? "SEDANG PROSES" : "SELESAI"}
          
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
                    <ImageWithLoading
                      src={o.carImage}
                      alt={o.CarName}
                    />
                  </div>
                )
              }
                <div>
                  <h5>Nama/Type Mobil {o?.carName} </h5>
                  <h5>tanggal Sewa {moment(o?.start_rent_at).format('DD MMMM YYYY')}</h5>
                  <h5>tanggal berakhir sewa {moment(o?.finish_rent_at).format('DD MMMM YYYY')}</h5>
                  <p>No pesanan: {o.id}</p>
                </div>
              </div>
              <div className='col-md-3'>
                total bayar: {formatter.format(o.total_price)}
              </div>
            </div>
            
            <div className='payment-option-button'>
              {
                !o.status && !o.slip &&
                <>
                  <Button variant="primary">Bayar Sekarang</Button>
                 
                  <Button
                      variant="outline-danger"
                      onClick={(e) => {
                        e.preventDefault()
                        props.handleDelete(o.id)
                      }}
                    >
                      Batalkan Pesanan
                    </Button>
                  <Link to={`/payment/confirm/order/${o.id}`}>
                  <Button variant="primary">Lihat Detail</Button>
                  </Link>
                </>
              }
              {
                !o.status && o.slip &&
                <>
                  <Button variant="primary">Lihat Detail</Button>
                </>
              }
              {
                o.status && o.slip &&
                <>
                <Button variant="primary">Lihat Detail</Button>
                <Button variant="primary">Sewa Lagi</Button>
                </>
              }
            </div>

          </Card.Body>
        </Card>
      ))}

    </>
  )
}

