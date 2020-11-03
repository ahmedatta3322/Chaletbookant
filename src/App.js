import React from "react";
import Home from "./pages/homePage/home";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Profile from "./pages/profilePage/profile";
import ChaletsPage from "./pages/chaletsPage/chaletsPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/1" component={Profile} />
          <Route exact path="/chalets" component={ChaletsPage} />
        </Switch>
      </BrowserRouter>
      {/* <Home />  */}
      {/* <Profile /> */}
      {/* <ChaletsPage /> */}
    </>
  );
}

export default App;
