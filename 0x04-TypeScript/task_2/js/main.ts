interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workDirectorTasks = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workFromHome = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workTeacherTasks = () => 'Cannot work from home';

  getCoffeeBreak = () => 'Cannot have a break';
  workFromHome = () => 'Getting to work';
}

const createEmployee = (salary: number | string): Director | Teacher =>
  typeof salary === 'number' && salary <= 500 ? new Teacher() : new Director();

function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is Director {
  return 'workDirectorTasks' in employee;
}
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    console.log(employee.workFromHome());
    return employee.workFromHome();
  }
  console.log(employee.workFromHome());
  return employee.workFromHome();
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => `Teaching ${todayClass}`;
