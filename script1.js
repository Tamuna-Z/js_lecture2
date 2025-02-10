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


// 2.დაწერეთ ფუნქცია რომელიც დააბრუნებს სახელს და გვარს ობიექტიდან
// const person = {
    //     firstName: "David",
    //     lastName: "Johnson",
    //     ciry:"Batumi"
    //   };
// 3 დაწერეთ ფუნქცია რომელიც დააბრუნებს მაქსიმალურ რიცხვს
// 4ფუნქცია უნდა მიიღებდეს ორი პარამეტრი (start და end), რომლებიც არის რიცხვები.
// ფუნქციამ უნდა დააბრუნოს მასივი სადაც იქნება ამ რიცხვებს შორის არსებული ყველა რიცხვი მაგ ( თუ გადავცემ 3 და 9 , დააბრუნებს 3,4,5,6,7,8,9 -ს  )
// 5
// დაწერეთ ფუნქცია, რომელიც მიიღებს რამდენიმე სახელს და მათ ყველას მიესალმება.

