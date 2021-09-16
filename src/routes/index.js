import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RouteName from "../config/RouteNames";
import Dashboard from "../pages/dashboard";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import NotFound from "../pages/404/404";

const Routes = () => {
return (
<Router>
    <Switch>
        <Route exact path={RouteName.login} component={Login}/>
         <Route exact path="/login" component={Login}/>
        <Route exact path={RouteName.dashboard} component={Dashboard}/>
         <Route exact path={RouteName.signup} component={Signup}/>
         <Route  component={NotFound}/>
    </Switch>
</Router>
);
};
export default Routes;