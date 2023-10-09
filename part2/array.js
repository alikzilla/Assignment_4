function findManagersHierarchy(employees, employeeId) {
  const managers = [];
  let currentEmployee = employees.find((e) => e.employeeId === employeeId);

  while (currentEmployee && currentEmployee.managerId !== currentEmployee.employeeId) {
    managers.push(currentEmployee.managerId);
    currentEmployee = employees.find((e) => e.employeeId === currentEmployee.managerId);
  }

  return managers;
}

const employees = [
  { employeeId: 11, name: 'John', managerId: 11 },
  { employeeId: 50, name: 'Todd', managerId: 73 },
  { employeeId: 150, name: 'Alex', managerId: 200 },
  { employeeId: 73, name: 'Sara', managerId: 11 },
  { employeeId: 200, name: 'Alex', managerId: 50 },
  { employeeId: 100, name: 'Alex', managerId: 150 },
];

const employeeIdToFind = 100;
const managersHierarchy = findManagersHierarchy(employees, employeeIdToFind);
console.log(managersHierarchy);