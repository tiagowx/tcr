import { useState } from 'react'

const Card = () => {

  const [valor, setValor] = useState(0)

  function Add() {
    setValor(valor + 1)
  }
  function Remove() {
    setValor(valor - 1)
  }

  return (
    <div className="card">
      <div className="card-header">
        Meu primeiro card
      </div>
      <div className="card-body">
        <p>{valor}</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={Add}
        >
          Adicionar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={Remove}
        >
          Remover
        </button>

      </div>
    </div>
  )

}
export default Card;