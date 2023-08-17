import React from "react";
import "boxicons/css/boxicons.min.css";

const MyComponent = () => {
  return (
    <div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/zac-wheeler-76335b180">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://github.com/ZacWheeler3">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://stackoverflow.com/users/21415480/zacwheeler">
          <i className="bx bxl-stack-overflow"></i>
        </a>
        <a href="https://app.slack.com/client/T04MRDRHB4P/C04N6012QG2/rimeto_profile/U04TK4Z2K2A">
          <i className="bx bxl-slack"></i>
        </a>
      </div>
      <a href="https://docs.google.com/document/d/12egMnBvj68r8xq-7XcQZbG1ia1SXvxFdq3t0XRfAS3Q/edit?usp=sharing" className="btn">Download Resume</a>
    </div>
  );
  
};

const HomeImage = () => {
  return (
    <div>
      <a href="https://media.discordapp.net/attachments/1085659301005250651/1100271939278348368/229989078_10226068587569584_6338105671074640003_n.png?width=575&height=671">
        <img
          src="https://media.discordapp.net/attachments/1085659301005250651/1100271939278348368/229989078_10226068587569584_6338105671074640003_n.png?width=575&height=671"
          alt="Home"
        />
      </a>
    </div>
  );
};


export default function Home() {
  return (
    <div>
      <h3>Hi there, I'm</h3>
      <h1>Zac Wheeler</h1>
      <h3>
        <div className="Home-image"><HomeImage />
</div>
        and I'm a <span>Full Stack Engineer</span>{" "}
      </h3>
      <p>Problem solving is my passion!</p>
      <MyComponent /> {}
    </div>
  );
}
