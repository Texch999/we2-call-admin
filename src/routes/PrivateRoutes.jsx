import { getAllowedRoutes, isLoggedIn } from "../utils/helpers";
import PrivateRoute from "../PrivateRoute";
import { Redirect } from "react-router";

const PrivateRoutes = () => {
  let condition = isLoggedIn();

  let allowedRoutes = [];
  if (condition) {
    allowedRoutes = getAllowedRoutes(localStorage.getItem("account_role"));
  } else {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {allowedRoutes?.map(({ component, path }) => (
        <PrivateRoute key={path} component={component} path={path} exact />
      ))}
    </div>
  );
};

export default PrivateRoutes;
