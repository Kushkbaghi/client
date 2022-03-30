import React from "react";
import "./Courses.scss";
import { Course } from "../../component";
import {study} from '../../images';

export default function Courses({ courses }) {
  return (
    <section className="courses">
      <img className="sec-img" src={study} alt="en man sitter på en boll och läser en  bok" />
      <h2>Mina studier</h2>

      <div className="course__course">
        <table>
          <tr className="course__table">
            <th>Kursnamn</th>
            <th>Progression</th>
            <th>Start datum</th>
            <th>Slut datum</th>
          </tr>
          {courses.map((course) => (
            <Course course={course} />
          ))}
        </table>
      </div>
    </section>
  );
}
