import React, { useEffect, useState } from 'react'
import CarDetail from './components/CarDetail'
import { Link, useNavigate, useParams } from 'react-router-dom';
import FromFilterDetail from '../../../components/from-filter/FromFilterDetail';
import { useDispatch, useSelector } from 'react-redux';
import { carSelectors, getCarById } from '../../../features/carSlice';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import Banner from '../../home/components/Banner';
import NavbarLayout from '../../../components/layouts/Navbar';
import FooterLayout from '../../../components/layouts/Footer'
import FormCalendar from './components/FormCalendar';
import { format } from 'date-fns';
import { Button, Form, Modal } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { login } from '../../../features/authSlice';
import './styles/siginmodal.css'

const CarDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();

  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(['token']);
  const car = useSelector(carSelectors.selectCarById);
  const loading = useSelector(carSelectors.loading)
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSaveChanges = async (e) => {
    e.preventDefault()
    try {

      const result = await dispatch(login(formData)).unwrap();
      setCookie('token', result.access_token, { path: '/' });

      handleClose();
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    dispatch(getCarById(id));

  }, [dispatch, id]);


  const calendarHandle = (payload) => {
    if (payload.length <= 0) {
      setMessage('pilih tanggal sewa terlebih dahulu');
    } else {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

      if (!token) {
        setShow(true);
      } else {
        const formattedDate = (date) => {
          return format(date, 'yyyy-MM-dd');
        };
        let requestOrder = {
          start_date_at: formattedDate(payload[0]),
          finish_date_at: formattedDate(payload[1]),
          car_id: car?.id,
        };

        const newData = { ...requestOrder, ...car };
        localStorage.setItem('order_detail', JSON.stringify(newData));

        navigate('/payment');
      }
    }
  }


  return (
    <>
      <NavbarLayout />
      <Banner />
      <FromFilterDetail data={car} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>{car !== undefined &&
          <CarDetail car={car} message={message} >
            <FormCalendar onSubmit={calendarHandle} message={message} />
          </CarDetail>}</>
      )}
      <FooterLayout />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sigin untuk melanjutkan pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="email">
              {message && (
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              )}
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={e => setFormData({
                  ...formData, ...{ email: e.target.value }
                })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={e => setFormData({
                  ...formData, ...{ password: e.target.value }
                })}
              />
            </Form.Group>

            <div className="d-grid gap-2 sign-button">
              <Button
                type="sumbit"
                variant="custome"
                onClick={handleSaveChanges}
              >
                sign in
              </Button>
            </div>
            <div className="sign-up">
              <p>Don't Have account yet?
                <Link to='/register'><strong> Sign Up</strong> </Link>
              </p>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  )
}


export default CarDetailPage;