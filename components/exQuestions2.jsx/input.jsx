import React from "react"

function Questions2 ({perguntas}){

  const[state, setState] = React.useState(0)
  const[respostas, setRespostas] = React.useState({})

  perguntas.map(item => item.usada = false)
  perguntas[0].usada = true

  function ver ({target}) {
    setRespostas({...respostas, [target.name]:target.value})
  }

  function handleSub (e) {
    e.preventDefault()
    setState((state) => state + 1)
    endQuest()
  }

  perguntas.map((item,ind) => {
    item.usada = false 
    if(state == ind) {
      item.usada = true
    }
  })


  function endQuest() {
    if(state >= perguntas.length-1) {
      setState(null)
    }
  }

  let quantidade = 0

  const Resultado =() =>{
    state === null && 
    perguntas.map(item => {
      for(var iResp in respostas) {
        if (respostas[iResp] == item.resposta){
          quantidade ++
        }
      }
    })
    return (
      <h1>voce acertou {quantidade} perguntas</h1>
    )
  }



  return (
    <>
      {perguntas.map(({id, pergunta,options, usada}) => (
        usada && (
        <form 
        onSubmit={handleSub}
        key={id}>
          <fieldset>
            <legend>{pergunta}</legend>
            
            {options.map((item) => (
              <label 
              style={{display : "block"}}
              key={item}>
          
                <input 
                type="radio" 
                value={item}
                onChange={ver}
                name={id}
                />
          
                {item}
              </label>
            ))}
          
          </fieldset>
          <button>Proxima</button>
        </form>)
      ))}
      {state === null && <Resultado />}
    </>
  )
}

export {Questions2}