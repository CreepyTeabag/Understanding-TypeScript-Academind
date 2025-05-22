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

### 07. Object Types - 20. The unknown Type

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

**Literal type = литеральный тип** - для переменной задаётся одно или несколько точно определённых значений. Например: let position = "manager" | "CEO" | "programmer".

**Type aliases = Псевдонимы типов** Это заранее созданный тип, который можно переиспользовать. Например: `type Combinable = number | string;`, или

```
type Person = {
  name: string,
  surname: string
}
```

**void** - указывается как тип возвращаемого значения функции, когда функция на самом деле не возвращает ничего (нет return-а).

**Function** - может быть как просто Function, либо более точное `let combineValues: (a: number, b: number) => number;`
**Unknown** более строгий тип, чем any. Проверки типов всё же будут производиться, и, например, unknown нельзя будет присвоить переменной с типом string, в то время как any - можно.
**Never** - тип, который может возвращать функция, если она действительно никогда ничего не возвращает. Например, если функция кидает ошибку - тогда она не возвращает даже undefined. Или если в функции есть бесконечный цикл.

## 03. The TypeScript Compiler (and its Configuration)

### 02. Using Watch Mode

Для того, чтобы включить автоматическое отслеживание изменений в файле, нужно перейти в режим watch:
`tsc app.ts --watch` или `tsc app.ts -w`

### 03. Compiling the Entire Project Multiple Files

Для того, чтобы в целом следить за всем проектом, нужно:

1. Инициализировать проект `tsc --init` в нужной папке. После этого создастся конфигурационный файл `tsconfig.json`
2. После этого можно либо выполнить команду `tsc`, чтобы скомпилировать все файлы проекта, либо использовать режим watch для всего проекта: `tsc --watch` или `tsc -w`.

### 04. Including & Excluding Files

В `tsconfig.json` можно прописать следующие настройки:

- `"exclude": ["node_modules", "main.ts", "**/*.dev.ts"]` - файлы и папки, которые будет игнорировать компилятор. Если не указывать этот параметр вообще - то автоматом будут игнорироваться node_modules. Если он добавлен - их обязательно нужно будет включить в список исключённых папок.
- `"include": []` список разрешённых файлов / папок, которые будут компилироваться. (За исключением тех, которые прописаны в `"exclude"`). Т.е. компилируются "include" минус "exclude".
- `"files"` - работает аналогично `"include"`, но принимает список файлов, но не папок.

### 05. Setting a Compilation Target - 12. Code Quality Options

Важные настройки из `tsconfig.json`:

- `target` - в какую версию JavaScript будет компилироваться TypeScript.
- `lib` - указываются фичи, которые будут доступны и понятны TypeScript-у. Если не указывать - по умолчанию будут доступны фичи из target + все DOM API.
- `allowJs` - TypeScript будет компилировать и .js файлы тоже.
- `checkJs` - TypeScript будет проверять и .js файлы тоже.
- `sourceMap` - позволяет создавать .js.map файлы, которые по итогу позволяют просматривать .ts файлы из DevTools.
- `outDir` - в какую папку будут помещаться скомпилированные JavaScript файлы. При этом структура исходной папку будет сохранена.
- `rootDir` - папка, которую TypeScript будет обрабатывать, и чью структуру будет повторять.
- `removeComments` - удаляет комментарии из JavaScript.
- `noEmit` - проверяет .ts файлы, но не компилирует .js файлы
- `downlevelIteration` - изредка нужно включать, если компиляция идёт в очень старые версии JavaScript, используются циклы и при этом возникают ошибки в компиляции.
- `noEmitOnError` - не будет компилировать проект, если в .ts файле есть ошибка.
- `strict` - включает все строгие проверки, перечисленные в tsconfig.json
  - `noImplicitAny` - запрещает неявное `any`
  - `strictNullChecks` - проверяет на потенциальные `null` и `undefined` значения (например, может ли DOM элемент не существовать)
  - `alwaysStrict` - всегда использует `"use strict"` в .js файлах.
- `noUnusedLocals` - ругается на неиспользуемую локальную переменную.
- `noUnusedParameters` - ругается на неиспользуемые параметры функции.
- `noImplicitReturns` - ругается, если функция иногда возвращает значение, а иногда - нет.

## 05. Classes & Interfaces

### 02. What are Classes

Objects VS Classes
Objects:

- The things you work with in code
- Instances of classes (= based on classes)
- Class-based creation is an alternative to using object literals

Classes:

