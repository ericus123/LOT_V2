import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RouteName from "../config/RouteNames";
import Home from "../pages/Home";

const Routes = () => {
return (
<Router>
    <Switch>
        <Route exact path={RouteName.home} component={Home}/>
    </Switch>
</Router>
);
};
export default Routes;