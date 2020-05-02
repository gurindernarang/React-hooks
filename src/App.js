import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import ManageCoursePage from "./ManageCoursePage";
import PageNotFound from "./PageNotFound";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
