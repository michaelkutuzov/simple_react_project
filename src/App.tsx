import MainGrid from './components/MainGrid/'
const employees = [
  {
    img: '',
    name: "Fili",
    surname: "Ironfoot",
    position: "Main Engineer",
  },
  {
    img: '',
    name: "Tranduil",
    surname: "Mirkwood",
    position: "Master of Miners",
  },
  {
    img: '',
    name: "Odo",
    surname: "Took",
    position: "Treasurer",
  },
]

function App() {
  return (
    <>
      <MainGrid employees={employees}/>
    </>
  )
}

export default App
