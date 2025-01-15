import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhatYoullLearn from './components/WhatYoullLearn';
import Instructors from './components/Instructors';
import WhyUs from './components/WhyUs';
import CourseInfo from './components/CourseInfo';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Hero />
      <About />
      <WhatYoullLearn />
      <Instructors />
      <WhyUs />
      <CourseInfo />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;