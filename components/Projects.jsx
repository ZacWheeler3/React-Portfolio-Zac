import React from "react";
import exerciseIndexImage from "../public/exerciseIndexImage.png";
import workdaySchedulerImage from "../public/workdayscheduler.png"; // Corrected import name
import weatherImage from "../public/weather.png"; // Corrected import name

function Projects() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>

      <div className="portfolio-container">
        <div className="project-box">
          <div className="portfolio-layer">
            <h4>BEZY Fitness</h4>
            <p>
              A fitness exercise index webpage allowing the user to select a
              muscle group and pull up a list of exercises that are correlated
              with the muscle group.
            </p>
          </div>
          <img src={exerciseIndexImage} alt="" />
          <a href="https://shielded-taiga-22916-cdba61958fb0.herokuapp.com"><i class='bx bx-link-external'></i></a>
        </div>

        <div className="project-box">
          <div className="portfolio-layer">
            <h4>Work Day Scheduler</h4>
            <p>
              Create a working calender/daily task tracker with save events for
              every single hour and allow the user to submit tasks for each hour
              of the day.
            </p>
          </div>
          <img src={workdaySchedulerImage} alt="" />
          <a href="https://github.com/ZacWheeler3/Work-Day-Scheduler"><i class='bx bx-link-external'></i></a>
        </div>

        <div className="project-box">
        <div className="portfolio-layer">
            <h4>Weather App</h4>
            <p>
              Create a working 5 day weather app that allows the user to input
              any city and get a live weather update.
            </p>
          </div>
          <img src={weatherImage} alt="" />
          <a href="https://github.com/ZacWheeler3/Work-Day-Scheduler"><i class='bx bx-link-external'></i></a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
