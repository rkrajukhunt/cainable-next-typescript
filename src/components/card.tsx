import Diamond from "../assets/main.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <div className="max-w-sm rounded overflow-hidden  main-cards">
        <Image
          src={Diamond}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          className="ctm-img"
        />
        <div className="">
          <p className="card-text">Kyoukai no Kanata</p>
        </div>
      </div>
    </div>
  );
}
