import React, { useEffect } from 'react'
import CarDetail from './components/CarDetail'
import { useParams } from 'react-router-dom';
import FromFilterDetail from '../../../components/from-filter/FromFilterDetail';
import { useDispatch, useSelector } from 'react-redux';
import { carSelectors, getCarById } from '../../../features/carSlice';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';

const CarDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const car = useSelector(carSelectors.selectCarById);
  const loading = useSelector(carSelectors.loading)
  console.log(loading)
  
  useEffect(() => {
    dispatch(getCarById(id));
    
  }, [id]);
  
  

  return (
    <>
      <FromFilterDetail data={car} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>{car !== undefined && <CarDetail car={car} />}</>
      )} 
    </>
  )
}


export default CarDetailPage;