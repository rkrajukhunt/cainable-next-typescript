import Image from "next/image";
import Diamond from "../assets/main.png";
import arrow from "../assets/left arrow.png";
import rightarrow from "../assets/right-img.png";
export default function Home() {

  return (

    <div className="containar mt-8">

      <div className="lg:w-6/12 w-100 pt-4 md:px-2 px-8 m-auto   justify-center text-sm ">
        <div className="  pb-8 justify-center m-auto ">
         <span><Image
            src={arrow}
            alt="Picture of the author"
            className=""
          /> <a href="#" className="ml-3  font-semibold">  Go Back to Main</a></span>
        </div>
      </div>

      <div className="main-wraper w-screen flex flex-wrap justify-center">


        <div className="lg:w-2/12 w-100 ">

          <Image
            src={Diamond}
            alt="Picture of the author"
            className="cards"
          />

        </div>

        <div className="md:w-4/12 w-screen md:px-0 px-8  md:pt-0 pt-4">

          <div className=" fw-600   ">
            <div>
              <h2 className="card-name px-2 font-semibold"> Shingeki no Kyotou <span className="px-1  bg-green-500 rounded-full"> <Image
            src={rightarrow}
            alt="Picture of the author"
            className=""
          /></span></h2>
            </div>
            <div className="px-2 pt-4 flex justify-between mt-3">
              <div>
                <h6 className="card-text ">Type</h6>
              </div>
              <div>
                <h6 className="font-semibold text-sm z-20  pl-2">Movie</h6>
              </div>
            </div>
            <div className="px-2 pt-4 flex justify-between">
              <div>
                <h6 className="card-text ">Source</h6>
              </div>
              <div>
                <h6 className="font-semibold text-sm z-20  pl-2">Manga</h6>
              </div>
            </div>
            <div className="px-2 pt-4 flex justify-between">
              <div>
                <h6 className="card-text ">Episodes</h6>
              </div>
              <div>
                <h6 className="font-semibold text-sm z-20  pl-2">1</h6>
              </div>
            </div>
            <div className="px-2 pt-4 flex justify-between">
              <div>
                <h6 className="card-text ">Status</h6>
              </div>
              <div>
                <h6 className="font-semibold text-sm z-20  pl-2">Finished Airing</h6>
              </div>
            </div>

            <div className="flex justify-between px-3 text-center pt-4  ">
              <div className="pt-5 ">
                <h5 className="text-black font-bold">7,076</h5>
                <h5 className="text-gray-400 font-bold">Rank</h5>
              </div>
              <div className="pt-5">
                <h5 className="text-black font-bold">6.39</h5>
                <h5 className="text-gray-400 font-semibold">Score</h5>
              </div>
              <div className="pt-5">
                <h5 className="text-black font-bold">3,979</h5>
                <h5 className="text-gray-400 font-semibold">Popularity</h5>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="md:w-6/12  w-screen pt-4 md:px-2 px-8 m-auto  pb-8 justify-center text-sm ">
        <h5 className="font-semibold py-3">Discription</h5>
        <p className="text-justify">A special anime featuring a battle against the Colossal Titan screened at the Tokyo Skytree. In the short, the characters from Shingeki no Kyojin are part of the Sky Survey Corps, protecting the Wall Skytree, a section of the walled city that contains the Skytree. The Sky Survey Corps find that the Wall Skytree is under attack by an army of titans, including a giant 350 meter-class titan that has suddenly appeared next to the Skytree and remains motionless. (Source: Anime Now!)</p>
      </div>


    </div>



  )
}