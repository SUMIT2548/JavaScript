// create a object 
//type1
const student = {
    firstname : "Sumit",
    lastname : "Saha",
    marks : 98,
    printmarks : () => {
        console.log("marks=",this.marks);
    },
}
console.log(student);
student.printmarks();