import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';
import SiginInPage from '../SiginInPage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-cookie', () => ({
  useCookies: jest.fn(),
}));

jest.mock('jwt-decode', () => jest.fn());

describe('SignInPage component', () => {
  test('calls onSubmit prop with correct payload when form is submitted', () => {
    const mockDispatch = jest.fn();
    const mockNavigate = jest.fn();
    const mockSetCookie = jest.fn();
    const mockJwtDecode = jest.fn(() => ({ id: 123 }));

    useDispatch.mockReturnValue(mockDispatch);
    useNavigate.mockReturnValue(mockNavigate);
    useCookies.mockReturnValue([{}, mockSetCookie]);
    jwtDecode.mockImplementation(mockJwtDecode);

    render(<SiginInPage />);

    const emailElement = screen.getByLabelText('Email');
    fireEvent.change(emailElement, { target: { value: 'test@example.com' } });

    const passwordElement = screen.getByLabelText('Create Password');
    fireEvent.change(passwordElement, { target: { value: 'password123' } });

    const submitButton = screen.getByText('Sign In');
    fireEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: {
          email: 'test@example.com',
          password: 'password123',
        },
      })
    );

    expect(mockSetCookie).toHaveBeenCalledTimes(1);
    expect(mockSetCookie).toHaveBeenCalledWith('token', expect.any(String), { path: '/' });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');

    expect(mockJwtDecode).toHaveBeenCalledTimes(1);
    expect(mockJwtDecode).toHaveBeenCalledWith(expect.any(String));
  });
});
