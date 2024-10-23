import Image from "next/image";
import Navbar from "@/components/navbar";
import face from "./images/cover-pic.svg";
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import mail from "../images/mail.png"
import Link from 'next/link';
import prof from "../images/prof_pic.jpg"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="h1 final">I am always looking for opportunities to learn and grow as an individual.
            I love meeting new people!</h1>
        <Image
          src = {prof}
          alt="Github logo"
          width={400}
          height={400}
          id="prof-pic"
        />
        <h1 className="h1 final">Please feel free to connect.</h1>

        <div className="logos">
          <Link href="https://github.com/nishantmalpani">
            <Image
              src = {github}
              alt="Github logo"
              width={80}
              height={80}
              className="cover-pic"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/nishant-malpani-b12843241/">
            <Image
              src = {linkedin}
              alt="Linkedin logo"
              width={80}
              height={80}
              className="cover-pic"
            />
          </Link>

          <Link href="mailto:nishant.malpani@berkeley.edu">
            <Image
              src = {mail}
              alt="Gmail logo"
              width={80}
              height={80}
              className="cover-pic"
            />
          </Link>
        </div>
      </main>
    </>
  );
}
