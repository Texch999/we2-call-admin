import { Redirect, Route } from "react-router";

const PrivateRoute = (props) => {
  function performValidation() {
    return localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== undefined
      ? true
      : false;
  }

  const isAuthorized = performValidation();

  return isAuthorized ? (
    <Route exact path={props.path} component={props.component}></Route>
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
