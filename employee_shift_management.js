// Task 1: Employees Array of Employee Objects

let employees = [
    {
      name: 'Alice',
      shifts: [
        { day: 'Monday', hours: 5 },
        { day: 'Wednesday', hours: 10 }
      ]
    },
    {
      name: 'Bob',
      shifts: [
        { day: 'Tuesday', hours: 2 },
        { day: 'Thursday', hours: 13 }
      ]
    },
    {
      name: 'Charlie',
      shifts: [
        { day: 'Monday', hours: 7 },
        { day: 'Wednesday', hours: 8 }
      ]
    },
    {
      name: 'Eve',
      shifts: [
        { day: 'Tuesday', hours: 5 },
        { day: 'Friday', hours: 10 }
      ]
    }
  ];
  
// Task 2: Function to Display Employee Shift Details
  function displayEmployeeShifts(employees) {
    console.log(`Employee: ${employees.name}`); //accepts employee name
    console.log("Shifts:");
    employees.shifts.forEach(shift => {
      console.log(`Day: ${shift.day}, Hours: ${shift.hours}`); // logs employee days and hours
      console.log("--------------");
    });
  }
  
  // display all employess
  employees.forEach(employee => displayEmployeeShifts(employee));