- "Blueprints for objects" (theoretical definition)
- Define how objects look like, which properties and methods they have.
- Classes make creation of multiple, similar objects much easier.

### 06. private and public Access Modifiers

В TypeScript можно делать свойства и методы класса приватными при помощи ключевого слова `private`. Тогда, например, нельзя будет напрямую их изменить - нужно будет специально предназначенный для этого публичный метод.
Для публичных свойств и методом можно указать `public`, но это не обязательно, т.к. они и так являются публичными по умолчанию.

### 07. Shorthand Initialization

Инициализировать поля можно по-разному. Полный способ:

```
  class Department {
    private readonly id: string;
    public name: string; // field of a class

    constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
    }
    ...
  }
```

Короткий способ:

```
  class Department {
    constructor(private readonly id: string, public name: string) {
    }
    ...
  }
```

### 08. readonly Properties

Свойства могут также объявляться как `readonly` - и тогда их нельзя будет изменить после инициализации.

### 09. Inheritance

Один класс может расширять другой класс: `class ITDepartment extends Department {}`.
Если ничего не прописать в {} - то этот класс просто будет функционировать точно так же, как и исходный.

Для того, чтобы использовать конструктор оригинального класса, но добавить и что-то своё, нужно вызвать `super()` перед работой с новый классом и `this`:

```
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
```

### 10. Overriding Properties & The protected Modifier

Приватные `private` свойства не доступны из дочернего класса - они доступны только из изначального класса. Если требуется предоставить доступ к подобному свойству дочерним классам, но при этом оставить запрещённым доступ извне класса, нужно использовать защищённое свойство `protected`

Методы родительского класса можно заменить - достаточно из просто переписать в новом дочернем классе.

### 16. A First Interface

Интерфейс описывает структуру объекта.

```
interface Person {
  name: string;

  greet(phrase: string): void;
}
```

### 17. Using Interfaces with Classes

Зачастую типы и интерфейсы могут использоваться взаимозаменяемо. Но интерфейс всегда описывает именно объект, т.е. тип более гибок, а интерфейс более чёток.
Также интерфейс может использоваться с классами. Он будет вынуждать класс следовать некоторым правилам. Т.е. в какой-то мере он действует как абстрактный класс, но только он ещё проще, т.к. в нём нет никакой имплементации функциональности.

```
  interface Greetable {
    name: string;

    greet(phrase: string): void;
  }

  class Person implements Greetable {
    name: string;
    age: number;

    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }

    greet(phrase: string) {
      console.log(phrase + " " + this.name);
    }
  }
```

### 19. Readonly Interface Properties

И в типе, и в интерфейсе можно указать `readonly`:

```
interface Greetable {
  readonly name: string;
}
```

Тогда это свойство можно будет указать лишь один раз, и нельзя будет изменить потом

### 20. Extending Interfaces

Один интерфейс может включать в себя свойства другого интерфейса. Например:

```
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}
```

Тут интерфейс Greetable будет включать в себя и name, и greet.
Это удобно, потому что обычный класс не может наследовать от нескольких других классов. Но класс может использовать несколько интерфейсов или один интерфейс, который расширяет другие интерфейсы.

### 21. Interfaces as Function Types

Функцую можно описать двумя способами: через тип и через интерфейс. Синтаксис следующий:
`type AddFn = (a: number, b: number) => number;`

```
interface AddFn {
  (a: number, b: number): number;
}
```

## 06. Advanced Types

### 02. Intersection Types

Пересечение (Intersection Types) - это объединение двух типов в один:
`type ElevatedEmployee = Admin & Employee;`
В целом можно было бы достичь аналогичного результата при помощи расширения типов:
`interface ElevatedEmployee extends Admin, Employee {}`

При этом это работает не только с объектами. Например:

```
type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic; // number, потому что это единственное пересечение между этими типами
```

### 03. More on Type Guards

Защита типа (Type Guard) - это проверка типа переменной при помощи ключевого слова typeof. Например:

```
if (typeof a === "string") {
  ...
}
```

При помощи typeof проверять можно только типы, встроенные в JavaScript.

Если же нужна проверка на какой-то ключ объекта, то можно использовать такой способ:

```
if ("privileges" in emp) {
  console.log("Privileges: " + emp.privileges);
}
```

А для классов также можно использовать instanceof:

```
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
```

### 04. Discriminated Unions

Дискриминантное объединение (Discriminated Unions) - это паттерн, позволяющий определять тип объекта. Для этого в необходимые объекты добавляются свойства с одинаковым названием, но разными значениями. И по ним уже происходит проверка:

