class Department {
  // private id: string;
  // private name: string; // field of a class
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting"); // instantiation of a class

accounting.addEmployee("Sophie");
accounting.addEmployee("Max");

// accounting.employees[2] = "Manu";

console.log(accounting);

accounting.describe();
accounting.name = "NEW NAME";

accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
