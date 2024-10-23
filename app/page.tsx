import Navbar from "@/components/navbar";
import First from "@/components/first"
import About from "@/components/about"
import Contact from "@/components/contact"
import getProjects from "./lib/getProjects"

export default function Home() {
  
  return (
    <>
      <Navbar />

      <div className="body">
        {/* SECTION 1 */}
        <First />
        <hr />

        {/* SECTION 2 */}
        <About />
        <hr />

        {/* SECTION 3 */}
        <div id="projects-wrapper">
          <h1 className="h1">Projects & Experiences!</h1>
          <div className="card-wrapper">
            {getProjects()}
          </div>
        </div>
        <hr />
        
        {/* SECTION 4 */}
        <Contact />
        
      </div>
    </>
  );
}
