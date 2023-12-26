const student = {
    fullName : "Sumit saha",
    age      :   22, 
    cgpa     :   8.25,
    isPass   :   true 
};

console.log(student); 
console.log(student.age);        // type 1 
console.log(student ["age"] );   // type 2 

// update age 
student.age = student.age +1 ;
console.log(student.age);