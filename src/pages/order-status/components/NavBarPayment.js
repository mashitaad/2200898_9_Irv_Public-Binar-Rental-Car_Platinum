export default function NavBarPayment() {
  

  return (
    <>
      <nav className="navbar nav-ant">
        <div className="container-fluid ant-container">
        <div className="col-md-6">
          <div className="ant-brand">
            <img src={""} alt="brand" className="brand-cat img-fluid" />
          </div>
          </div>

          <div className="col-md-6 d-flex align-items-center ml-5">
          <div className='nav-admin-search'>
            <form className="d-flex">
              <input className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
               />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>

          <div className='user-profile-customer'>
            <p>customer name</p>
        </div>
          </div>
          <div className="d-flex ant-main-head align-items-center justify-content-between">
            <button className="btn ant-collapse" type="button"><i className="fa-solid fa-bars"></i></button>
          </div>
        </div>
      </nav>

    </>

  )
}
