import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./Common/Header";
import NodesPage from "./NodesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageNodePage from "./ManageNodePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nodes" component={NodesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/node/:id" component={ManageNodePage} />
        <Route path="/node" component={ManageNodePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
