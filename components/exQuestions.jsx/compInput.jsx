import react from "react"

function CompImput ({perguntas}) {

const [state, setState] = react.useState(2)
const [respostas, setRespostas] = react.useState([])

  function handleSub (e) {
    e.preventDefault()
      setState(state + 1)
        setarPergunta(state)
      }

  function setarPergunta() {
    if(state>perguntas.length) {
      setState(0)
      Resultado()
    }

    perguntas.map((dados) => {
      dados.usada = false
       if(dados.id == state) {
        dados.usada = true
      }
    })
  }

  function handleResp ({target}) {
      setRespostas({...respostas, [target.name]:target.value})
      console.log(respostas)
    }

  let quantidade = 0
  function Resultado () {
    respostas.map(resp => {
      perguntas.map(respTrue => {
        if(resp == respTrue.resposta) {
          quantidade ++
        }
      })
    })
      return (
        <>
        <p>voce acertou {quantidade}</p>
        </>
      )
  }

  return (
    <>
      {perguntas.map(({id,pergunta,options,usada}) => (
        usada && (
        <form 
          onSubmit={handleSub}
          key={id}>
          <fieldset>
        
            <legend>{pergunta}</legend>
        
        
          {options.map((item) => (
            <label 
            key={item}
            style={{display:"block"}}
            >
              <input 
              name={id}
              value={item}
              onChange={handleResp}
              type="radio" 
              id={id}
              />
              {item}
            </label>
          ))}   
          </fieldset>
          <button>Proxima</button>
        </form>
        )
      ))}
    {(state == 0) && (<Resultado />)}
    </>
  )
}

export {CompImput}