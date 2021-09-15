import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RouteName from "../config/RouteNames";
import Dashboard from "../pages/dashboard";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ReportsPage from "../pages/dashboard/reports";
import NotFound from "../pages/404/404";
import SettingsPage from "../pages/dashboard/settings";
import StaffsPage from "../pages/dashboard/staffs";
import AppointmentsPage from "../pages/dashboard/appointments";

const Routes = () => {
return (
<Router>
    <Switch>
        <Route exact path={RouteName.login} component={Login}/>
         <Route exact path="/login" component={Login}/>
        <Route exact path={RouteName.dashboard.home} component={Dashboard}/>
          <Route exact path={RouteName.dashboard.reports} component={ReportsPage}/>
            <Route exact path={RouteName.dashboard.settings} component={SettingsPage}/>
              <Route exact path={RouteName.dashboard.staffs} component={StaffsPage}/>
                <Route exact path={RouteName.dashboard.appointments} component={AppointmentsPage}/>
         <Route exact path={RouteName.signup} component={Signup}/>
         <Route  component={NotFound}/>
    </Switch>
</Router>
);
};
export default Routes;