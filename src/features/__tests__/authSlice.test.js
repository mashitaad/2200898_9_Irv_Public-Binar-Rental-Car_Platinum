import axios from "axios";
import { login, authSelector } from "../authSlice";

jest.mock("axios");

describe("authSlice", () => {
  describe("login", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should handle successful login", async () => {
      const fakeResponse = { token: "fake-token" };
      axios.post.mockResolvedValue({ data: fakeResponse });

      const dispatch = jest.fn();
      const getState = jest.fn();

      await login()(dispatch, getState, null);

      expect(axios.post).toHaveBeenCalledWith("/customer/auth/login", {});
      expect(dispatch).toHaveBeenCalledWith(login.pending());
      expect(dispatch).toHaveBeenCalledWith(login.fulfilled(fakeResponse));
    });

    it("should handle login failure", async () => {
      const fakeError = { response: { data: "fake-error-message" } };
      axios.post.mockRejectedValue(fakeError);

      const dispatch = jest.fn();
      const getState = jest.fn();

      await login()(dispatch, getState, null);

      expect(axios.post).toHaveBeenCalledWith("/customer/auth/login", {});
      expect(dispatch).toHaveBeenCalledWith(login.pending());
      expect(dispatch).toHaveBeenCalledWith(
        login.rejected(fakeError.response.data)
      );
    });
  });

  describe("authSelector", () => {
    it("should select the token from the state", () => {
      const state = { auth: { data: { token: "fake-token" } } };
      const selectedToken = authSelector.selectToken(state);

      expect(selectedToken).toEqual("fake-token");
    });

    it("should select the loading state from the state", () => {
      const state = { auth: { loading: "pending" } };
      const loading = authSelector.loading(state);

      expect(loading).toEqual("pending");
    });

    it("should select the error message from the state", () => {
      const state = { auth: { errorMessage: "fake-error-message" } };
      const errorMessage = authSelector.errorMessage(state);

      expect(errorMessage).toEqual("fake-error-message");
    });
  });
});
