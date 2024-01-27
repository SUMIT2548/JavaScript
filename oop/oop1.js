// create a object 
//type1
let student = {
    firstname : "Sumit",
    lastname : "Saha",
    marks : 98,
    // create a normal function
    printmarks : function () {
        return("marks=",this.marks);
    },
};
console.log(student);
console.log(student.printmarks());

// prototype example
/*
let employee={
    fname : "sumit",
    salary:  25000,
    company: function ()
    {
        console.log("mphasis");
    },
};
// object 2 
let employeedetails = {
    designation: "associate software engineer",
};
console.log(employeedetails.prototype=employee);
*/
