// lecture 1 Task
// 1)შევქმნათ ცვლადი var, let , const -ით შევინახოთ სტრინგ ტიპის, ნამბარ ტიპის, ბულიან ტიპის ინფორმაცია.
// 2)შევქმნათ ცვლადი let ის გამოყენებით , ხოლო მეორე ხაზზე გადააწერეთ მნიშვნელობა.
// 3) console.log ის გამოყენებით დაბეჭდეთ ცვლადში მოთავსებული ინფორმაცია
// 4) typeof -ის გამოყენებით დაბეჭდეთ ცვლადის ტიპი

// var surname = "Gagua";
// var age = 4;
// var is_student = true;
// let surname = "Gagua";
// let age = 4;
// let is_student = true;
// let userName = 'Ana';
// userName = 'Elene';

// let username1 = 'Giorgi';
// username1 = "Nika";
//  console.log( typeof age);
 
// lecture 2

// var number1 = '21';
// var number2 = '7';
// var sum = number1 +  number2;
// console.log(sum);
// let const

// Array - მასივი
// let array =[2,5,6,7,8,"apple"," mango",true,false,34,56,22,45,6];
// // მასივიდან ბოლო ელემენტის ამოღება
// console.log(array[array.length-1]);

// let array =[0,1,2,3,4,"apple"];
// array.push(7)
// array.unshift(1)
// array.pop()
// array.shift()
// let result =array.splice(2,0,8)
// console.log(result);

// console.log(array);
// let array =[1,2,3,4,5,6,7]
// let array1 =['apple', 'mango']
// let result5 = array1.join(' / ')
// console.log(result5);

// let result4 = array1.includes('apple')
// array.reverse()
// array.sort()
// array.fill(7)
// let result1 = array.slice(1,5)

// console.log(array);
// console.log(result4);

// string methods

 

// 1. დავალება: ელემენტის დამატება 

// დაამატეთ ელემენტი მასივის ბოლოს. 

// let fruits = ["apple", "banana", "cherry"]; 
// fruits.push('orange');
// console.log(fruits);


// // დაამატეთ "orange" მასივის ბოლოში. 

 

// 2. დავალება: ელემენტის ამოღება 

//  ამოიღეთ ელემენტი მასივის დასაწყისიდან. 

// let numbers = [10, 20, 30, 40]; 
// numbers.shift();
// console.log(numbers);


// // წაშალეთ პირველი ელემენტი და აჩვენეთ დარჩენილი მასივი. 

 

// 3. დავალება: ელემენტის ჩასმა 

//  დაამატეთ ელემენტი კონკრეტულ ინდექსზე. 

// let colors = ["red", "blue", "green"]; 
// colors.splice(1,0,'yellow');
// console.log(colors);


// // ჩასვით "yellow" ინდექსზე 1. 

 

// 4. დავალება: მასივის გაერთიანება 

//  ორი მასივი გააერთიანეთ ერთ მასივად. 

// let animals1 = ["cat", "dog"]; 

// let animals2 = ["lion", "tiger"]; 
// let animals = animals1.concat(animals2);
// console.log(animals);


// // გააერთიანეთ მასივები და მიიღეთ ახალი მასივი. 

 

// 5 დავალება: მასივის სორტირება 

//  დაალაგეთ მასივი ზრდადობის მიხედვით. 

// let scores = [50, 30, 20, 10, 40]; 
// scores.sort();
// console.log(scores);


// // დაალაგეთ მასივი. 

 

// 6. დავალება: მასივის ელემენტების ტექსტად გაერთიანება 

// გაერთიანეთ მასივის ყველა ელემენტი ერთ სტრინგში. 

// let cities = ["Tbilisi", "Batumi", "Kutaisi"]; 
// let result = cities.join(" -");
// console.log(result);


// // გააერთიანეთ ელემენტები, სადაც მათ შორის იქნება " - ". 

 

 

// 8დავალება: მასივის ზომის დადგენა 

// დაადგინეთ მასივის სიგრძე. 

// let books = ["Math", "Science", "History"]; 
// let result2 =books.length;
// console.log(result2);

// // გაარკვიეთ მასივის სიგრძე. 

// 29.01

// let array = [1,2,3,4,[22,33,[66,67],44]];
// console.log(array[4][2][1]);
// სტრინგის მეთოდები

// let text = 'hello';
// let result2 = text.at(-1);
// console.log(result2);

