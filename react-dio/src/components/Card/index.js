import { useState } from 'react'
import Button from '../Button'

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
        <Button
          className="mx-1 btn btn-success"
          onClick={Add}
        >
          Adicionar
        </Button>
        <Button
          className="mx-1 btn btn-danger"
          onClick={Remove}
        >
          Remover
        </Button>

      </div>
    </div>
  )

}
export default Card;