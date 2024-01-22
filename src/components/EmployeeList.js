// const employeeData =

import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <ul style={{listStyle: "none"}}>
      <li>
        <EmployeeListItem />
      </li>
      <li>
        <EmployeeListItem />
      </li>
      <li>
        <EmployeeListItem />
      </li>
      <li>
        <EmployeeListItem />
      </li>
    </ul>
  );
}

export default EmployeeList;
