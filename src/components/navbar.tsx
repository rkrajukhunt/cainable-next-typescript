import Search from "../assets/search.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container ">
      <div className=" nav-bar">
        <h2>Anime</h2>
        
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <input
            placeholder="search"
            className="nav-search block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg   dark:placeholder-gray-400 dark:text-black"
          />
        </div>

        <p>Today is the 24th of October</p>
      </div>
    </div>
  );
}
