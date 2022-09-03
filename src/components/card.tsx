import Diamond from "../assets/main.png";
import Image from "next/image";
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
    <div className="md:container md:mx-auto ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((user) => (
          <div key={user.id} className="relative">
            <Image
              src={Diamond}
              alt="Picture of the author"
              className="ctm-img object-cover"
            />
            <div className="absolute bottom-5 left-3 xs:left-18">
              <p className=" text-white">{user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
