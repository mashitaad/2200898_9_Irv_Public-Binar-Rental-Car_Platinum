import "./fromfilter.css"

export default function FromFilterDetail(props) {

  return (
    <>

      <div className="container seacrh-car">
        <div className="title-search">
          <h5>Pencarianmu</h5>
        </div>

        <form className="table-option-detailcar">

          <div className="grid-input">
            <label htmlFor="inputState" className="form-label">
              Nama Mobil
            </label>
            <input
              type="nama mobil"
              className="form-control"
              id="inputNamaMobil"
              placeholder={props.data.name}
              disabled />
          </div>
          <div className="grid-input">
            <label htmlFor="inputState" className="form-label">
              Category
            </label>
            <input id="inputState"
              className="form-select"
              disabled
              placeholder={props.data.category === 'small' ? '2-4 orang' :
                props.data.category === 'medium' ? '4-6 orang' :
                  props.data.category === 'large' ? '6-8 orang' :
                    props.data.category}

            />
          </div>
          <div className="grid-input">
            <label htmlFor="inputState" className="form-label" disabled>
              Harga
            </label>
            <input id="inputState"
              className="form-select"
              disabled
              placeholder={props.data.price}
            />
          </div>
          <div className="grid-input">
            <label htmlFor="inputState" className="form-label" disabled>
              Status
            </label>
            <input id="inputState"
              className="form-select"
              disabled
              placeholder={props.data.status === true ? 'disewa' : 'tersedia'}
            />
          </div>
        </form>

      </div>
    </>
  );
}