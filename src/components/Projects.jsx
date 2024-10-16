const Projects = () => {
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      <div className="card" style={{ backgroundImage: "url(/project1.jpg)" }}>
        <h3>Professional README Generator</h3>
        <p>
          This project is one of my earlier works. It allows for an easy
          creation of a README.md file to generate based off the included
          template and user input.
        </p>
        <a href="https://github.com/Pravus696/prof-readme-gen">View Project</a>
      </div>
      <div className="card" style={{ backgroundImage: "url(/project2.jpg)" }}>
        <h3>Build Your Own Vehicle</h3>
        <p>
          This project allows a user to create and operate a vehicle within the
          terminal. It's a small fun little terminal game that allowed me to
          explore various ways to use inquirer in code to create different
          outcomes.
        </p>
        <a href="https://github.com/Pravus696/buildyourownvehicle">
          View Project
        </a>
      </div>
      <div className="card" style={{ backgroundImage: "url(/project3.jpg)" }}>
        <h3>Ultimate Video Game Suggestions</h3>
        <p>
          This was the first group project that I had worked on in our coding
          bootcamp. Due to struggles with some group members, only two of us had
          worked on the entire project. It made it difficult for us to truly
          polish the project, but we still managed to create a functioning
          webpage.
        </p>
        <a href="https://github.com/Pravus696/uvgs">View Project</a>
      </div>
    </div>
  </section>;
};

export default Projects;
