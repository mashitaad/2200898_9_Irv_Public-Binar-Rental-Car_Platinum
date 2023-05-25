import { Button, Card } from 'react-bootstrap'
import exampleImg from '../../../../assets/person/person1.png'
import moment from 'moment';
import '../../styles/cardpayment.css'
import 'moment/locale/id';
moment.locale('id')


export default function AllPaymentStatus(props) {

  const formatter = new Intl.NumberFormat("id-ID", {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });


  return (
    <>
      {props.data?.orders?.map(o => (
        <Card className='card-status-payment' key={o.id}>
          <Card.Header>
            {!o.status && !o.slip ? "BELUM BAYAR" :
            !o.status&& o.slip ? "SEDANG PROSES" : "SELESAI"}
          
          </Card.Header><Card.Body>
            <div className='row'>
              <div className='col-md-9 card-content-payment'>
                <img className='card-img-payment' src={exampleImg} alt='Example' />

                <div>
                  <h5>Nama/Type Mobil {o.car?.name} </h5>
                  <h5>tanggal Sewa {moment(o.car?.start_rent_at).format('DD MMMM YYYY')}</h5>
                  <h5>tanggal berakhir sewa {moment(o.car?.finish_rent_at).format('DD MMMM YYYY')}</h5>
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
                  <Button variant="primary">Batalkan Pesanan</Button>
                  <Button variant="primary">Lihat Detail</Button>
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
                <Button variant="primary">Lihat Detail</Button>
              }
            </div>

          </Card.Body>
        </Card>
      ))}

    </>
  )
}