// let text = 'hello';
// let result2 = text.charAt();
// console.log(result2);

// let text = 'hello';
// let result2 = text.slice(1,4);
// console.log(result2);

// let text = 'HELLO';
// let result2 = text.toLowerCase();
// console.log(result2);

// let text = '  hello   ';
// let result2 = text.trimEnd();
// console.log(result2);

// let text = 'hello';
// let result2 = text.substring(0,3);
// console.log(result2);

// ობიექტი

// let data ={
//     // key      value  property
//     userName:'Mari',
//     age:4,
//     is_student:false,
//     city:['Tbilisi','Batume'],
//     subjects:{}
// };
// console.log(data['subjects']);

// let products = [
//     {
//     userName:'Mari',
//     age:4,
//     is_student:false,
//     city:['Tbilisi','Batume'],
//     subjects:{}

// },
// {
//     userName:'Mari',
//     age:4,
//     is_student:false,
//     city:['Tbilisi','Batume'],
//     subjects:{}

// },
// {
//     userName:'Mari',
//     age:4,
//     is_student:false,
//     city:['Tbilisi','Batume'],
//     subjects:{}

// }]

// let word = "hbbl"
// let number = 4
// let array = [1,2,3,4,5,6,'efg']
// let obj = {
//     city:'bhjkk',
//     population:4567
// }





////////////////////////////////////////// მე -4 ლექცია


// let age = prompt('დაწერეთ ასაკი');
// console.log( typeof age);

// let age = Number(prompt('დაწერეთ ასაკი'));
// console.log(typeof age);

// let  fullName= prompt('დაწერეთ სახელი');
// let result = fullName.trim()
// console.log( result);

// let  fullName= prompt('დაწერეთ სახელი');
// let result = fullName.toLowerCase()
// console.log( result);

// let  fullName= prompt('დაწერეთ სახელი');
// let result = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase()
// console.log( result);


// template literal
// let text = prompt("დაწერეთ სახელი:");
// let age = Number(prompt('დაწერეთ ასაკი'))
// // console.log(age);
// console.log(`ჩემი ასაკი: ${age}`);


// objects-ობიექტი

// სახელის დაბეჭვდა


// პირველი დიდი ასობგერა რომ იყოს 
// let text = prompt("დაწერეთ სახელი:");
// let fullName = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
// console.log(`ჩემი სახელია: ${fullName}`);

// let text = prompt("დაწერეთ სტრიქონი:");
// console.log(`სტრიქონის სიგრძეა: ${text.length}`);
// console.log(`დიდი ასოებით: ${text.toUpperCase()}`);
// console.log(`პატარა ასოებით: ${text.toLowerCase()}`);

// let school = {
//     name: "Greenwood High School",
//     location: "Tbilisi, Georgia",
//     numberOfStudents: 500,
//     hasSportsFacilities: true,
//     subjects: ["Math", "Science", "History", "Geography", "Literature"],
//     principal: {
//       name: "Mr. John Smith",
//       age: 45,
//       contact: "john.smith@school.com"
//     }
//   };
//  delete school.numberOfStudents 
// console.log(school);





// console.log(`${school.principal['name']} is director , he is ${school.principal['age']} , ჩემი საყვარელი საგანია ${school.subjects[0]} და ${school.subjects[1]}`);





// let notebook = {
//     name: "Laptop",
//     brand: "Dell",
//     model: "XPS 13",
//     price: 1200,
//     inStock: true,
//     specifications: {
//       processor: "Intel Core i7",
//       ram: "16GB",
//       storage: "512GB SSD",
//       screen: "13.3 inches, Full HD"
//     },
//     reviews: ["Excellent laptop!" ,"Good laptop"]
   
// };
// notebook.specifications.ram = '20 GB';
// notebook.specifications.ram = '20 GB';
// console.log(`კომპიუტერის რემი არის ${notebook.specifications.ram}`);





// //////////////////////   მე-5 ლექცია (ჯავასკრიპტი)


