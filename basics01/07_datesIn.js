// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISODateString());
console.log(myDate.toJson());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(3=2023,0,23);
console.log(myCreatedDate.toDateString);

let myCreateDate = new Date("2023-01-14")
console.log(myCreateDate.toLocaleString())

let myCreateDate1 = new Date("01-14-2023");
console.log(myCreateDate1)

let myTimeStamp = Date.now()
console.log(mytimeStamp)
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long"
})