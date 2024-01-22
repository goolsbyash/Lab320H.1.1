import "./App.css";
import EmployeePage from "./components/EmployeePage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App" style={{ border: "4px solid black", width: "40%" }}>
      <h1>Employees App</h1>
      <div className="MainSection">
        <HomePage />
        <EmployeePage />
      </div>
    </div>
  );
}

export default App;