```
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
}
```

### 05. Type Casting

Приведение типов (Type Casting) - это явное обозначение (преобразование) одного типа в другой. Есть два равнозначных способа приведения типа:

```
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);

const userInputElement2 = document.getElementById(
  "user-input"
)! as HTMLInputElement;
```

Для того, чтобы указать TypeScript-у, что значение точно не равно null, используется восклицательный знак `!`. Часто это бывает полезным при взаимодействии с DOM-элементами, когда мы точно знаем, что элемент существует, но TypeScript этого не знает. Если же мы сами не уверены точно, существует ли элемент, можно выполнять проверку и использовать приведение типа так:

```
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

```

### 06. Index Properties

Индексные члены (динамические ключи, index properties) - это возможность создавать более гибкий тип объекта.

```
interface ErrorContainer {
  [prop: string]: string;
}

```

В объекте типа ErrorContainer может содержаться любое количество пар ключ-значение, но каждый ключ и каждое значение должно быть строкой.
Также можно добавить другие ключи, если мы точно знаем их название, но их значение должно соответствовать аннотации типа из индексной сигнатуры

```
interface ErrorContainer {
  id: number; // error, has to be string
  name: string; // OK
  [prop: string]: string;
}

```

При этом указывая [prop: string] мы позволяем ключам также быть и числами, т.к. числа можно провести к строке. А вот если мы укажем [prop: number], то ключи должны будут быть строго числами.

### 07. Function Overloads

Перегрузка функций (Function Overloads) - это способ более точно описать типы аргументов функции и тип возвращаемого значения. Это помогает избавиться от неоднозначности и сузить количество разрешённых типов. Например:

```
type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

Так мы точно определяем, какое значение будет возвращено. При этом необязательно прописывать все возможные комбинации, если они нам не нужны. Например, если указать только

```
function add(a: number, b: number): number;
function add(a: string, b: string): string;
```

то TypeScript будет кидать ошибку, если в функцию передадут аргументы разного типа.

## 07. Generics

### 02. Built-in Generics & What are Generics

Дженерики (Generics,Generic types) зачастую можно определить по использованию `<T>`
Дженерик - это тип, как бы связанный с каким-то другим типом, и при этом он очень гибок касательно того, какой именно этот другой тип.

Например, массив - это на самом деле дженерик, т.к. массив - это тип данных, но внутри себя содержит другие данные, имеющие другой тип.
Синтаксис: `Array<string>` - это то же самое, что и `string[]`
Дженерик может использоваться для промисов. Это удобный способ указать, какой именно тип данных вернёт промис:

```
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

```

### 03. Creating a Generic Function

Пример объявления функции при помощи дженерика:

```
function merge<T, U>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB,
  };
}
```

Тут Typescript сможет определить, что возвращаемое значение будет пересечением типов T и U, какими бы они ни были.

```
const mergedObj = merge({ name: "Sophie" }, { age: 27 });
```

у mergedObj тип будет {name: string;} & {age: number;}

Также уже при вызове функции можно указать, какие типы будут переданы:

```
const mergedObj2 = merge<Person, Profession>(
  { name: "Sophie" },
  { profession: "web developer" }
);
```

### 04. Working with Constraints

Проблема с примером `function merge<T, U>(objA: T, objB: U) {...}` состоит в том, что в данную функцию можно будет передать и не объект и TypeScript не кинет ошибку, т.к. мы совсем не указываем никаких ограничений.
Исправить это можно так:

```
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB,
  };
}

```

`T extends object` означает, что аргумент будет любым объектом.

### 06. The keyof Constraint

Для того, чтобы убедиться, что мы можем использовать только ключи, действительно существующие в объекте, можно использовать `extends keyof`:

```
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value:" + obj[key];
}
```

### 09. Generic Utility Types

В TypeScript-е есть свои встроенные типы. Например, может быть удобен тип `Partial<>`:

```
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

