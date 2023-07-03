import React from 'react';
import './styles/userprofile.css';
import { Link } from 'react-router-dom';
import NavBarPayment from '../order-status/components/NavBarPayment';
export default function UserPage() {
  return (
    <>
      <NavBarPayment />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-gNclassNamees-profile.jpg"
                alt="noimage"
              />
              <span className="font-weight-bold"></span>
              <span className="text-black-50">
                <strong>
                  <p>irvan taufik</p>
                </strong>
              </span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">User Profile</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <p>irvan</p>
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <p>taufik</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <p>08231123</p>
                </div>

                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <p>JL. Dago no 110</p>
                </div>

                <div className="col-md-12">
                  <label className="labels">Address Type</label>
                  <p>home</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">City</label>
                  <p>Bandung</p>
                </div>
                <div className="col-md-12">
                  <label className="labels">Province</label>
                  <p>Jawa Barat</p>
                </div>
              </div>
              <div className="row mt-3"></div>
              <div className="mt-5 text-center">
                <Link to={'/user/profile/setting'}>
                  <button className="btn btn-primary profile-button" type="button">
                    edit profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </SideBarAdmin> */}
    </>
  );
}
