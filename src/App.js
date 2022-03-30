import { Header, Banner, Main, Projects} from "./container";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.scss";
export default function App (){
  
  const [projects, setProject] = useState([]);

  // read data and update it by React Hook(userState)
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://localhost:7249/api/projects");
      setProject(res.data);
    };
    fetchData();
  }, []); // Fetch just once  
  
  
return(
  <div className="App">
    <Header />
    <Banner/>
    <Main/>
    <Projects projects={projects}/>
  </div>
);
} 

