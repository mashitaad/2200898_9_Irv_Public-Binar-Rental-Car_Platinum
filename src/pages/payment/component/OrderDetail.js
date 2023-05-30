import React from "react";

const OrderDetail = (props) => {
  return (
    <div className="container seacrh-car">
      <div className="title-search">
        <h5>Detail Pesananmu</h5>
      </div>

      <form className="table-option-detailcar">
        <div className="grid-input">
          <label htmlFor="inputState" className="form-label">
            Nama/type Mobil
          </label>
          <input
            type="nama mobil"
            className="form-control"
            id="inputNamaMobil"
            placeholder={props.data.name}
            disabled
          />
        </div>
        <div className="grid-input">
          <label htmlFor="inputState" className="form-label">
            Category
          </label>
          <input
            id="inputState"
            className="form-select"
            disabled
            placeholder={
              props.data.category === "small"
                ? "2-4 orang"
                : props.data.category === "medium"
                ? "4-6 orang"
                : props.data.category === "large"
                ? "6-8 orang"
                : props.data.category
            }
          />
        </div>
        <div className="grid-input">
          <label htmlFor="inputState" className="form-label" disabled>
            Tanggal Mulai Sewa
          </label>
          <input
            id="inputState"
            className="form-select"
            disabled
            placeholder={props.data.start_date_at}
          />
        </div>
        <div className="grid-input">
          <label htmlFor="inputState" className="form-label" disabled>
            Tanggal Akhir Sewa
          </label>
          <input
            id="inputState"
            className="form-select"
            disabled
            placeholder={props.data.finish_date_at}
          />
        </div>
      </form>
    </div>
  );
};

export default OrderDetail;

OrderDetail.defaulProps = {};
