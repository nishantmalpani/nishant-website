import Image from "next/image";
import Navbar from "@/components/navbar";
import face from "./images/cover-pic.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="h1 final">I am always looking for opportunities to learn and grow as an individual.
            I love meeting new people!</h1>
        <h1 className="h1 final">Please feel free to connect.</h1>

        
      </main>
    </>
  );
}
