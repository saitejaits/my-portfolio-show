// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "./react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Skills from "./Components/Skills/Skills";

const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projectsLink" component={Projects}/>
          <Route path="/Skills" component={Skills} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
