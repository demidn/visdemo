export class Company {
  id: string;
  name: string;
  sales = 0;
  averageSalary = 0;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
