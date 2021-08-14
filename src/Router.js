import { Switch, Route } from "react-router-dom";
import CoinPage from "./components/CoinPage";
import HomePage from "./components/HomePage";

const Router = () => (
  <Switch>
    <Route path="/:id" component={CoinPage} />
    <Route path="/" component={HomePage} />
  </Switch>
);

export default Router;
