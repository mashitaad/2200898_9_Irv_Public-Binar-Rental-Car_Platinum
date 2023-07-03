import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCarById } from '../../../../features/carSlice';
import CarDetailPage from './carDetail.test';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn()
}));

jest.mock('../../../../features/carSlice', () => ({
  getCarById: jest.fn()
}));

describe('CarDetailPage', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    getCarById.mockClear();
    useNavigate.mockClear();
    useParams.mockClear();
  });

  test('renders car detail page with loading spinner', () => {
    useSelector.mockReturnValue({
      selectCarById: null,
      loading: true
    });

    render(<CarDetailPage />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('renders car detail page with car details', () => {
    const car = {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2022
    };

    useSelector.mockReturnValue({
      selectCarById: car,
      loading: false
    });

    render(<CarDetailPage />);

    // Assert car details are rendered
    expect(screen.getByText(car.make)).toBeInTheDocument();
    expect(screen.getByText(car.model)).toBeInTheDocument();
    expect(screen.getByText(car.year.toString())).toBeInTheDocument();
    // Add more assertions for other car details
  });

  test('handles calendar submission', () => {
    const navigate = jest.fn();
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams();

    useNavigate.mockReturnValue(navigate);
    useParams.mockReturnValue({ id: '1' });

    useSelector.mockReturnValue({
      selectCarById: { id: '1' },
      loading: false
    });

    render(<CarDetailPage />);
    const startDate = new Date('2023-06-01');
    const endDate = new Date('2023-06-05');
    fireEvent.change(screen.getByLabelText('Start Date'), { target: { value: startDate } });
    fireEvent.change(screen.getByLabelText('End Date'), { target: { value: endDate } });

    fireEvent.click(screen.getByText('Lanjutkan Pembayaran'));

    expect(navigate).toHaveBeenCalledWith('/payment');

    expect(getCarById).toHaveBeenCalledWith('1');
  });
});
