import DessertCard from "./components/DessertCard"

const App = () => {
  return (
    <div>
      <h1>Desserts</h1>

      <DessertCard name="Waffle with Berries" category="Waffle" price={12}/>

      <DessertCard name="Almás rétes" category="Rétes" price={1000} />
    </div>
  )
}

export default App