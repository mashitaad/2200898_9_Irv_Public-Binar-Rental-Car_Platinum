import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { login, register } from '../../../features/authSlice';
import SignUpPage from '../SignUpPage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

jest.mock('react-cookie', () => ({
  useCookies: jest.fn()
}));

jest.mock(login, register, () => ({
  login: jest.fn(),
  register: jest.fn()
}));

describe('SignUpPage', () => {
  let setCookieMock;
  let dispatchMock;

  beforeEach(() => {
    setCookieMock = jest.fn();
    useDispatch.mockReturnValue(jest.fn());
    useCookies.mockReturnValue([{ token: 'mockToken' }, setCookieMock]);
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the SignUpPage component', () => {
    render(<SignUpPage />);
    expect(screen.getByTestId('signup-heading')).toBeInTheDocument();
  });

  test('handles sign up with valid credentials', async () => {
    const payload = {
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123'
    };
    register.mockResolvedValue({});
    login.mockResolvedValue({ access_token: 'mockToken' });

    render(<SignUpPage />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: payload.email }
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: payload.password }
    });
    fireEvent.change(screen.getByLabelText('Confirm Password'), {
      target: { value: payload.confirmPassword }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));

    await waitFor(() => {
      expect(register).toHaveBeenCalledWith(payload);
      expect(login).toHaveBeenCalledWith({
        email: payload.email,
        password: payload.password
      });
      expect(setCookieMock).toHaveBeenCalledWith('token', 'mockToken', {
        path: '/'
      });
      expect(dispatchMock).toHaveBeenCalled();
    });
  });

  test('displays error message for password length less than 6', async () => {
    const payload = {
      email: 'test@example.com',
      password: 'pass',
      confirmPassword: 'pass'
    };

    render(<SignUpPage />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: payload.email }
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: payload.password }
    });
    fireEvent.change(screen.getByLabelText('Confirm Password'), {
      target: { value: payload.confirmPassword }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));

    await waitFor(() => {
      expect(screen.getByText('password harus lebih dari 6 karakter')).toBeInTheDocument();
      expect(register).not.toHaveBeenCalled();
      expect(login).not.toHaveBeenCalled();
      expect(setCookieMock).not.toHaveBeenCalled();
      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });

  test('displays error message for mismatched passwords', async () => {
    const payload = {
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password456'
    };

    render(<SignUpPage />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: payload.email }
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: payload.password }
    });
    fireEvent.change(screen.getByLabelText('Confirm Password'), {
      target: { value: payload.confirmPassword }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));

    await waitFor(() => {
      expect(screen.getByText('password dan confirm password tidak sama')).toBeInTheDocument();
      expect(register).not.toHaveBeenCalled();
      expect(login).not.toHaveBeenCalled();
      expect(setCookieMock).not.toHaveBeenCalled();
      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });
});
