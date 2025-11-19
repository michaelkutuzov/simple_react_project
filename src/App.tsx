import MainGrid from "./components/MainGrid/";

const employees = [
  {
    img: null,
    name: "Fili",
    surname: "Ironfoot",
    position: "Main Engineer",
  },
  {
    img: null,
    name: "Tranduil",
    surname: "Mirkwood",
    position: "Master of Miners",
  },
  {
    img: null,
    name: "Odo",
    surname: "Took",
    position: "Treasurer",
  },
];

function App() {
  return (
    <>
      <MainGrid employees={employees} />
    </>
  );
}

export default App;
