class Department {
  // private id: string;
  // private name: string; // field of a class
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "accounting");
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  getReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department("d1", "Accounting"); // instantiation of a class
const it = new ITDepartment("d1", ["Sophie"]); // instantiation of a class

it.addEmployee("Sophie");
it.addEmployee("Max");

// it.employees[2] = "Manu";

it.describe();
it.name = "NEW NAME";

it.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong...");
accounting.addReport("Something went wrong again...");

accounting.addEmployee("Sophie");
accounting.addEmployee("Max");

accounting.getReports();

console.log(accounting);
