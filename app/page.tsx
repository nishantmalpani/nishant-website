import Image from "next/image";
import Navbar from "@/components/navbar";
import face from "./images/cover-pic.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <div>
                <h1 className="h1 coverH1 hi">Hi!</h1>
                <h1 className="h1 coverH1">I'm Nishant.</h1>
                <h2 className="h2" id="eecs">EECS @ UC Berkeley</h2>
              </div>
            </div>
            <div className="col">
              <Image
                src = {face}
                alt="Nishant's profile picture"
                width={600}
                height={600}
                className="cover-pic"
              />
            </div>
          </div>
        </div>  
      </main>
    </>
  );
}
