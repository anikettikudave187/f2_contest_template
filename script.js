/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee => {
    if(employee.profession=="developer"){
      console.log(employee);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if(employee.profession=="developer"){
      console.log(employee);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const newEmployee ={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter(employee => employee.profession != "admin");
  console.log(employee);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmployee=[
    { id: 5, name: "aniket", age: "22", profession: "student" },
    { id: 6, name: "akshay", age: "21", profession: "student" },
    { id: 7, name: "rohan", age: "28", profession: "employee" },
  ]
  const combinedArr=arr.concat(newEmployee);
  console.log(combinedArr);
}
