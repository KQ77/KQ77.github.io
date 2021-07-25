const { projects } = require('./projectData');
console.log(projects, 'projects');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from 'react-router-dom';
import './css/App.css';

const App = (props) => {
  return (
    <div id="main">
      <section id="hero">
        <div>
          <p>Kate Quinn</p>
          <p>Software developer</p>
        </div>
      </section>
      <section id="about">
        <div>
          <img src="/images/kate3.png"></img>
        </div>
        <div>
          <h2>About Me</h2>
          <p>
            Physical therapist turned software engineer. I've taken my love of
            problem-solving from humans to code. I truly love the idea of
            lifelong learning, and I'm looking forward to my next project
            pushing that even futher.
          </p>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div id="project-wrapper">
          {projects.map((project) => (
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                <a href={project.liveUrl}>
                  <img src={project.imageUrl}></img>
                </a>
              </div>
              {project.liveUrl ? (
                <>
                  <p>
                    <a href={project.liveUrl}>view live site</a>
                  </p>
                </>
              ) : (
                ''
              )}

              <p>
                <a href={project.githubUrl}>view source code on github</a>
              </p>

              {project.videoUrl ? (
                <p>
                  <a href={project.videoUrl}>video presentation</a>
                </p>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
