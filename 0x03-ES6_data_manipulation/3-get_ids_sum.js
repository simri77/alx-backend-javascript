export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, ele) => acc + ele.id, 0);
}
