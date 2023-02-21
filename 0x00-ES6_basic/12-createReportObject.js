export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let count = 0;
      /* eslint-disable no-unused-vars */
      for (const [key, value] of Object.entries(employeesList)) {
        count += 1;
      }
      /* eslint-disable no-unused-vars */
      return count;
    },
  };
}
