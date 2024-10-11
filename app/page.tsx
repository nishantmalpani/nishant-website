import Image from "next/image";
import Navbar from "@/components/navbar";
import face from "./images/cover-pic.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Image
          src = {face}
          alt="Nishant's profile picture"
          width={300}
          height={300}
        />
      </main>
    </>
  );
}
