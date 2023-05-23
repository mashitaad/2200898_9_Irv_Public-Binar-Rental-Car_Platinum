import React, { useEffect } from 'react'
import CarDetail from './components/CarDetail'
import { useParams } from 'react-router-dom';
import FromFilterDetail from '../../../components/from-filter/FromFilterDetail';
import { useDispatch, useSelector } from 'react-redux';
import { carSelectors, getCarById } from '../../../features/carSlice';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import Banner from '../../home/components/Banner';
import NavbarLayout from '../../../components/layouts/Navbar';
import FormCalendar from './components/FormCalendar';

const CarDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const car = useSelector(carSelectors.selectCarById);
  const loading = useSelector(carSelectors.loading)

  useEffect(() => {
    dispatch(getCarById(id));
    
  }, [id]);


  const calendarHandle = (payload) => {
    console.log(payload)
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