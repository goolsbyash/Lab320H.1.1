function EmployeeData() {
  const currentData = [
    {
      officeNum: "781-000-0002",
      mobileNum: "617-000-0002",
      sms: "617-000-0002",
      email: "jtaylor@fakemail.com",
    },
  ];
  currentData.map((obj) => {
    let offNum = obj.officeNum.value;
    let mobNum = obj.mobileNum;
    let textNum = obj.sms;
    let email = obj.email;
  
    return (
        <ul>
          <li>
            Call Office
            <li>{offNum}</li>
          </li>
          <li>
            Call Mobile
            <li>{mobNum}</li>
          </li>
          <li>
            SMS
            <li>{textNum}</li>
          </li>
          <li>
            Email
            <li>{email}</li>
          </li>
        </ul>
      );
});

  
}

export default EmployeeData;