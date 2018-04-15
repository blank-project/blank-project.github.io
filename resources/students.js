/**
 * Randomly picks a student
 */
 const students = [
   "Badis",
   "Bilelle",
   "Dienaba",
   "Guilherme",
   "Idir",
   "Ilan",
   "Laura",
   "Lemy",
   "Salem",
   "Zinedine"
 ];

var idx = Math.floor(Math.random() * students.length);
console.log(idx);
console.log(students[idx]);
