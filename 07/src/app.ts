// const names: Array<string> = [];
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  // return Object.assign(objA, objB);
  return {
    ...objA,
    ...objB,
  };
}

const mergedObj = merge({ name: "Sophie", hobbies: ["Sports"] }, { age: 27 });
// const mergedObj2 = merge<{ name: string }, { profession: string }>(
//   { name: "Sophie" },
//   { profession: "web developer" }
// );

// console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";

  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value:" + obj[key];
}

// console.log(extractAndConvert({ name: "Sophie" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;

    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Sophie");
textStorage.addItem("Max");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// const objectStorage = new DataStorage<object>();
// const maxObject = { name: "Max" };
// objectStorage.addItem({ name: "Sophie" });
// objectStorage.addItem(maxObject);
// objectStorage.removeItem(maxObject);
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Sophie", "Max"];
// names.push("Manuel");
// names.pop();
