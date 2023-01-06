export default function updateStudentGradeByCity(arr, city, newGrade) {
  return arr
    .filter((ele) => ele.location === city)
    .map((ele) => {
      for (const { studentId, grade } of newGrade) {
        if (ele.id === studentId) {
          return { ...ele, grade };
        }
      }
      return { ...ele, grade: 'N/A' };
    });
}
