import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { saveCourse } from "./api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  console.log("Props", props);
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  const changeHandler = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Event", course);
    saveCourse(course).then(
      () => {
        toast.success("Course added successfully.");
        props.history.push("/courses");
      },
      (error) => {
        toast.error("Error while saving course!!", error);
      }
    );
  };
  return (
    <>
      <h2>Manage Course Page</h2>
      <CourseForm
        course={course}
        onChange={changeHandler}
        onSubmit={submitHandler}
      />
    </>
  );
};

export default ManageCoursePage;
