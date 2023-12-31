import Game from "./components/Game"
import Title from "./components/Title"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"
import Footer from "./components/Footer"

export default () => {
  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div id="App">
      <section className="main-content">
        <Title text={"Biblioteca de Jogos"} />
        <NewGameForm addGame={addGame} />
        <div className="games" >
          {games.map(game => (
            <Game title={game.title} cover={game.cover} id={game.id} key={game.id} btnFunction={removeGame} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}