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
   "Lemmy",
   "Salem",
   "Zinedine"
 ];

var idx = parseInt(Math.random() * students.length);

console.log(students[idx]);
