import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";

export const TokenValidation = () => {
  const [cookies] = useCookies(["token"]);
  let auth = {
    token: false,
    customer: false,
  };

  const token = cookies.token;

  if (token) {
    try {
      const decoded = jwtDecode(token);

      if (decoded.role === "Customer") {
        auth.token = true;
        auth.customer = true;
      } else {
        auth.token = false;
      }
    } catch (error) {
      console.error(error);
      auth.token = false;
    }
  } else {
    auth.token = false;
  }

  return auth;
};
