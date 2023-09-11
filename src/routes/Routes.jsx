import { isLoggedIn } from "../utils/helpers";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
const Routes = () => {

  return <div>
    {isLoggedIn() ? <PrivateRoutes /> : <PublicRoutes />}
    </div>;
};

export default Routes;
