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





let notebook = {
    name: "Laptop",
    brand: "Dell",
    model: "XPS 13",
    price: 1200,
    inStock: true,
    specifications: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "13.3 inches, Full HD"
    },
    reviews: ["Excellent laptop!" ,"Good laptop"]
   
};
// notebook.specifications.ram = '20 GB';
notebook.specifications.ram = '20 GB';
console.log(`კომპიუტერის რემი არის ${notebook.specifications.ram}`);




  


 

 










