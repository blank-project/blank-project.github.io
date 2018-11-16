/**
 * Randomly picks a student
 */
 const students = [
  "Candice",
  "Delphine",
  "Rebecca",
  "Harouna",
  "Omar",
  "Soufiane",
  "Benjamin",
  "Yassine",
  "Florian",
  "Jérémy",
  "Amine",
  "Chris"
];

var idx = Math.floor(Math.random() * students.length);
console.log(idx);
console.log(students[idx]);
