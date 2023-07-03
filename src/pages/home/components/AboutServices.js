/* eslint-disable react/prop-types */
import React from 'react';
import './styles/AboutServices.css';
import img_service from '../../../assets/images/lesti-kejora.webp';

const AboutServices = ({ bestCarStatic, linkOurService }) => {
  return (
    <div className="main position-relative">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image_service">
              <img className="img-fluid" src={img_service} alt="image_service" />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center ml-5" id="testcoy">
            <div className="service-description" ref={linkOurService}>
              <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah
                dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk
                perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>

              <ul>
                {bestCarStatic.map((item) => {
                  return (
                    <li key={item.id}>
                      <img src={item.image} alt={item.alt} />
                      {item.content}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
