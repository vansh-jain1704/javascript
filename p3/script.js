let student = { 
  name: "Rahul", 
  grade: 75, 
  subjects: ["Math", "Science", "English"], 
 
  displayInfo: function () { 
    console.log("Name:", this.name); 
    console.log("Grade:", this.grade); 
    console.log("Subjects:", this.subjects); 
  } 
}; 
 
student.displayInfo(); 
 

student.passed = student.grade >= 50; 
 
console.log("Passed:", student.passed); 
 
// Print only properties (not functions) 
for (let key in student) { 
  if (typeof student[key] !== "function") { 
    console.log(key + " : " + student[key]); 
  } 
}
