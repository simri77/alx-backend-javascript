export default function createIteratorObject(report) {
  const employeeNameList = [];
  const { allEmployees } = report;
  for (const obj of Object.values(allEmployees)) {
    for (const employeeName of obj) {
      employeeNameList.push(employeeName);
    }
  }
  return employeeNameList;
}
