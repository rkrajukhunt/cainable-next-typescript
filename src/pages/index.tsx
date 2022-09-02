import Card   from "../components/card";
import Card2   from "../components/care2";
export default function Home() {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <div>
        <Card></Card>
        </div>
        <div>
        <Card2></Card2>
        </div>
        
      </main>
    </div>
  )
}
