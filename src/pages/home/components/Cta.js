import React from 'react'
import './styles/Cta.css'
import { Link } from 'react-router-dom'

const Cta = (props) => {
  return (
    <>
    <div className="main" ref={props.linkRef}>
      <div className="container">
        <div className="kotak">
          <div className="cta-banner">
            <div className="row">
              <div className="col-md-12 center-banner">
                <div className="content-banner">
                  <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Assumenda, quas. Eaque esse consequuntur voluptatum
                    ab doloremque molestiae ad saepe quidem.
                  </p>
                  <Link to="/car">   <button className="button_banner">Mulai Sewa Mobil</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cta