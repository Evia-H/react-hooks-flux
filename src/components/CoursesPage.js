import React, { useState, useEffect } from "react";
import courseStore from "../store/courseStore";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function Courses() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="course">
        Add Course
      </Link>
      <CoursesList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default Courses;
