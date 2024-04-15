const obj =[
    {
        employeeName:'ruth',
        position:'projectManager',
        age:20,
    },
{
    employeeName:'mulisa',
    position:'HR',
    age:25,
},
{
    employeeName:'Rene',
    position:'Finance',
    age:30

},
{
employeeName:'Muraza',
position:'software developer',
age:32
},
]

const fruits=[1,2,3,4,5,6,7,8,9,10]
fruits.copyWithin(6,0,1)
console.log(fruits)

const names=["ruth","age","deborah","rene"]
// names.splice(2,3,"sandra","paccy")
// console.log(names)
// const result=names.join(",").toUpperCase();
// const convert=result.split(",")
//  console.log([...convert])
names.sort();
let count=fruits.length;
console.log(count)
let fruit=fruits.at(2);
console.log(fruit)
console.log(fruits.join(";"))
fruits.pop();
console.log(fruits);
fruits.push(1);
console.log(fruits)
fruits.shift();
console.log(fruits);
let d=fruits.unshift(1)
console.log(dc)