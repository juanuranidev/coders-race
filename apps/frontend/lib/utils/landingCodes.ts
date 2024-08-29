const landingCodes: {
  justify: string;
  text: string;
}[] = [
  {
    justify: "flex-start",
    text: `const multiplyByTwo = function(num){return num * 2;}`,
  },
  {
    justify: "center",
    text: `const printName = (first, last) => console.log("first, last");`,
  },
  {
    justify: "flex-end",
    text: `let func = function(arg1, arg2, ..., argN) {return expression;};`,
  },
  {
    justify: "center",
    text: `const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);`,
  },
  {
    justify: "flex-start",
    text: `const filteredArray = [1,2,3,4].filter( num => num % 2 == 0);`,
  },
  {
    justify: "flex-end",
    text: `const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);`,
  },
  {
    justify: "flex-start",
    text: `const timeFromDate = date => date.toTimeString().slice(0, 8);`,
  },
  {
    justify: "center",
    text: `const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';`,
  },
  {
    justify: "flex-end",
    text: `const stringReverse = str => str.split("").reverse().join("");`,
  },
  {
    justify: "flex-start",
    text: `const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);`,
  },
  {
    justify: "flex-start",
    text: `const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;`,
  },
  {
    justify: "flex-end",
    text: `const average = arr => arr.reduce((a, b) => a + b) / arr.length;`,
  },
  {
    justify: "center",
    text: `const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);`,
  },
  {
    justify: "flex-end",
    text: `const randomBoolean = () => Math.random() >= 0.5;`,
  },
  {
    justify: "flex-start",
    text: `const removeDuplicates = (arr) => [...new Set(arr)];`,
  },
  {
    justify: "flex-end",
    text: `const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());`,
  },
  {
    justify: "flex-start",

    text: `let x = function(x, y) {return x * y;}`,
  },
  {
    justify: "center",
    text: `console.log(materials.map((material) => material.length));`,
  },
  {
    justify: "flex-end",
    text: `const addTwo = (num) => num + 2;`,
  },
  {
    justify: "center",
    text: `let myFunction = (a, b) => a * b;`,
  },
  {
    justify: "flex-start",
    text: `let mul = (num1,num2) => num1 * num2`,
  },
  {
    justify: "flex-end",
    text: `const doubled = numbers.map((number) => return number * 2);`,
  },
  {
    justify: "flex-start",
    text: `const addNumbers = (number1, number2) => number1 + number2;`,
  },
  {
    justify: "center",
    text: `const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];`,
  },

  {
    justify: "flex-end",
    text: `let myFunction1 = () => console.log("No argument function");`,
  },
  {
    justify: "flex-start",
    text: `let myFunction = (num >20) ? console.log("number is greater than 20") : console.log("number is less than 20");`,
  },
  {
    justify: "flex-end",
    text: `let show = (num) => console.log(num);`,
  },
  {
    justify: "center",
    text: `const addES6 = (param1, param2) => { return param1 + param2 };`,
  },
  {
    justify: "flex-end",
    text: `const hasFocus = (ele) => ele === document.activeElement;`,
  },
  {
    justify: "flex-start",
    text: `const getSelectedText = () => window.getSelection().toString();`,
  },
  {
    justify: "flex-end",
    text: `const getRandomBoolean = () => Math.random() >= 0.5;`,
  },
  {
    justify: "center",
    text: `const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;`,
  },
  {
    justify: "flex-start",
    text: `const uniqueArr = (arr) => [...new Set(arr)];`,
  },
  {
    justify: "flex-end",
    text: `const isArray = (arr) => Array.isArray(arr);`,
  },
  {
    justify: "flex-end",
    text: `const randomString = () => Math.random().toString(36).slice(2);`,
  },
  {
    justify: "center",
    text: `const scrollToTop = () => window.scrollTo(0, 0);`,
  },
  {
    justify: "flex-end",
    text: `const testConsoleLog = () => console.log("test working")`,
  },
];

export default landingCodes;
