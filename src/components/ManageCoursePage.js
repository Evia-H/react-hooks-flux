import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../store/courseStore";
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug]);
  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }
  function formIsValid() {
    let _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
      />
    </>
  );
};

export default ManageCoursePage;