let courseGoal: Partial<CourseGoal> = {};
```

В данном примере `courseGoal` фактически становится такого типа:

```
interface CourseGoal {
  title?: string;
  description?: string;
  completeUntil?: Date;
}
```

Т.е. все ключи становятся опциональными. Они могут присутствовать или нет. Но других ключей присутствовать точно не может. Если они присутствуют - они правильного типа.

Также иногда удобно использовать тип `Readonly<>`. Когда массив или объект помечены как `Readonly<>`, попытки внести в них изменения будут вызывать ошибку.

```
const names: Readonly<string[]> = ["Sophie", "Max"];
// names.push("Manuel"); // error
```

## 08. Decorators

### 01. Module Introduction

Декораторы нужны для того, чтобы помогать разработчикам писать более понятный для других разработчиков код.

### 02. A First Class Decorator

Для того, чтобы использовать декораторы в коде, в tsconfig.json нужно указать следующее:

```
"target": "es6",
...
"experimentalDecorators": true
```

### 03. Working with Decorator Factories

Обычный декоратор используется так:

```
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
 ...
}
```

Фабричный декоратор (Decorator factory) может принимать аргументы и используется так:

```
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  ...
}
```

### 05. Adding Multiple Decorators

Фабричные декораторы выполняются в том порядке, в котором они написаны. Но при этом сами декораторы, которые они возвращаются из фабричных декораторов, выполняются в порядке, обратном их написанию перед классом (снизу вверх).

### 08. When Do Decorators Execute

Декораторы срабатывают не тогда, когда класс инстанцируется. Они срабатывают, когда класс создаётся.

## 10. Modules & Namespaces

### 02. Writing Module Code - Your Options

Для разделения кода на модули у нас есть три варианта:

1. Просто вручную разбить код на несколько отдельных файлов, а затем все итоговые .js файлы вручную импортировать в index.html
2. Пространства имён и сборка файлов (Namespaces & File bundling) - use "namespace" code syntax to group code. При этом TypeScript может собрать все файлы в один, и тогда будет проще работать с импортами.
3. Импорты / экспорты ES6 (модули ES6). Файлы компилируются по отдельности, но потом потребуется только один импорт файла скрипта. Собрать всё в один файл можно при помощи сторонних инструментов (например, Webpack).

### 03. Working with Namespaces

Пространства имён - это фича TypeScript-а и в JS компилируется особенным образом.
Как использовать namespaces:
Выносим в отдельный файл то, что нам нужно и оборачиваем в namespace:

```
namespace MyApp {
  // any code here
  export const text = 123;
}
```

Обязательно прописываем export перед теми переменными, типами и т.д., которые нам понадобятся в другом файле.

В основном файле мы подключаем этот отдельный файл так:

```
/// <reference path="drag-drop-interfaces.ts" />
```

Обязательно в начале должны стоять три слэша!
Но этот вынесенный код доступен только внутри этого пространства имён. Соответственно, весь зависимый от этого кода код тоже должен лежать в этом же пространстве имён. Т.е. и в основном файле мы весь код должны обернуть в

```
namespace MyApp {
  // any code here
}
```

Тут возникает проблема: по умолчианию эти отдельные .ts файлы будут компилироваться в отдельные .js файлы. Чтобы всё собралось в один файл - нужно в `tsconfig.json` включить опцию `outFile` и указать путь и название файла, в который всё будет компилироваться. И нужно параметр `module` вот так: `"module": "amd"`.

### 04. Organizing Files & Folders

В `reference` всегда прописывается относительный путь от файлы, в котором он вызывается.

### 05. A Problem with Namespace Imports

У пространств имён есть один важный момент: в целом мы можем подключить все нужные нам файлы прямо в `app.ts`, и если они будут в правильном порядке - то все последующие файлы, даже если они завсят от других, смогут получить доступ к коду из предыдущих файлов. Но так делать не стоит. Лучше для каждого файла прописывать все необходимые ему для работы файлы, чтобы случайно потом всё не сломать.

### 07. Using ES Modules

При использовании модулей ES6 важно импортировать файлы с указанием .js, а не .ts расширения!

```
import { Component } from "./base-component.js";
```

При работе с ES6 модулями нужно закомментировать `outFile`, а также прописать `"module": "ES2015"`
Модули очень удобны тем, что они подсвечивают ошибки, если мы ссылаемся на то, что мы не импортировали.

В `index.html` подключить скрипт нужно так:
`<script type="module" src="dist/app.js"></script>`
Браузер потом сам скачает файл app.js, проанализирует его. скачет файлы, которые ему нужны, проанализирует их, и т.д. В целом это очень удобно, но создаёт много http запросов.

### 08. Understanding various Import & Export Syntaxes

С помощью модулей ES6 можно импортировать по-разному:

```
import { Validatable, validate } from "../util/validation.js";
// можно заменить на
import * as Validation from "../util/validation.js";
// и использовать так:
Validation.validate()
```

Также можно импортировать, заменяя название импортируемых переменных:

```
import { autobind as Autobind} from "../decorators/autobind.js";
```

Также можно использовать `default export`, но один на файл.

```
export default const Smth = () => {}
// ...
import Something from './smth.js'
```

### 09. How Does Code In Modules Execute

Важно знать, что если мы импортируем, например, одну переменную в нескольких файлах, она вычисляется только в первый раз, когда она импортируется в файл. В остальных файлах затем используется то же значение.

## 11. Using Webpack with TypeScript

### 02. What is Webpack & Why do we need it

Webpack - это инструмент для сборки проекта.
Обычный проект имеет свои минусы:

- много .js файлов и импортов (вызывает слишком много http запросов, что приводит к долгой загрузке сайта)
- код не оптимизирован (не минифицирован)
- для разработки нужны внешние инструменты типа live server-а

Проект с вебпаком:

- код собирается в один файл, нужно меньше импортов
- код оптимизирован (минифицирован), нужно скачивать меньше кода
- можно добавить дополнительные шаги сборки проекта

### 03. Installing Webpack & Important Dependencies

Пакеты, которые потребуются для работы с вебпаком:
"webpack" - именно он будет компилировать наши .ts файлы и собирать их в один .js файл,
"webpack-cli" - позволит выполнять команды для вебпака в консоли,
"webpack-dev-server" - сам будет запускать сервер, который будет отслеживать изменения в файлах и пересобирать их после сохранения,
"typescript" - рекомендуется устанавливать для каждого проекта, даже если он установлен глобально. Так у проекта точно будет правильная версия TS,
"ts-loader" - помогает вебпаку компилировать ts в JavaScript,
"clean-webpack-plugin" - будет очищать папку dist перед тем, как записать туда новый бандл.

### 04. Adding Entry & Output Configuration - 07. Finishing the Setup & Adding webpack-dev-server

Для работы с вебпаком нужно в `tsconfig.json` отключить опцию `"rootDir"`, потому что вебпак сам определит корневую директорию. А также нужно проставить `"sourceMap": true`, чтобы нам потом было легче дебажить код.

Все настройки прописываются в файле `webpack.config.js`

Вебпак работает так: он заходит в основной файл и смотрит там все импорты. Заходит в импортируемые файлы и смотрит импорты там. Так он находит все файлы, используемые в проекте. Затем он берёт весь код из этих файлов, компилирует из при помощи ts-loader и собирает проект.
Чтобы вебпак корректно работал, нужно во всех импортах файлов убрать расширение .js.

Для удобного использования вебпака можно в `package.json` создать команду `"build": "webpack"`, чтобы потом запускать вебпак командой `npm run build`.
А для сборки в режиме prod нужно сделать так:
`"build-prod": "webpack --config webpack.config.prod.js"`

Настройки вебпака для разработки должны быть такими:

```
const path = require("path"); // функционал node.js. Он нам поможет автоматически построить путь до итоговой папки (нам нужен абсолютный, а не относительный путь)

