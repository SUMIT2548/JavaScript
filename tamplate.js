const profile = 
{
    name : "Sumit Saha",
    age :   36,
    followes : 250,
    isfollow : true
};

console.log("the profile name",profile.name,"his age",profile.age,"his followes",profile.followes);

// using templete 

let results = `the profile name ${profile.name} his age ${profile.age} he followes ${profile.followes}`
console.log(results);