// •  შექმენი ობიექტი, რომელიც აღწერს თეატრის ბილეთს.
// •	სტრიქონი (string): ბილეთის ნომერი, თეატრის სახელი, შოუ.
// •	რიცხვი (number): ბილეთის ფასი.
// •	ბულიანი (boolean): თუ ბილეთი ხელმისაწვდომია.
// •	ობიექტი (object): თეატრის მისამართი.
// •	თარიღი (Date): ბილეთის შეძენის თარიღი.
// •  შეცვალეთ ბილეთის ფასი და ხელმისაწვდომობა (isAvailable).
// •  დააბეჭდეთ კონსოლში თქვენი შექმნილი ობიექტი.
//  let ticket = {
//   nameOfTheatre:'Marjanishvili',
//   numberOfTicket:23,
//   inStock:true,
//   dateOfTheatre:23,
//   price:35

//  }
//  ticket.price = 20;
//  ticket.inStock =false;
//  delete ticket.inStock;
// console.log(ticket.price);
// console.log(ticket.inStock);


// ციკლი -- loop

// for(let i=0; i <=4; i++){
//   console.log("hello");
 
// }
// for(let i=10; i >0; i--){
//   console.log("bye");
 
// }
// while loop
// let i=0;
// while(i < 4){
//   console.log('hello');
//   i++
  
// }



  
// }
// let array =[1,2,3,4,5];
// for(let i=0; i < array.length; i++){
//   console.log(array[i]);
  
// }

// if/else
// let x = 3;
// if( x > 4){
//   console.log("right");

// }else if(x < 7){
//   console.log('right1');
  

// }else{
//   console.log('wrong');
  
// }

// •	90-100: "A"
// •	80-89: "B"
// •	70-79: "C"
// •	60-69: "D"
// •	0-59: "F"
// let score =300;
// if(score >= 90 && score <= 100){
//   console.log("A");
  
// }else if (score >= 80 && score <= 89){
//   console.log("B");

// }else if (score >= 70 && score <= 79){
//   console.log("C");
// }else if(score > 100){
//   console.log("score is more than 100");
  

// }
// else{
//   console.log("fail");
  
// }

// ლუწი კენტი

// let array = [2,4,6,8,34,23,45,66,88];
// for( let i=0; i < array.length; i++){
//   if(array[i] % 2 == 1){
//     console.log(array[i]);
    
//   }

  
// }



// //////////////////// მე -6 ლექცია (მე-5 ლექციის დავალება)

// 1 ლუწი რიცხვების დაბეჭდვა 2-დან 20-მდე:
// 	for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს ლუწ რიცხვებს 2-დან 20-მდე.

// for(let i = 2; i <= 20; i+=2){
//     console.log(i);
// }

// 2.•	for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით გამოთვლის რიცხვების ჯამს 1-დან 100-მდე.

// let sum = 0;
// for(let i =1; i <= 100; i++){
//     sum = sum + i
//     // sum += i
// }
// console.log(sum);
// 3.დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის დადებითი, უარყოფითი ან ნული. შესაბამისად, დაბეჭდეთ "რიცხვი დადებითია", "რიცხვი უარყოფითია" ან "რიცხვი ნულია".

// let number = prompt('დაწერეთ რიცხვი')
// if(number > 0){
//     console.log('დადებითია');
// }else if  (number < 0){
//     console.log("უარყოფითია");

