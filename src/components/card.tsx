import Diamond from "../assets/main.png";
import Image from "next/image";
import { Card, Button } from "flowbite-react";
export default function Home() {
  const data = [
    {
      id: 1,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
    {
      id: 2,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
    {
      id: 3,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
    {
      id: 4,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
    {
      id: 5,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
    {
      id: 6,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
    {
      id: 7,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
    {
      id: 8,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
    {
      id: 9,
      img: Diamond,
      name: "Kyoukai no Kanata",
    },
  ];
  return (
    <div className="md:container md:mx-auto container">
      <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-1 text-center">
        {data.map((user) => (
          <Card key={user.id} >
            <div className="relative">
            <Image
              src={Diamond}
              alt="Picture of the author"
              className="ctm-img object-cover"
            />
            <div className="absolute bottom-4 md:left-10 lg:left-16 xs:left-22 sm:left-22">
              <p className=" text-white  ">{user.name}</p>
            </div></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
