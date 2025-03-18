class Department {
  name: string; //field of a class

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting"); // instantiation of a class
console.log(accounting);

accounting.describe();

const accountingCopy = { name: "DUMMY", describe: accounting.describe };
accountingCopy.describe();
