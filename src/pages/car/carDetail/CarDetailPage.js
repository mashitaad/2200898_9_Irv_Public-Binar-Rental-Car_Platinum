import React, { useEffect } from 'react'
import CarDetail from './components/CarDetail'
import { useParams } from 'react-router-dom';
import FromFilterDetail from '../../../components/from-filter/FromFilterDetail';
import { useDispatch, useSelector } from 'react-redux';
import { carSelectors, getCarById } from '../../../features/carSlice';

const CarDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const car = useSelector(carSelectors.selectCarById);
  console.log(car)
  
  useEffect(() => {
    dispatch(getCarById(id));
    
  }, [id]);
  
  

  return (
    <>
    
      <FromFilterDetail data={car} />
      <CarDetail data={car}/>
    </>
  )
}


export default CarDetailPage;