// }else{
//     console.log('ნული');
// }
// 4.დაწერეთ კოდი, რომელიც იღებს წელს და ამოწმებს, არის თუ არა ის ნაკიანი. ნაკიანი წელია, რომელიც იყოფა 4-ზე, მაგრამ არ იყოფა 100-ზე, გარდა იმ შემთხვევისა, როცა ის იყოფა 400-ზე. თუ წელი ნაკიანია, დაბეჭდეთ "წელი ნაკიანია", წინააღმდეგ შემთხვევაში - "წელი არ არის ნაკიანი".
// let year = 2020
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ){
//     console.log('ნაკიანია');

// }else{
//     console.log('არ არის ნაკიანი');
// }



// 5.დაწერეთ კოდი, რომელიც იღებს პირის ასაკს და დაბეჭდავს შესაბამის კატეგორიას:
// •	0-12 წელი: "ბავშვი"
// •	13-17 წელი: "მოზარდი"
// •	18-64 წელი: "ზრდასრული"
// •	65 და მეტი: "ხანდაზმული"


// 6.დაწერეთ კოდი, რომელიც იღებს რიცხვს და დაბეჭდავს შეტყობინებას, თუ რამდენი ციფრი აქვს მას. მაგალითად, თუ რიცხვი არის 123, დაბეჭდეთ "რიცხვს აქვს 3 ციფრი".

// let number = 12345;
// let result = number.toString().length;
// console.log(result);


// 7.დაწერეთ კოდი, რომელიც იღებს კვირის დღის ნომერს (1-დან 7-მდე, სადაც 1 შეესაბამება ორშაბათს და 7 - კვირას) და დაბეჭდავს შეტყობინებას, არის თუ არა ეს დღე სამუშაო დღე თუ დასვენების დღე.

// let day = 9;
// if(day % 7 === 0 || day % 7 === 6){
//     console.log("უქმე");
// }else{
//     console.log('სამუშაო დღე');
// }

// if(day >= 1 && day <=5 ){
//     console.log("work");
// }else if (day === 6 || day === 7){
//     console.log(" not work");

// }else{
//     console.log("it is not right number ");
// }


//  ახალი მასალა

// let age = 19;
// if( age > 18 ){
//     console.log(" wine");
// }else{
//     console.log("water");
// }

// Ternary 

//    let result = age > 18 ? 'wine' : 'water'
//    console.log(result);
// let result = 'wine'
// let number =[1,2,3,4,5]
// for(let i=0; i <=4; i++){
//   console.log(number[i]);

// }

// ES 6 
// for( let item of number ){
//     console.log(item);
// }
// function Declaration

// function sum(a,b){
//     return a+b
// }

// let result = sum(3234,5456);
// let result2 = sum(234467,6789);
// console.log(result2);


// function calcDay(day){
   
//    if(day % 7 === 0 || day % 7 === 6){
//     console.log("უქმე");
//    }else{
//     console.log('სამუშაო დღე');
// }
// }

// calcDay(5)
// calcDay(6)

// მე-7 ლექცია
//1. დაწერე ფუნქცია , რომელიც დააჯამებს მხოლოდ დადებით რიცხვებს
// 2.დაწერეთ ფუნქცია რომელიც დააბრუნებს სახელს და გვარს ობიექტიდან
// const person = {
    //     firstName: "David",
    //     lastName: "Johnson",
    //     ciry:"Batumi"
    //   };
// 3 დაწერეთ ფუნქცია რომელიც დააბრუნებს მაქსიმალურ რიცხვს
// 4ფუნქცია უნდა მიიღებდეს ორი პარამეტრი (start და end), რომლებიც არის რიცხვები.
// ფუნქცია უნდა დააბრუნოს მასივი ყველა რიცხვისგან, რომლებიც შესული რიცხვების შორის იმყოფებიან (მათ შორის).
// 5
// დაწერეთ ფუნქცია, რომელიც მიიღებს რამდენიმე სახელს და მათ ყველას მიესალმება
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// .


// 1.function sum(...numbers){
//     let result=0
//     for(let x of numbers){
//         if(x > 0){
//             result =result + x
//         }
//     }
//     return result

// }

// console.log(sum(2,3,4,5-7,-5));
// 2.
// const person = {
//     firstName: "David",
//     lastName: "Johnson"
//   };

//   function getFullName(person) {
//     return `${person.firstName} ${person.lastName}`;
//   }
  
//   // ფუნქციის გამოძახება
//   console.log(getFullName(person)); 

// 3
// function findMax(...numbers) {
//     let max = 0; // დაწყება პირველი რიცხვით

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }

//     return max;
// }
// console.log(findMax(3,5,6,7,888,99,89));

// 


// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // ✅ [1, 4, 9, 16, 25]

// const numbers = [10, 25, 30, 45, 50];

// const greaterThan20 = numbers.filter(num => num > 20);
// console.log(greaterThan20); // ✅ [25, 30, 45, 50]

// const numbers = [2, 4, 6, 8];

// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // ✅ true (ყველა რიცხვი ლუწია)

// const numbers = [40, 100, 1, 5, 25, 10];

// // ციფრული სორტირება
// const sortedNumbers = numbers.sort((a, b) => a - b);
// console.log(sortedNumbers); // ✅ [1, 5, 10, 25, 40, 100]

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); 


// function range(start, end) {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//       result.push(i);  // ყველა რიცხვი შეიყრება მასივში
//     }
//     return result;
//   }
  
//   // მაგალითები:
//   console.log(range(5, 10)); 
 
// 5
// function greetPeople(...names) {
//     names.forEach(name => console.log(`Hello, ${name}!`));
//   }
  
//   greetPeople("Ana", "David", "Giorgi", "Luka"); 

