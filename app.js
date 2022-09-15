const { projects } = require('./projectData');
console.log(projects, 'projects');
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Carousel } from 'react-bootstrap';
// import { Router, Link } from 'react-router-dom';
import './css/App.css';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index, length) => {
    if (index === length - 1) setSelectedIndex(0);
    else setSelectedIndex(index);
  };
  return (
    <div id="main">
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand>
          <img
            style={{ margin: 'auto 1.5rem' }}
            height="50px"
            width="auto"
            src="/images/kqicon.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{ color: 'white' }}>
          <Container>
            <Nav className="justify-content-end">
              <Nav.Link
                className="text-light"
                style={{
                  background: '#00000026',
                  margin: 'auto .5rem',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
                href="#about"
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                style={{
                  background: '#00000026',
                  margin: 'auto .5rem',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
                href="#projects"
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link
                style={{
                  background: '#00000026',
                  margin: 'auto .5rem',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
                href="mailto: katequinn7@gmail.com"
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
      <section id="hero">
        <div>
          <p>Kate Quinn</p>
          <p>Software developer</p>
        </div>
      </section>
      <section id="about" style={{ maxHeight: '30rem' }}>
        <div>
          <img src="/images/kateBW.jpg"></img>
        </div>
        <div>
          <h2>About Me</h2>
          <p>
            As a pysical therapist turned software engineer, I've taken a love
            of problem-solving from humans to code.
          </p>
          <p>
            I'm commited to lifelong learning, and I look forward to my next
            project pushing that even futher.
          </p>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        {Object.keys(projects).map((projectType, index) => (
          <div key={index}>
            <h2>{projectType}</h2>
            <div
              id="project-wrapper"
              style={{ background: index % 2 === 0 ? 'white' : 'lightgrey' }}
            >
              {projects[projectType].map((project, idx) => (
                <div id="project-info" key={idx}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <p>{project.technologies}</p>

                  {/* <a href={project.images[0]}> */}
                  {project.images.length > 1 ? (
                    <Carousel
                      fade
                      // activeIndex={selectedIndex}
                      // onSelect={() => {
                      //   () => handleSelect(idx, project.images.length);
                      // }}
                      variant="dark"
                    >
                      {project.images.map((imgSrc) => (
                        <Carousel.Item>
                          <a href={imgSrc}>
                            <img
                              // onClick={() => {
                              //   console.log('image clicked');
                              //   window.location.href = { imgSrc };
                              // }}
                              className="d-block w-100"
                              src={imgSrc}
                            />
                          </a>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  ) : (
                    <img src={project.images[0]}></img>
                  )}
                  {/* </a> */}

                  <div id="links">
                    {project.liveUrl ? (
                      <p>
                        <a href={project.liveUrl}>live</a>
                      </p>
                    ) : (
                      ''
                    )}
                    {project.githubUrl ? (
                      <p>
                        <a href={project.githubUrl}>code</a>
                      </p>
                    ) : (
                      ''
                    )}

                    {project.videoUrl ? (
                      <p>
                        <a href={project.videoUrl}>video</a>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ))}
              <hr></hr>
            </div>
          </div>
        ))}
      </section>
      <section id="contact">
        <div>
          <a href="http://www.linkedin.com/in/kate-q-5b425034/">
            <img src="/images/linkedin.png"></img>
          </a>
        </div>
        <div>
          <a href="https://github.com/KQ77">
            <img src="/images/GitHub-logo.png"></img>
          </a>
        </div>
        <div>
          <a href="mailto:katequinn7@gmail.com">
            <img src="/images/email-icon.png"></img>
          </a>
        </div>
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
