import { Clock } from "./components/Clock"
import { DuelingClock } from "./components/DuelingClock"
import { LinkedClock } from "./components/LinkedClock"
import { RacingClock } from "./components/RacingClock"
import { SingleClock } from "./components/SingleClock"

function App() {
  return (
    <main className=" w-screen  bg-slate-800 h-screen">
      <div className="container mx-auto w-full h-full flex justify-evenly items-center flex-wrap">
      <SingleClock type={8}/>
      <RacingClock type={4}/>
      <LinkedClock secondary={4} primary={4}/>
      <DuelingClock type={6}/>
      </div>

    </main>
  )
}

export default App
