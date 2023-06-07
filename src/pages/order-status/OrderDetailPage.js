import React from 'react'

export default function OrderDetailPage() {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="mt-5" width="250px" src={data?.slip?.url_slip} alt='noimage' />

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
                    <h4 className="text-right">Konfirmasi Pembayaran</h4>
                </div>
                <div className="row mt-2">

                    <div className="col-md-6"><label className="labels"><strong>Nama</strong></label> <p>{data?.user?.user_detail?.first_name} {data?.user?.user_detail?.last_name}</p></div>
                    <div className="col-md-6"><label className="labels"><strong>No Pesanan</strong></label> <p>{data?.id} </p></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels"><strong>Car/Type</strong></label>
                        <p>{data?.car?.name}</p>
                    </div>

                    <div className="col-md-12"><label className="labels"><strong>Tanggal Sewa</strong></label>
                        <p> {moment(data?.start_rent_at).format('DD MMMM YYYY')}</p>
                    </div>
                    <div className="col-md-12"><label className="labels"><strong>Tanggal Berakhir</strong></label>
                        <p> {moment(data?.finish_rent_at).format('DD MMMM YYYY')}</p>
                    </div>
                    <div className="col-md-12"><label className="labels"><strong>Total Bayar</strong></label>
                        <p>{formatter.format(data?.total_price)}</p>
                    </div>
                </div>
                <div className="row mt-3">
                </div>
                <div className="mt-5 text-center">
                  
                  <Button 
                  variant='success'
                  onClick={handleConfirm}
                  >confirm</Button>
                  <Button 
                  variant='danger'
                  onClick={handleRejected}
                  >reject</Button>
                       

                </div>
            </div>
        </div>

    </div>
</div>

  )
}
