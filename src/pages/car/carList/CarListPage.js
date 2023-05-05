import React, { useEffect, useState } from 'react'
import CarList from './components/CarList'
import FromFillter from '../../../components/from-filter/FromFilter'
import config from "../../../config/index"
import axios from 'axios';
export default function CarListPage() {
  
  
  const [dataCar, setDataCar] = useState({
    cars: []
  });


  useEffect(() => {
    getCars();
  }, []);

  const apiUrl = config.apiBaseUrl
  const getCars = async (params = {}) => {
    const response = await axios.get(
      apiUrl + "/customer/v2/car", {
      params
    }
    );
    setDataCar(response.data.cars);
  };

  const onFilter = (payload) => {
    getCars(payload)
  }


  
  return (
    <>
    
    <FromFillter onSubmit={onFilter} />
      <CarList data={dataCar} />
    </>
  );
}