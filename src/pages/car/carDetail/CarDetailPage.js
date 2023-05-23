import React, { useEffect } from 'react'
import CarDetail from './components/CarDetail'
import { useNavigate, useParams } from 'react-router-dom';
import FromFilterDetail from '../../../components/from-filter/FromFilterDetail';
import { useDispatch, useSelector } from 'react-redux';
import { carSelectors, getCarById } from '../../../features/carSlice';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import Banner from '../../home/components/Banner';
import NavbarLayout from '../../../components/layouts/Navbar';
import FormCalendar from './components/FormCalendar';
import { format } from 'date-fns';

const CarDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();

  const dispatch = useDispatch();
  const car = useSelector(carSelectors.selectCarById);
  const loading = useSelector(carSelectors.loading)

  useEffect(() => {
    dispatch(getCarById(id));
    
  }, [id]);


  const calendarHandle = (payload) => {
    const formattedDate = (date) => {
      return format(date, "yyyy-MM-dd");
    };
    let requestOrder = {
      start_date_at: formattedDate(payload[0]),
      finish_date_at: formattedDate(payload[1]),
      car_id: car?.id
    };
    const newData = {...requestOrder,...car}
    localStorage.setItem('order_detail',JSON.stringify(newData))
    navigate('/payment')
  }
  

  return (
    <>
    <NavbarLayout />
    <Banner/>
      <FromFilterDetail data={car} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>{car !== undefined && 
        <CarDetail car={car} > 
          <FormCalendar onSubmit = {calendarHandle}/>
        </CarDetail>}</>
      )} 
    </>
  )
}


export default CarDetailPage;