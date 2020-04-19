import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPages from "./CoursesPage";
import Header from "./common/Header";

function App() {
  const getPage = () => {
    const route = window.location.pathname;
    if (route === "/about") {
      return <AboutPage />;
    } else if (route === "/courses") {
      return <CoursesPages />;
    } else {
      return <HomePage />;
    }
  };
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
