import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://www.linkedin.com/in/zac-wheeler-76335b180"><i className="bx bxl-linkedin-square"></i></a>
        <a href="https://github.com/ZacWheeler3"><i className="bx bxl-github"></i></a>
        <a href="https://stackoverflow.com/users/21415480/zacwheeler"><i className="bx bxl-stack-overflow"></i></a>
        <a href="https://app.slack.com/client/T04MRDRHB4P/C04N6012QG2/rimeto_profile/U04TK4Z2K2A"><i className="bx bxl-slack"></i></a>
      </div>
      <a href="https://docs.google.com/document/d/12egMnBvj68r8xq-7XcQZbG1ia1SXvxFdq3t0XRfAS3Q/edit?usp=sharing" className="btn">Download Resume</a>
    </footer>
  );
}

export default Footer;
