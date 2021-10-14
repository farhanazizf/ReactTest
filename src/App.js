// import logo from "./logo.svg";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailsPage from "./pages/DetailPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MainPage} path="/" exact />
        <Route component={MainPage} path="/main" exact />
        <Route component={DetailsPage} path="/detail" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
