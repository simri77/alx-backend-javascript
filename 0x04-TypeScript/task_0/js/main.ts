interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'rawi',
  lastName: 'daniel',
  age: 26,
  location: 'Addis Ababa',
};

const studentTwo: Student = {
  firstName: 'rawera',
  lastName: 'daniel',
  age: 26,
  location: 'Addis Ababa',
};

const studentsList: Student[] = [studentOne, studentTwo];

const CreateTable = document.createElement('table');
CreateTable.style.border = '1px solid black';

const bodyElement = document.querySelector('body');
bodyElement?.appendChild(CreateTable);
function generateTableHead(table: HTMLTableElement, data: Student[]) {
  let head = table.createTHead();
  let row = head.insertRow();
  for (const key of Object.keys(data[0])) {
    if (key === 'firstName' || key === 'location') {
      let th = document.createElement('th');
      th.style.border = '1px solid black';
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
}

function generateTable(table: HTMLTableElement, data: Student[]) {
  for (const obj of data) {
    let row = table.insertRow();
    for (const ele of Object.keys(obj)) {
      if (ele === 'firstName' || ele === 'location') {
        let cell = row.insertCell();
        cell.style.border = '1px solid black';
        const val = obj[ele];
        let text = document.createTextNode(val);
        cell.appendChild(text);
      }
    }
  }
}
generateTableHead(CreateTable, studentsList);
generateTable(CreateTable, studentsList);

