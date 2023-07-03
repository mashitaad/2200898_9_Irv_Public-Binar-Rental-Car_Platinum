import { render, screen } from '@testing-library/react';
import CarDetail from '../components/CarDetaill';

describe('CarDetail', () => {
  const car = {
    image: 'car-image.jpg',
    name: 'Car Name',
    category: 'medium',
    price: 100000
  };

  test('renders car image', () => {
    render(<CarDetail car={car} />);
    const carImage = screen.getByAltText(car.name);
    expect(carImage).toBeInTheDocument();
    expect(carImage.getAttribute('src')).toBe(car.image);
  });

  test('renders car name', () => {
    render(<CarDetail car={car} />);
    const carName = screen.getByText(car.name);
    expect(carName).toBeInTheDocument();
  });

  test('renders car category', () => {
    render(<CarDetail car={car} />);
    const carCategory = screen.getByText('4-6 orang');
    expect(carCategory).toBeInTheDocument();
  });

  test('renders car price', () => {
    render(<CarDetail car={car} />);
    const carPrice = screen.getByText('Rp 100,000');
    expect(carPrice).toBeInTheDocument();
  });
});
