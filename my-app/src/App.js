import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData"

export default function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke 
      setup= {joke.setup}
      punchline={joke.punchline}
    />
  })
  
  return (
    <div>
    {jokeElements}
    </div>
  )
}







    // <Joke 
    //   setup="I got my daughter a fridge for her birthday."
    //   punchline="I can't wait to see her face light up when she opens it."
    // />
    // <Joke 
    //   setup="How did the hacker escape the police?"
    //   punchline="He just ransomware!"
    // />
    // <Joke 
    //   setup="Why don't pirates travel on mountain roads?"
    //   punchline="Scurvy."
    // />
    // <Joke 
    //   setup
    //   punchline="Swarm."
    // />