module.exports = {
  mode: "development", // указывает режим разработки
  entry: "./src/app.ts", // первоначальный файл, откуда всё начинается
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    //  filename: "bundle.[contenthash].js", // название итого файла. Мможно для итогого файла указать хэш, чтобы не было проблем с кэшированием сайта.
    filename: "bundle.js", // название итого файла
    path: path.resolve(__dirname, "dist"), // путь к папке, в которую будут складываться итоговые файлы
    publicPath: "/dist/", // Указывает путь для webpack-dev-server, откуда будут загружаться итоговые файлы во время разработки
  },
  devtool: "inline-source-map", //указывает вебпаку на то, что нужно связывать итоговый файл с исходниками
  module: {
    rules: [
      {
        test: /\.ts$/, // регулярное выражение, которое ищет все файлы с расширением ts
        use: "ts-loader", // loader, который будет компилировать ts
        exclude: /node_modules/, // исключения
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // расширения, которые будут использоваться в импортах, и которые вебпаку нужно обрабатывать
  },
};

```

## 12. 3rd Party Libraries & TypeScript

### 02. Using JavaScript (!) Libraries with TypeScript

Для того, чтобы воспользоваться библиотекой, которая написана на js, можно использовать репозиторий DefinitelyTyped - в нём существует много типов, определяющих работу популярных js библиотек. Нужно установить подходящий пакет:
`npm install --save @types/lodash`
После этого ошибки, связанные с использованием этой библиотеки, исчезнут и заработают подсказки в VScode.
