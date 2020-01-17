import React from "react";
import { getCourses } from "../api/courseApi";

class Courses extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(courses => this.setState({ courses }));
  }

  renderRow(course) {
    console.log(course);
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  render() {
    return (
      <>
        {" "}
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author Id</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{this.state.courses.map(this.renderRow)}</tbody>
        </table>
      </>
    );
  }
}

export default Courses;
