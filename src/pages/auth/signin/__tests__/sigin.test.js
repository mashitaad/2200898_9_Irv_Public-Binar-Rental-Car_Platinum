import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignIn from "../components/SignIn";

describe("SignIn component", () => {
  test("renders SignIn component", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    const signInElement = screen.getByLabelText("Email");
    expect(signInElement).toBeInTheDocument();
  });

  test("calls onSubmit prop when form is submitted", () => {
    const onSubmitMock = jest.fn();
    render(
      <MemoryRouter>
        <SignIn onSubmit={onSubmitMock} />
      </MemoryRouter>
    );
    const signInElement = screen.getByLabelText("Email");
    fireEvent.change(signInElement, { target: { value: "test@example.com" } });

    const passwordElement = screen.getByLabelText("Create Password");
    fireEvent.change(passwordElement, { target: { value: "password123" } });

    const submitButton = screen.getByText("Sign In");
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });

  test('renders "Sign Up for free" link', () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    const signUpLink = screen.getByText("Sign Up for free");
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink.getAttribute("href")).toBe("/signup");
  });
});
