import React, { useEffect } from 'react';
import CarList from './components/CarList';
import FromFillter from '../../../components/from-filter/FromFilter';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import { carSelectors, getAllCars } from '../../../features/carSlice';
import Banner from '../../home/components/Banner';
import NavbarLayout from '../../../components/layouts/Navbar';
import FooterLayout from '../../../components/layouts/Footer';
import { Helmet } from 'react-helmet-async';

export default function CarListPage() {
  const dispatch = useDispatch();
  const loading = useSelector(carSelectors.loading);

  const data = useSelector(carSelectors.selectAllCars);
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const onFilter = (payload) => {
    dispatch(getAllCars(payload));
  };

  return (
    <>
      <Helmet>
        <title>Car List</title>
        <meta
          name="description"
          content="Displays the entire list of cars that are ready to be rented."
        />
        <link rel="canonical" href="/car/list" />
      </Helmet>
      <NavbarLayout />
      <Banner />
      <FromFillter onSubmit={onFilter} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>{data.cars !== undefined && <CarList cars={data.cars} />}</>
      )}
      <FooterLayout />
    </>
  );
}
