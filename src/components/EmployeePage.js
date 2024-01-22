import EmployeeData from "./EmployeeData";
import EmployeeListItem from "./EmployeeListItem";

function EmployeePage() {
  return (
    <div style={{width: "40%", border: "4px solid purple", margin: "4px"}}>
      <h2>Employee Page</h2>
      <EmployeeListItem />
     {/* <EmployeeData /> */}
    </div>
  );
}

export default EmployeePage;
