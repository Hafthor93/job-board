import React from "react";
import {  BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import JobDetails from "./pages/JobDetails";
import jobs from "./mockData/jobListings";
import Navbar from "./components/Navbar";
import NewJobListing from "./pages/NewJobListing"
import JobCard from "./components/JobCard";
import Workplaces from "./components/Workplaces";




function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/jobdetails/:id" element={<JobDetails job={jobs} />} />
          <Route path="/newjoblisting" element={<NewJobListing />} />
          <Route path="/jobcard" element={<JobCard />} />
          <Route path="/workplaces" element={<Workplaces />} />
        </Routes>
        
      </div>
    
  );
}

export default App;
