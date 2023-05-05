import "./fromfilter.css"
import { useState } from "react";

export default function Fromfilter(props) {

  const [form, setForm] = useState({
    name: '',
    category: '',
    isRented: '',
    maxPrice: '',
    minPrice: '',

  })

  const handlePriceChange = (e) => {
    const { value } = e.target;
    let minPrice, maxPrice;
  
    switch (value) {
      case 'lessThan400K':
        minPrice = '';
        maxPrice = 400000;
        break;
      case 'between400Kand600K':
        minPrice = 400000;
        maxPrice = 600000;
        break;
      case 'moreThan600K':
        minPrice = 600000;
        maxPrice = '';
        break;
      default:
        minPrice = '';
        maxPrice = '';
        break;
    }
    setForm({
      ...form,
      minPrice,
      maxPrice
    });
  }

  const [buttonText, setButtonText] = useState('Pilih Mobil')

  const handleClick = () => {
    setButtonText('edit')
  }


  return (
    <>

      <div className="container seacrh-car">
      <div className="title-search">
          <h5>Pencarianmu</h5>
        </div>
        <form className="table-option" onSubmit={(e) => {
          e.preventDefault()
          props.onSubmit(form)
        }}>
          <div className="grid-input">
            <label htmlFor="inputEmail4" className="form-label">
              Nama Mobil
            </label>
            <input
              type="nama mobil"
              className="form-control"
              id="inputNamaMobil"
              placeholder="ketik nama/type mobil"
              onChange={e => setForm({
                ...form,
                ...{
                  name: e.target.value
                }
              })}
            />
          </div>
          <div className="grid-input">
            <label htmlFor="inputState" className="form-label">
              Category
            </label>
            <select id="inputState" 
            className="form-select"
            onChange={e => setForm({
              ...form,
              ...{
                category: e.target.value
              }
            })}
            >
              <option value="">Masukan Kapasitas Mobil</option>
              <option value="small">2 - 4 orang</option>
              <option value="medium">4 - 6 orang</option>
              <option value="large">6 - 8 orang</option>
            </select>
          </div>
          <div className="grid-input">
            <label htmlFor="inputState" className="form-label">
              Harga
            </label>
            <select id="inputState" 
            className="form-select"
            onChange= {handlePriceChange}
            >
              <option value="">Masukan Harga Per Hari</option>
              <option value="lessThan400K" >&lt; Rp.400000</option>
              <option value="between400Kand600K">Rp.400000 - Rp.600000</option>
              <option value="moreThan600K">&gt; Rp.600000</option>
            </select>
          </div>
          <div className="grid-input">
            <label htmlFor="inputState" className="form-label">
              Status
            </label>
            <select id="inputState" 
            className="form-select"
            onChange={e => setForm({
              ...form,
              ...{
                isRented: e.target.value
              }
            })}
            >
              <option value="">Pilih Status Mobil</option>
              <option value="false">free</option>
              <option value="true">disewa</option>
            </select>
          </div>

          <div className="grid-input-button">
            <button 
            type="submit" 
            className="button_banner"
            onClick={handleClick}
             > {buttonText}</button>
          </div>
        </form>
      </div>
    </>
  );
}

Fromfilter.defaultProps = {
  onSubmit: () => {},
}
