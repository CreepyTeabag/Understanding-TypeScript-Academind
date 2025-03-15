## 01. Getting Started

### 02. What Is TypeScript & Why Should You Use It

TypeScript is a JavaScript Superset, which means that it is a language that builds up on JavaScript. It adds new features and advantages to it.
But neither browsers nor Node.js can execute TypeScript, so we need to compile it. During compilation features are compiled to JavaScript "workarounds" and possible errors are thrown.
In JavaScript we can use mitigation strategies by using if-checks, validating and sanitizing user input and so on. But this can still result in invalid code.

### 04. Installing & Using TypeScript

Для начала нужно установить TypeScript глобально:
`npm install -g typescript`

Большой плюс TypeScript ещё и в том, что:

1. VScode автоматически начинает анализировать код и подсвечивает потенциальные ошибки в .ts файлах
2. TypeScript обращает внимание на гораздо больше вещей, чем разработчик - например, не просто тип у input.value, но и то, существует ли вообще value.

Для того, чтобы указать TS, что некая переменная точно существует и точно не будет равна null - нужно поставить `!`: `document.getElementById("num1")!`

Также можно указать какого типа будет DOM-элемент при помощи Type casting: `document.getElementById("num1")! as HTMLInputElement;`

Для того, чтобы скомпилировать .ts файл в .js файл, нужно выполнить команду `tsc file-name.ts`. Будет создан скомпилированный файл file-name.js, и ошибки выведутся в консоль

### 05. TypeScript Advantages - Overview

Плюсы использования TypeScript:

1. Типы!
2. Можно использовать самый современный JavaScript, потому что он будет скомпилирован в более старую версию автоматически.
3. Дополнительный функционал, не существующий в JavaScript, например, Interfaces и Generics
4. Предоставляет meta-programming функционал, например, Decorators
5. Богатый функционал для конфигурации.
6. Современные инструменты, которые помогают даже в не-TypeScript проектах

### 10. The Course Project Setup

В этом курсе новые проекты будут создаваться на основании папки course-starting project. Запустить проект можно при помощи команды

```
npm i
npm run start
```

## 02. TypeScript Basics & Basic Types

### 02. Using Types

Основные типы в TypeScript:
**number** - любое число положительное / отрицательное / целое / не целое. Например: 1, 5.3, -10
**string** - любая строка / текст. Например: "Hi", 'Hi', `Hi`.
**boolean** - булево значение. Только: true или false, никаких truthy / falsy значений

TypeScript помогает нам на этапе разработки, но он не меняет то, как будет работать JavaScript в браузере.

Мы можем добавлять дополнительные проверки вроде `if (typeof n1 !== "number") {...}`, но это обычный JavaScript и всё-таки лучше просто предотвратить ошибку изначально.
Основная разница состоит в том, что JavaScript использует динамические типы, которые разрешаются во время работы. TypeScript использует статические типы, которые указываются во время разработки.

### 06. Type Assignment & Type Inference

TypeScript умеет выводить типы на основании предоставленных данных. Например, если написать `let sum = 12;`, то TypeScript автоматически определит, что тип sum - это число. В таком случае не нужно прописывать тип у переменной. Но это нужно делать, если переменная объявляется, но ей не присваивается никакое значение. Например:
`let sum: number;`

### 07. Object Types - 12. The any Type

Основные типы в TypeScript:
**object** Любой объект JavaScript объект, также может быть более конкретный тип объекта. Также объекты могут быть вложенными. Например: `{ age: 30, info: {name: 'Jack'} }`.
**Array** Любой JavaScript массив: может быть гибким или строгим в отношении типов элементов массива.
**Tuple = кортеж** Новый тип, добавленный TypeScript. Это массив с фиксированной длиной и типами данных. Например: `[1, '2']: [number, string]`. При попытке записать не тот тип не на ту позицию, появится ошибка. Но при этом TypeScript не может отследить операции типа .push().
**Enum = перечисления** Новый тип, добавленный TypeScript. Автоматически пронумерованные идентификаторы глобальных переменных. Например: enum {NEW, OLD} - здесь NEW = 0, OLD = 1. Также можно заранее указать число, соответствующее данному идентификаторы. Последующие идентификаторы будут итерироваться от него. Например:

```
enum Role {
  ADMIN = 5,
  READ_ONLY, // 6
  AUTHOR, // 7
}
```

Также можно указать строку или какое-то другое число:

```
enum Role {
  ADMIN = 'admin',
  READ_ONLY,
  AUTHOR,
}
```

**Any** Любое значение.
**Union Type = объединения типов** - переменная может быть любого из указанных типов. Например: `let score: number | string`
