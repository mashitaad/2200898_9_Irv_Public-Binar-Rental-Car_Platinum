import { Outlet } from "react-router-dom";
import PageNotFound from "../components/pagenotfound/PageNotFound";
import { TokenValidation } from "./tokenValidation";

const PrivateRoutesCustomer = () => {
  const auth = TokenValidation();
  if (auth.customer && auth.token) {
    return <Outlet />;
  } else {
    return <PageNotFound />;
  }
};

export default PrivateRoutesCustomer;
