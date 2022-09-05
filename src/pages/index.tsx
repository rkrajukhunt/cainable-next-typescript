import Card   from "../components/card";
import Card2   from "../components/care2";

import NavBar   from "../components/navbar";
export default function Home() {
  return (
    <div className="container ">
      <main>
        <div>
      <NavBar></NavBar>
        <Card></Card>
        </div>
        <div>
        <Card2></Card2>
  
        </div>
        
      </main>
    </div>
  )
}
