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
import JobApplicationForm from "./pages/JobApplicationForm";
import CompanyDetails from "./components/CompanyDetails";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";




function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/jobdetails/:id" element={<JobDetails />} />
          <Route path="/newjoblisting" element={<NewJobListing />} />
          <Route path="/jobcard" element={<JobCard />} />
          <Route path="/workplaces" element={<Workplaces />} />
          <Route path="/jobapplication" element={<JobApplicationForm />} />
          <Route path="/companydetails/:id" element={<CompanyDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
