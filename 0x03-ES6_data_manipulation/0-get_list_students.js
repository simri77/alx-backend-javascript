export default function getListStudents() {
  const arr = [];

  function createObject(id, firstName, location) {
    arr.push({ id, firstName, location });
  }

  createObject(1, 'Guillaume', 'San Francisco');
  createObject(2, 'James', 'Columbia');
  createObject(5, 'Serena', 'San Francisco');

  return arr;
}
