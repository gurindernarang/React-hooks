import React from "react";
import Input from "./common/textInput";
function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        label="Title"
        id="title"
        type="text"
        name="title"
        value={props.course.title || ""}
        onChange={props.onChange}
        error={props.errors.title}
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
            error={props.errors.authorId}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>
      <Input
        label="Category"
        id="category"
        type="text"
        name="category"
        value={props.course.category || ""}
        onChange={props.onChange}
        error={props.errors.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
