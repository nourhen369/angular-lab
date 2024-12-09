export class Cv {
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: number;
  job: string;
  path: string;

  constructor(
    id = 0,
    name = '',
    firstname = '',
    age = 0,
    cin = 0,
    job = '',
    path = ''
  ) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
  }
}
