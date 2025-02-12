// მე 7 ლექცია

let array = [2,4,6,8,34,23,45,66,88];

// for( let i=0; i < array.length; i++){
//   if(array[i] % 2 == 1){
//     console.log(array[i]);
    
//   }

// for(let item of array ){
//    if(item  % 2 == 0){
//     console.log(item);

//    }

// }

// 10 .02


// function declaration hoisted

// greet("Teona");

// function greet(fullname){
//     console.log(`hello ${fullname}`);

// }






// function greet(fullname){
//    return `hello ${fullname}`

// }

// let result = greet("Teona");
// console.log(result);


// expression function     non hoisted



// const greet = function(fullname){
//      return `hello ${fullname}`

// }

// let result = greet("Teona");
// console.log(result);


// Arrow function

// const greet = (fullname) => `hello ${fullname}`
// let result = greet('Mari')
// console.log(result);


//1. დაწერე ფუნქცია , რომელიც დააჯამებს მხოლოდ დადებით რიცხვებს

// function sum(...num){
//     let result =0;
//     for(let item of num){
//         if(item > 0){
//             result = result + item

//         }
//     }
//    return result
// }

// let sumResult= sum(23,33,4,54,6,7,87,9,-2,-3,-5)
// let sumResult2 = sum(2345,678,789,-2,-5)
// console.log(sumResult2);


// function lengthCount(...num){
//     return num.length
     
// }

// let sumResult= lengthCount(23,33,4,6,7,4,54,6,7,87,9,-2,-3,-5)

// console.log(sumResult);

// function sum(...num){
//     let result =[];
//     for(let item of num){
//         if(item > 0){
//             result = result * item

//         }
//     }
//    return result
// }

// let sumResult= sum(23,33,4,54,6,7,87,9,-2,-3,-5)
// let sumResult2 = sum(2345,678,789,-2,-5)
// console.log(sumResult2);

// let array3 =[2,3,4,5]
// let resultNum = array3.map(num =>num * 8)
// console.log(resultNum);

// 12 თებერვალი

// 3 დაწერეთ ფუნქცია რომელიც დააბრუნებს მაქსიმალურ რიცხვს
// function maxNumber(...num){
//     let max = 0;
//     for(item of num){
//         if(item > max){
//             max = item
//         }
//     }
//     return max
// }
// let result= maxNumber(3,45,67,89,2,567,2,34,999,5)
// console.log(result);

// 4ფუნქცია უნდა მიიღებდეს ორი პარამეტრი (start და end), რომლებიც არის რიცხვები.
// ფუნქციამ უნდა დააბრუნოს მასივი სადაც იქნება ამ რიცხვებს შორის არსებული ყველა რიცხვი მაგ ( თუ გადავცემ 3 და 9 , დააბრუნებს 3,4,5,6,7,8,9 -ს  )

// function range(start, end){
//     let rangeArray = []
//     for(let i=start; i<=end; i++){
//         rangeArray.push(i)
   
//     }
//     return rangeArray

// }
// let result= range(50,60)
// console.log(result);



// 5
// დაწერეთ ფუნქცია, რომელიც მიიღებს რამდენიმე სახელს და მათ ყველას მიესალმება.

// function greet(...fullname){
//     return `გამარჯობა ${fullname}`

// }
// let result = greet("Teo", "ana", 'gio','rati');
// console.log(result);
// დავასრულოთ





//1) მასივის მეთოდები: map, filter, sort, reduce,forEach,every,some
// let numbersArray = [2,4,6,8,9,7]
// let result = numbersArray.filter(num => num % 2 === 1)
// console.log(result);

// let result = numbersArray.sort((a,b) => a-b)
// let result = numbersArray.every(num => num % 2 === 0)
// let result1 = numbersArray.some(num => num % 2 === 0)
// let result = numbersArray.forEach(item => console.log(item))
// let result = numbersArray.reduce((ac, current)=> ac + current,0)
// console.log(result);


// 2) Global, function/local and block scopes
// let message = 'hello'
// console.log(message);

// function greet (){

//     if(true){
//          const message = 'hello'
       
//     }   
// }
// greet()
// console.log(message)



// 3) ობიექტის არგუმენტად მიწოდების პრაქტიკულ მაგალითს
//4)  function default parameter 







// 1.დაწერეთ ფუნქცია რომელიც დააბრუნებს სახელს და გვარს ობიექტიდან
// const person = {
//         firstName: "David",
//         lastName: "Johnson",
//         ciry:"Batumi"
//       };

//     function fullName(person1){
//         return `My fullName is ${person1.firstName} ${person1.lastName}`

//     }
//     let result =fullName(person)
//     console.log(result);




// 2
// შექმენით ობიექტი, რომელიც ინახავს მაისურის მონაცემებს:

// აღწერა (description)
// ფერი (color)
// ზომა (size)
// ფასი (price)
// რაოდენობა (quantity)
// შემდეგ შექმენით ფუნქცია, რომელიც მიიღებს ამ ობიექტს და მომხმარებლის მიერ შეძენილი მაისურების რაოდენობას.

// თუ მომხმარებელი ითხოვს საწყობში არსებულზე მეტ რაოდენობას, უნდა დაბრუნდეს ტექსტი: "მარაგში საკმარისი რაოდენობა არ არის!"
// წინააღმდეგ შემთხვევაში, ფუნქციამ უნდა დააბრუნოს მაისურების ჯამური ფასი.


// 3.დავალების პირობა:
//  შექმენით მაღაზიის ობიექტი (გლობალური scope-ში), რომელიც შეიცავს პროდუქტის მონაცემებს (სახელი, ფასი, რაოდენობა საწყობში).
//  შექმენით ფუნქცია (function scope), რომელიც მიიღებს მომხმარებლის შეკვეთას და დააბრუნებს ჯამურ ღირებულებას.
//  გამოიყენეთ ბლოკის scope if პირობაში, რათა გამოიანგარიშოთ ფასდაკლება შეკვეთაზე (მაგალითად, 3-ზე მეტი პროდუქტის შეძენისას 10% ფასდაკლება).
// დაბეჭდეთ საბოლოო თანხა ეკრანზე.

//  გლობალური scope - პროდუქტის მონაცემები
// const product = {
//     name: "მაისური",
//     price: 20,
//     stock: 10
// };


    //ფუნქციის scope - შეკვეთის გამოთვლა
   

    // ბლოკის scope - ფასდაკლების ლოგიკა
  

    // მომხმარებლის შეკვეთა

