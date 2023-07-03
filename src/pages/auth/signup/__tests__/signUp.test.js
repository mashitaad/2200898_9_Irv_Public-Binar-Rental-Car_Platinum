import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import SignUp from '../components/SignUp';
import { MemoryRouter } from 'react-router-dom';
import { register } from '../../../../features/registerSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

jest.mock('../../../../features/registerSlice', () => ({
  register: jest.fn()
}));

describe('SignUp component', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render SignUp component', () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    expect(getByLabelText('Email*')).toBeInTheDocument();
    expect(getByLabelText('Create Password*')).toBeInTheDocument();
    expect(getByText('SignUp')).toBeInTheDocument();
  });

  it('should show error message when password is less than 6 characters', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    const emailInput = getByLabelText('Email*');
    const passwordInput = getByLabelText('Create Password*');
    const signUpButton = getByText('SignUp');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });

    fireEvent.click(signUpButton);

    await waitFor(() =>
      expect(getByText('Password must be at least 6 characters long')).toBeInTheDocument()
    );

    expect(dispatchMock).not.toBeCalled();
  });

  it('should dispatch register action when valid form is submitted', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    const emailInput = getByLabelText('Email*');
    const passwordInput = screen.getByLabelText('Password');
    const signUpButton = getByText('SignUp');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    const registerResponse = { error: false, payload: { message: 'Registration successful' } };
    register.mockResolvedValue(registerResponse);
    fireEvent.click(signUpButton);
    expect(register).toBeCalledWith({
      email: 'test@example.com',
      password: 'password123',
      role: 'customer'
    });
  });

  it('should show error toast when registration fails', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
    const emailInput = getByLabelText('Email*');
    const passwordInput = getByLabelText('Create Password*');
    const signUpButton = getByText('SignUp');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const registerResponse = { error: true, payload: { message: 'Registration failed' } };
    register.mockResolvedValue(registerResponse);
    fireEvent.click(signUpButton);

    expect(register).toBeCalledWith({
      email: 'test@example.com',
      password: 'password123',
      role: 'customer'
    });
  });
});
