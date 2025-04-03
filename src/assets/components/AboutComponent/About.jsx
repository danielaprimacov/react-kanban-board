import classes from "./About.module.css";

function About() {
  return (
    <div className={classes["about-content"]}>
      <div className={classes.story}>
        <h1 className={classes["highlight-text"]}>Our Story</h1>
        <div className={classes["about-story"]}>
          <p>
            NextGen Productivity was born from a passion to redefine workflow
            management. Founded by industry innovators, our journey began with a
            simple idea: to transform chaotic work processes into streamlined,
            creative experiences. Today, we continue to evolve, driven by our
            commitment to help teams work smarter and collaborate more
            effectively.
          </p>
        </div>
      </div>
      <div className={classes.mission}>
        <h1 className={classes["highlight-text"]}>Our Mission & Vision</h1>
        <div className={classes["about-mission"]}>
          <p>
            Our Mission: To empower modern professionals with intuitive,
            cutting-edge tools that boost productivity and inspire innovation.
            Our Vision: To become the leading platform that transforms the way
            teams collaborate, turning everyday challenges into opportunities
            for creative growth.
          </p>
        </div>
      </div>
      <div className={classes.offer}>
        <h1 className={classes["highlight-text"]}>What We Offer</h1>
        <div className={classes["about-offer"]}>
          <ul>
            <li>
              Smooth Drag-and-Drop Task Management: Simplify your workload with
              an interface designed for efficiency.
            </li>
            <li>
              Real-Time Collaboration: Keep your team in sync, no matter where
              they are.
            </li>
            <li>
              Customizable Workflows: Tailor your experience to match your
              unique style.
            </li>
            <li>
              Instant Analytics: Gain actionable insights at a glance to drive
              strategic decisions.
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.team}>
        <h1 className={classes["highlight-text"]}>Meet the Team</h1>
        <div className={classes["about-team"]}>
          <p>
            Our dedicated team is composed of creative designers, experienced
            developers, and forward-thinking strategists—all working together to
            build the future of productivity. We believe that great ideas come
            from collaboration, and we’re proud to be a community of innovators.
          </p>
        </div>
      </div>
      <div className={classes.core}>
        <h1 className={classes["highlight-text"]}>Our Core Values</h1>
        <div className={classes["about-core"]}>
          <p>
            Innovation, Simplicity, Collaboration, and Empowerment form the
            foundation of our work. We strive to create a platform where every
            user feels supported and inspired to reach their full potential.
          </p>
        </div>
      </div>
      <div className={classes.journey}>
        <h1 className={classes["highlight-text"]}>Join Our Journey</h1>
        <div className={classes["about-journey"]}>
          <p>
            We’re excited to continue this journey and would love for you to
            join us. Whether you're a startup, an established business, or an
            individual looking to boost productivity, NextGen Productivity is
            here to support you every step of the way. Get in touch or sign up
            to see how we can help elevate your workflow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
