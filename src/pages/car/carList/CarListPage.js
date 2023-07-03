import React, { useEffect, useRef } from 'react';
import CarList from './components/CarList';
import FromFillter from '../../../components/from-filter/FromFilter';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import { carSelectors, getAllCars } from '../../../features/carSlice';
import Banner from '../../home/components/Banner';
import NavbarLayout from '../../../components/layouts/Navbar';
import FooterLayout from '../../../components/layouts/Footer';

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

  const linkOurService = useRef(null);
  const linkWhyUs = useRef(null);
  const linkTestimonial = useRef(null);
  const linkFaq = useRef(null);

  const props = {
    linkOurService,
    linkWhyUs,
    linkTestimonial,
    linkFaq
  };

  return (
    <>
      <NavbarLayout {...props} />
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
