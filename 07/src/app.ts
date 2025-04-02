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

console.log(mergedObj);
