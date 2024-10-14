import Image from "next/image";
import seacology from "../app/images/seacology.png"
import ludis from "../app/images/ludisLogo.png"
import simplilearn from "../app/images/simplilearn.jpg"
import rca from "../app/images/rca.jpg"

const Experiences = () => {
    return (
        <section id="section3">
          <h1 className="h1" id="projects">Projects & Experiences!</h1>
          <div className="container text-center">
              <div className="row">
                  <div className="col">
                    <div className="wrapper">
                      <h2 className="h2 desc"><strong>Seacology</strong></h2>
                      <Image
                        src = {seacology}
                        alt="Seacology Logo"
                        width={100}
                        height={100}
                        className="logo"
                      />
                    </div>
                    <h4 className="h4 desc">Full Stack Developer</h4>
                    <h6 className="h6 desc">Sep 2024-</h6>
                    <ul className="list-unstyled">
                      <li className="desc bullet1">-   Developing a full stack application for Seacology (a non-profit organization to protect island ecosystems) partnering field representatives to reference project proposal information.</li>
                      <li className="desc">-   Categorizing proposal information and creating a forum for questions.</li>
                    </ul>

                    <div className="wrapper bottom_proj">
                      <h2 className="h2 desc"><strong>Ludis Coaching</strong></h2>
                      <Image
                        src = {ludis}
                        alt="Ludis Logo"
                        width={100}
                        height={100}
                        className="logo"
                      />
                    </div>
                    <h4 className="h4 desc">Co-Founder and Developer</h4>
                    <h6 className="h6 desc">June 2022-</h6>
                    <ul className="list-unstyled">
                      <li className="desc bullet1">-   Developed a service, Ludis Coaching, that connects high school athletes with parents of elementary & middle
                      schoolers for affordable, private sports coaching.</li>
                      <li className="desc bullet1">-   Built with the goal of reducing the barrier of entry to sports and empowering budding athletes to pursue their
                      passion. </li>
                      <li className="desc">-    Developed the company website, ran Facebook ads, and oversaw the hiring process of coaches.</li>
                    </ul>
                  </div>


                  <div className="col">
                  <div className="wrapper">
                      <h2 className="h2 desc"><strong>Simplilearn</strong></h2>
                      <Image
                        src = {simplilearn}
                        alt="Simplilearn Logo"
                        width={75}
                        height={75}
                        className="logo"
                      />
                    </div>
                    <h4 className="h4 desc">R&D Intern</h4>
                    <h6 className="h6 desc">June - August 2023</h6>
                    <ul className="list-unstyled">
                      <li className="desc bullet1">-   Created unit tests and security tests for new features built by Simplilearn's R&D team.</li>
                      <li className="desc">-   Learned about the thoroughness behind product testing and security
                      .</li>
                    </ul>

                    <div className="wrapper bottom_proj" id="rca-logo">
                      <h2 className="h2 desc" id="rca-logo"><strong>Redmond Code Association</strong></h2>                    <Image
                        src = {rca}
                        alt="RCA Logo"
                        width={80}
                        height={80}
                        className="logo"
                      />
                    </div>
                    <h4 className="h4 desc">Lead Tech Volunteer</h4>
                    <h6 className="h6 desc">June 2022-</h6>
                    <ul className="list-unstyled">
                      <li className="desc bullet1">-   Create lessons on a variety of computer science topics (Java, JavaScript, HTML) and teach them to children through
                      my local community in Redmond.</li>
                      <li className="desc">-   Help coordinate local events such as hackathons, bootcamps, and e-drives.</li>
                    </ul>
                  </div>
                </div>
              </div> 
        </section>
    )
};

export default Experiences;