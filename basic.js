const colors=['red','green','blue','yellow','orange'];
let StringJoin=colors.join(',');
console.log(StringJoin);
let remove =colors.splice(1,2 ,'purple','pink');
console.log(colors)
let copyElements=colors.copyWithin(1,3)
 console.log(colors);
  let uppercase =colors.map(element=>element.toUpperCase());
  console.log(uppercase);
let startWithB=colors.find(colors=>colors.startsWith('b'));
if(startWithB){
console.log(startWithB)
}
else{
    console.log('there is no array start with b ')
}
const selectedColors=colors.slice(1,3);
console.log(selectedColors);


// const fruits=[1,2,3,4,5,6,7,8,9,10]
// fruits.copyWithin(6,0,1)
// console.log(fruits)

// const names=["ruth","age","deborah","rene"]
//  names.splice(2,3,"sandra","paccy")
//  console.log(names)
// const result=names.join(",").toUpperCase();
// const convert=result.split(",")
//  console.log([...convert])
// names.sort();
// console.log(names);