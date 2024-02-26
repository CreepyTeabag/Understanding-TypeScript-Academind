function add0(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else return result;
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult0 = true;
const resultPhrase = "Result is: ";

add0(number1, number2, printResult0, resultPhrase);
