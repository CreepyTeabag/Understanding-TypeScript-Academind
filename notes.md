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

Для того, чтобы скопилировать .ts файл в .js файл, нужно выполнить команду `tsc file-name.ts`. Будет создан скомпилированный файл file-name.js, и ошибки выведутся в консоль

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
