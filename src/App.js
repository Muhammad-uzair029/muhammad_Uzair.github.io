import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  mainBody,
  about,
  skills,
  getInTouch,
  projects,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
// import Leadership from "./components/home/Leadership.jsx";
// import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  console.log('Home component rendered');
  console.log('Home component props:', props);
  console.log('Home component ref:', ref);
  
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {/* {experiences.show && <Experience experiences={experiences} />} */}
      {projects.show && <Project projects={projects} />}
      {/* {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )} */}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();
  
  console.log('App component rendered');
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
  console.log('Current window location:', window.location.href);
  console.log('Current pathname:', window.location.pathname);

  const basename = process.env.PUBLIC_URL;
  console.log('BrowserRouter basename:', basename);
  
  return (
    <BrowserRouter basename={basename}>
      {/* {navBar.show && <Navbar ref={titleRef} />} */}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
