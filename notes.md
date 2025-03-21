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
