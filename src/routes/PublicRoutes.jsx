import { Route, Redirect } from "react-router-dom";

import HomeContent from "../pages/home-page/HomeContent";

function PublicRoutes() {
  return (
    <>
      <Route path="/" exact>
        <HomeContent />
      </Route>
      <Redirect to="/" />
    </>
  );
}

export default PublicRoutes;
