const students = [
  {
    name: "Gaurav",
    marks: 98,
  },
  {
    name: "Mayank",
    marks: 23,
  },
  {
    name: "lol",
    marks: 77,
  },
  {
    name: "Saksham",
    marks: 95,
  },
];

function checkResult(name) {
  for (let student of students) {
    if (student.name == name) {
      if (student.marks > 90) {
        console.log(`Congratulation ${name} you have cleared the exam `);
        break;
      } else {
        console.log(`Sorry ${name} you have not cleared the exam`);
        break;
      }
    } else {
      console.log("Invalid user");
      break;
    }
  }
}
checkResult("Gaurav");
checkResult("Mayank");
checkResult("Mithun");
