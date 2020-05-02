import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { saveCourse, getCourseBySlug } from "./api/courseApi";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  const [errors, setErrors] = useState({});
  const changeHandler = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };
  useEffect(() => {
    console.log("props", props);
    if (props.match.params.slug) {
      getCourseBySlug(props.match.params.slug).then(
        (response) => {
          console.log("Response", response);
          setCourse(response);
        },
        () => {
          console.log("No data foud");
        }
      );
    }
  }, [props]);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("!formIsValid()", !formIsValid());
    if (!formIsValid()) return;
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
  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Course title is required.";
    if (!course.authorId) _errors.authorId = "Author is required.";
    if (!course.category) _errors.category = "Category is required.";
    setErrors(_errors);
    console.log("_errors", _errors);
    console.log("_errors", Object.keys(_errors));
    return Object.keys(_errors).length === 0;
  };
  return (
    <>
      <h2>Manage Course Page</h2>
      <CourseForm
        course={course}
        onChange={changeHandler}
        onSubmit={submitHandler}
        errors={errors}
      />
    </>
  );
};
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default ManageCoursePage;
