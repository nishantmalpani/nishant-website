import Navbar from "@/components/navbar";
import First from "@/components/first"
import About from "@/components/about"
import Experiences  from "@/components/experiences";
import Contact from "@/components/contact"


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
        <Experiences />
        <hr />
        
        {/* SECTION 4 */}
        <Contact />
        
      </div>
    </>
  );
}
