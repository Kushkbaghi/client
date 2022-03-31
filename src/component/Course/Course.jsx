import React from "react";

import "./Course.scss";

export default function Course({ course }) {
  return (
    <tr >
      <td>{course.name}</td>
      <td>{course.place}</td>
      <td>{course.prograssion}</td>
      <td>{course.start.split('T')[0]}</td>
      <td>{course.end.split('T')[0]}</td>
    </tr>
  );
}
