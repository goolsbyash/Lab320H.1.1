import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div style={{border: "4px solid orange", margin: "4px", width: "60%"}}>
      <h2>Home Page</h2>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
