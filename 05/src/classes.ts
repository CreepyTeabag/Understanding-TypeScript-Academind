abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string; // field of a class
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }

    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Sophie");
console.log(employee1, Department.fiscalYear);

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

// const accounting = new AccountingDepartment("d2", []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting === accounting2); // true

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
accounting.addReport("Something went wrong again...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Sophie");
accounting.addEmployee("Max");

// accounting.getReports();

console.log(accounting);

accounting.describe();
