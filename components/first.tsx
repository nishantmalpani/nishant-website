
import Image from "next/image";
import face from "../app/images/cover-pic.svg"

const First = () => {
    return (
        <section id="section1">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col">
                <div id="home-div">
                  <h1 className="h1 coverH1 hi">Hi!</h1>
                  <h1 className="h1 coverH1">I'm Nishant.</h1>
                  <h2 className="h2" id="eecs">EECS @ UC Berkeley</h2>
                </div>
              </div>
              <div className="col" id="home-pic">
                <Image
                  src = {face}
                  alt="Nishant's profile picture"
                  width={500}
                  height={500}
                  className="cover-pic"
                />
              </div>
            </div>
          </div>  
        </section>
    )
};

export default First;