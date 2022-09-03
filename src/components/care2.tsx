
export default function Home() {
  return (
    <div className="container  p-4 mx-auto min-h-screen justify-center">
      <div className=" rounded overflow-hidden shadow-lg w-100">

         <div className="w-9/12 px-6 pb-8 justify-center m-auto px-10">
           <a href="#">Go Back to Main</a>
           </div>
        <div className="px-6 pt-4 pb-2 w-screen  flex  justify-center flex-wrap">

          <div className="card-img w-6/12  bg-gray-400 h-96"></div>
 
          <div className=" h-96 fw-600  w-6/12 px-3 md-pt-1 pt-5">
            <div>
            <h2 className="card-name px-2 font-semibold"> Shingeki no Kyotou</h2>
            </div>
            <div className="px-2 pt-4 flex justify-between mt-6">
              <p className="card-text ">Type</p>
              <h6 className="font-semibold text-sm z-20 bg-white pl-2">Movie</h6>
            </div>
            <div className="px-2 pt-4 flex justify-between">
              <p className="card-text ">Source</p>
              <h6 className="font-semibold text-sm z-20 bg-white pl-2">Manga</h6>
            </div>
            <div className="px-2 pt-4 flex justify-between">
              <p className="card-text ">Episodes</p>
              <h6 className="font-semibold text-sm z-20 bg-white pl-2">1</h6>
            </div>
            <div className="px-2 pt-4 flex justify-between">
              <p className="card-text ">Status</p>
              <h6 className="font-semibold text-sm z-20 bg-white pl-2">Finished Airing</h6>
            </div>

            <div className="flex justify-between px-3 text-center pt-5 mt-3">
              <div className="pt-5 ">
                <h5>7,076</h5>
                <h5 className="text-gray-400 font-semibold">Rank</h5>
              </div>
              <div className="pt-5">
                <h5>6.39</h5>
                <h5 className="text-gray-400 font-semibold">Score</h5>
              </div>
              <div className="pt-5">
                <h5>3,979</h5>
                <h5 className="text-gray-400 font-semibold">Popularity</h5>
              </div>
            </div>
          </div>

        </div>


        <div className="w-9/12 px-6 pb-8 justify-center text-sm   m-auto">
          <h5 className="font-semibold py-3">Discription</h5>
          <p className="text-justify">A special anime featuring a battle against the Colossal Titan screened at the Tokyo Skytree. In the short, the characters from Shingeki no Kyojin are part of the Sky Survey Corps, protecting the Wall Skytree, a section of the walled city that contains the Skytree. The Sky Survey Corps find that the Wall Skytree is under attack by an army of titans, including a giant 350 meter-class titan that has suddenly appeared next to the Skytree and remains motionless. (Source: Anime Now!)</p>
        </div>




      </div>
    </div>
  )
}