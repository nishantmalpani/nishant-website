import Navbar from '../../components/navbar';
import Image from "next/image";
import soccer from "../images/soccer 1.png"
import graduation from "../images/graduation 1.png"
import skiing from "../images/silly_pic.jpg"
import berkeley from "../images/berkeley.png"
import { sign } from 'crypto';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-3">
              <Image
                src = {soccer}
                alt="Nishant's playing soccer"
                width={400}
                height={200}
                id='soccer-pic'
              />
              <Image
                src = {graduation}
                alt="Nishant's playing soccer"
                width={200}
                height={400} // figure out how to make image taller
                id='soccer-pic'
              />
            </div>
            <div className="col-sm-6">
              <h2 className='h2'>about me!</h2>
              <p className='descriptive-text'>I am an undergraduate student studying EECS at UC Berkeley. My interests lie 
                in the fields of machine learning and virtual reality, specificially using these technologies
                to improve sports accessibility. I have experience in competitive programming and math and love
                solving complex problems. In my free time, I enjoy playing soccer and ping pong, skiing, and reading!
              </p>
            </div>
            <div className='col-sm-3'>
              <Image
                  src = {skiing}
                  alt="Nishant after skiing"
                  width={200}
                  height={200}
                  id='soccer-pic'
                />
                <Image
                  src = {berkeley}
                  alt="UC Berkeley"
                  width={300}
                  height={300} // figure out how to make image taller
                  id='soccer-pic'
                />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}