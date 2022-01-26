import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import GithubSearch from 'pages/GithubSearch';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/githubSearch">
                <GithubSearch />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;