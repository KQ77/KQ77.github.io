const { projects } = require('./projectData');
console.log(projects, 'projects');
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Carousel } from 'react-bootstrap';
// import { Router, Link } from 'react-router-dom';
import './css/App.css';

const App = () => {
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
        <hr></hr>
        {Object.keys(projects).map((projectType, index) => (
          <>
            <div key={index}>
              <h2>{projectType}</h2>
              <div id="project-wrapper">
                {projects[projectType].map((project, idx) => (
                  <div id="project-info" key={idx}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                    <div>
                      <a href={project.liveUrl}>
                        {project.images.length > 1 ? (
                          <Carousel variant="dark">
                            {project.images.map((imgSrc) => (
                              <Carousel.Item>
                                <img className="d-block w-100" src={imgSrc} />
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        ) : (
                          <img src={project.images[0]}></img>
                        )}
                      </a>
                    </div>
                    {project.liveUrl ? (
                      <p>
                        <a href={project.liveUrl}>view live site</a>
                      </p>
                    ) : (
                      ''
                    )}
                    {project.githubUrl ? (
                      <p>
                        <a href={project.githubUrl}>
                          view source code on github
                        </a>
                      </p>
                    ) : (
                      ''
                    )}

                    {project.videoUrl ? (
                      <p>
                        <a href={project.videoUrl}>video presentation</a>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                ))}
                <hr></hr>
              </div>
            </div>
            <hr></hr>
          </>
        ))}
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
