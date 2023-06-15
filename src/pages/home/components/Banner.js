import React from "react";
import hero from "../../../assets/images/img_car.svg";
import "./styles/banner.css";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <>
      <div className="main-banner position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center mt-5">
              <div className="hero_description">
                <h1 className="title-banner">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="decription-banner">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <Link to="/car/list"> <button className="button_banner">Mulai Sewa Mobil</button></Link>
              </div>
            </div>
            <div className="image_hero">
              <img className="img-fluid " src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
