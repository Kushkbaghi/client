import {
  Header,
  Banner,
  Main,
  Projects,
  Jobs,
  Courses,
  Contact,
  Footer,
} from "./container";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import "./App.scss";
import { motion } from "framer-motion";
export default function App() {
  const [projects, setProject] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [courses, setCourses] = useState([]);

  // read Projectsdata and update it by React Hook(userState)
  useEffect(() => {
    const fetchDataProj = async () => {
      const res = await axios.get("https://localhost:7249/api/projects");
      setProject(res.data);
    };
    fetchDataProj();
  }, []); // Fetch just once

  // read Jobs data and update it by React Hook(userState)
  useEffect(() => {
    const fetchDataJob = async () => {
      const res = await axios.get("https://localhost:7249/api/jobs");
      setJobs(res.data);
    };
    fetchDataJob();
  }, []); // Fetch just once

  // read Course data and update it by React Hook(userState)
  useEffect(() => {
    const fetchDataCourse = async () => {
      const res = await axios.get("https://localhost:7249/api/courses");
      setCourses(res.data);
    };
    fetchDataCourse();
  }, []); // Fetch just once
  return (
    <div className="App">
     
      <Header />
      <a href="#start" className="to-home">
        <AiFillHome />{" "}
      </a>
      <Banner />
      <Main />
      <Projects projects={projects} />
      <Jobs jobs={jobs} />
      <Courses courses={courses} />
      <Contact />
      <Footer />
     
    </div>
  );
}
