import React from "react";
import Input from "./common/textInput";
function CourseForm(props) {
  console.log("props", props);
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        label="Title"
        id="title"
        type="text"
        name="title"
        value={props.course.title || ""}
        onChange={props.onChange}
      />
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>
      <Input
        label="Category"
        id="category"
        type="text"
        name="category"
        value={props.course.category || ""}
        onChange={props.onChange}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
