import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormCalendar from './FormCalendar';

describe('FormCalendar', () => {
  test('renders date range picker', () => {
    render(<FormCalendar onSubmit={() => {}} />);

    const dateRangePicker = screen.getByRole('textbox', { name: /date range/i });
    expect(dateRangePicker).toBeInTheDocument();
  });

  test('handles date range change', () => {
    const handleSubmit = jest.fn();
    render(<FormCalendar onSubmit={handleSubmit} />);

    const dateRangePicker = screen.getByRole('textbox', { name: /date range/i });
    fireEvent.change(dateRangePicker, { target: { value: '2023-06-01 - 2023-06-07' } });

    expect(dateRangePicker.value).toBe('2023-06-01 - 2023-06-07');
  });

  test('handles form submission with date range', () => {
    const handleSubmit = jest.fn();
    render(<FormCalendar onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole('button', { name: /lanjutkan pembayaran/i });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith([]);
  });

  test('handles form submission without date range', () => {
    const handleSubmit = jest.fn();
    render(<FormCalendar onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole('button', { name: /lanjutkan pembayaran/i });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith([]);
  });
});
