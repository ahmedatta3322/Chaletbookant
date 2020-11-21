import React from "react";
import Home from "./pages/homePage/home";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Profile from "./pages/profilePage/profile";
import ChaletsPage from "./pages/chaletsPage/chaletsPage";
import ViewChalet from "./pages/detailsChalet/viewChalet";
import Login from "./pages/login";
import SignUp from "./pages/signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/1" component={Profile} />
          <Route exact path="/chalets" component={ChaletsPage} />
          <Route exact path="/viewchalet/:id" component={ViewChalet} />
          <Route exact path="/login" render={(props) => <Login {...props}></Login>} />
         
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
      {/* <Home />  */}
      {/* <Profile /> */}
      {/* <ChaletsPage /> */}
    </>
  );
}

export default App;
