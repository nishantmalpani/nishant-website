import Image from "next/image";


export default function Card({
    name,
    role,
    date,
    description,
    image,
  }: {
    name: string;
    role: string;
    date: string;
    description: string;
    image: string;
  }) {
    return (
        <div className="card" id="section3">
            <div className="experience">
                <div className="wrapper">
                <h2 className="h2 desc"><strong>{name}</strong></h2>
                <Image
                    src = {image}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="logo"
                />
                </div>
                <h4 className="h4 desc">{role}</h4>
                <h6 className="h6 desc">{date}</h6>
                <ul className="list-unstyled">
                <li className="desc bullet1">{description}</li>
                </ul>
            </div>
        </div>
    )
}