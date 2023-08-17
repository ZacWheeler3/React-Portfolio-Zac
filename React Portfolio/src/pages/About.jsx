const AboutImage = () => {
  return (
    <div>
      <a href="\public\1689566233235.jpg">
        <img
          src="\public\1689566233235.jpg"
          alt="about"
        />
      </a>
    </div>
  );
};

export default function About() {
  return (
    <section className="about" id="about">
      <div>
        <h2 className="heading">About <span>Me</span></h2>
        <div className="About-image">
          <AboutImage />
        </div>
        <h3>Full Stack Developer</h3>
        <p>
          Experienced account manager with a strong background in client relations and project management, adeptly translating client requirements to effectively collaborate with full-stack web development teams. Proficient in facilitating clear communication channels, managing project timelines, and ensuring seamless delivery of web development solutions that align with client expectations. Skilled in gathering client feedback and leveraging it to drive successful project outcomes.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
}