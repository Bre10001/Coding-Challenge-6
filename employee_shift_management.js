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


  // Task 3: Function to Assign a New Shift

  function assignShift(employeeName, day, hours) {
    
    const employee = employees.find(empl => empl.name === employeeName); // Find the employee by name
    
    
    if (!employee) {
      console.log(`Error: Employee ${employeeName} not found.`); // Check if the employee exists
      return;
    }
  
    
    const existingShift = employee.shifts.find(shift => shift.day === day); // Check if the employee already has a shift on that day
    
    if (existingShift) {
      console.log(`Error: ${employeeName} already has a shift on ${day}.`);
    } else {
      // Add the new shift
      employee.shifts.push({ day, hours });
      console.log(`Shift added: ${employeeName} now works on ${day} for ${hours} hours.`);
    }
  }
  
  // Example usage:
  
  assignShift("Alice", "Friday", 6); //assign a new shift to Alice
  assignShift("Ben", "Friday", 6); // assign employee Ben who does not exist
  assignShift("Alice", "Monday", 4);// assign a shift on a day she already works





