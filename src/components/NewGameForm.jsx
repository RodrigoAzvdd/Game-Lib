import Button from "./Button"
import TextInput from "./TextInput"
import { useState } from "react"

export default function NewGameForm({ addGame }) {

  const [title, setTile] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = ev => {
    ev.preventDefault()
    addGame({ title, cover })
    setCover("")
    setTile("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput labelText={"Titulo:"} type={"text"} name={"title"} id={"title"} value={title} iptFunction={setTile} />
      <TextInput labelText={"Capa:"} type={"text"} name={"cover"} id={"cover"} value={cover} iptFunction={setCover} />
      <Button text={"Adicionar a Biblioteca"} />
    </form>
  )
}