import React, { Component } from "react";
import { getCourses } from "./api/courseApi";

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  render() {
    console.log("Inside courses render page");
    console.log("this.state.courses", this.state.courses);
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course) => {
              return (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  componentDidMount() {
    console.log("Component Did mount");
    getCourses().then((courses) =>
      this.setState({
        courses: courses,
      })
    );
  }
}

export default CoursesPage;
