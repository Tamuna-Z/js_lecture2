
// 19  თებერვალის ლექცია


// 1.საფინალო პროექტის შეფასების რუბრიკის განხილვა
// 2.HTML CSS კითხვები
// 3.landing page

// 4.დავალების განხილვა
// 4.1.შექმენით ობიექტი, რომელიც ინახავს მაისურის მონაცემებს:
 
// აღწერა (description)
// ფერი (color)
// ზომა (size)
// ფასი (price)
// რაოდენობა (quantity)
// შემდეგ შექმენით ფუნქცია, რომელიც მიიღებს ამ ობიექტს და მომხმარებლის მიერ შეძენილი მაისურების რაოდენობას.
 
// თუ მომხმარებელი ითხოვს საწყობში არსებულზე მეტ რაოდენობას, უნდა დაბრუნდეს ტექსტი: "მარაგში საკმარისი რაოდენობა არ არის!"
// წინააღმდეგ შემთხვევაში, ფუნქციამ უნდა დააბრუნოს მაისურების ჯამური ფასი.
 
//  const tshirt = {
//     description: "მაღალი ხარისხის ბამბის მაისური",
//     color: "შავი",
//     size: "L",
//     price: 25, // ერთეული ფასი
//     quantity: 10 // საწყობში არსებული რაოდენობა
// };

// // ფუნქცია,ამოწმებს მარაგს და ანგარიშობს ჯამურ ფასს
// function shirtBuy(tshirt,quantity){
//     if(quantity > tshirt.quantity){
//         return "მარაგში საკმარისი რაოდენობა არ არის!"
//     }else{
//         let totalAmount = tshirt.price * quantity

//         return `გადასახდელი თანხა არის ${totalAmount}ლ`

//     }
// }

// let result= shirtBuy(tshirt,12)
// console.log(result)

// 4.2.დავალების პირობა:
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
  //ფუნქციის scope - მარაგის შემოწმება, შეკვეთის გამოთვლა
//   function order(quantity){

//     let totalPrice = product.price * quantity
//     if(quantity > 3){
//         let discount = totalPrice * 0.1
//         totalPrice = totalPrice - discount
//         console.log(discount);
//     }
//     return ` გადასახდელი თანხა ${totalPrice}`
//   }
//   let number1 = Number(prompt("დაწერეთ რაოდენობა"))
//    let result1= order(number1)
//    console.log(result1);
 
    // ბლოკის scope - ფასდაკლების ლოგიკა
 
 
   

//5. DOM - Document Object Model (WEB API -ის ნაწილი)
// API -Application Programming Interface-API-ის მეშვეობით პროგრამული მოდულები ან სისტემები ერთმანეთთან "ლაპარაკობენ" და ინფორმაციის გაცვლას ახდენენ.

let divContainer = document.getElementById('container')
let divContainerClass =document.getElementsByClassName('container')
let containerDiv = document.getElementsByTagName('div')


let divContainer1 = document.querySelector('.text')
let divContainer12 = document.querySelectorAll('.text').forEach(function(item){
    item.textContent = " farewell"
})



divContainer.textContent ='Goodbye'

// 5.1.Element Selection Methods - როგორ მივწვდეთ ელემენტებს HTML -ში

// 5.2.Element Manipulation Methods- კლასის , ატრიბუტის , კონტენტის მინიჭება ,გადაწერა,წაშლა,ფერის დამატება

// 5.3. Element Creation and Insertion Methods- ელემენტის შექმნა, ჩასმა

// 5.4 . Event Handling (ივენტების დამუშავება)
// •	addEventListener(event, function)

// 6. body -ს მიანიჭეთ ფერი , შემოიტანეთ ღილაკი, მასზე დაკლიკებით შეუცვალეთ ფერი, ხოლო შემდეგ გამოიყენეთ toggle .ღილაკზე დაკლიკებით ვამატებთ კლასის სახელს.
// 7. შექმენით ჰედერი, შემოიტანეთ ლოგო, ნავიგაცია და ბურგერ მენიუს აიქონი,ნოუთბუქის რეზოლუციაზე ბურგერ მენიუ არ უნდა ჩანდეს ,ტაბლეტის რეზოლუციაზე უნდა გამოჩნდეს ბურგერ მენიუს აიქონი და  მასზე დაკლიკებისას კი ნავიგაცია.




    
    
