import React, { useState, useEffect } from "react";
import { getCourses } from "./api/courseApi";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";
function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);
  return (
    <>
      <Link to="/course/">
        <button className="btn btn-primary">Add Course</button>
      </Link>
      <CoursesList courses={courses}></CoursesList>
    </>
  );
}

export default CoursesPage;
