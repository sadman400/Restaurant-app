import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            voluptas atque. Consectetur omnis saepe voluptas dicta, doloribus
            eaque. A sunt asperiores sint sapiente vitae adipisci totam, tempora
            aut porro natus minus saepe quasi et libero commodi ipsa obcaecati,
            soluta repellendus, alias recusandae culpa quidem laboriosam
            praesentium? Distinctio impedit libero tenetur!
          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;