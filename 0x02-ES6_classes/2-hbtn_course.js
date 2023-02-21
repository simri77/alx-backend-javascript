/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('students must be an Array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw TypeError('students must be a array of Strings');
      }
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw TypeError('Students must be an Array');
    }
    value.forEach((student) => {
      if (typeof student !== 'string') {
        throw TypeError('Students must be a array of Strings');
      }
    });
    this._students = value;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
