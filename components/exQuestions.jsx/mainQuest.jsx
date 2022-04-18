
import react from "react"
import { CompImput } from "./compInput"
import perguntas from "./perguntas.json"


function MainQuest () {


perguntas.forEach(item => {
  item.usada = false
})
  perguntas[0].usada = true


  return (
    <>
      <CompImput perguntas={perguntas}/>
    </>
  )
}

export {MainQuest}