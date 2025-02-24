
// 24 თებერვლის ლექცია 
 
// 1. script.js ფაილის დაკავშირების მეთოდები

// 2.გლობალური ობიექტი -- window

// console.log(window);


// 3. window -ს მეთოდები ( alert, confirm, propmt)
// 4. window -ს თვისებები(document, location,console, navigator,history???)

// 5.DOM - Document Object Model (WEB API -ის ნაწილი)
// API -Application Programming Interface-API-ის მეშვეობით პროგრამული მოდულები ან სისტემები ერთმანეთთან "ლაპარაკობენ" და ინფორმაციის გაცვლას ახდენენ.

// 5.1.Element Selection Methods - როგორ მივწვდეთ ელემენტებს HTML -ში

// let divContainer = document.getElementById('container')
// divContainer.textContent ='welcome1'
// let divContainerClass =document.getElementsByClassName('container')
// let containerDiv = document.getElementsByTagName('div')

// let divContainer1 = document.querySelector('.text')
// let divContainer12 = document.querySelectorAll('.text').forEach(function(item){
//     item.textContent = " farewell"
// })

// 5.2.Element Manipulation Methods- კლასის , ატრიბუტის , კონტენტის მინიჭება ,გადაწერა,წაშლა,ფერის დამატება

// let text =document.getElementById('text')
// text.innerHTML='<p>hello text</p>'
// text.innerText = 'Hello innerText'
// text.setAttribute('class','extraClass')
// text.classList.add('secondClass')
// text.style.color = 'red'

// 5.3. Element Creation and Insertion Methods- ელემენტის შექმნა, ჩასმა

// let ulElement = document.createElement('ul')

// let liElement = document.createElement('li')

// ulElement.appendChild(liElement)
// text.appendChild(ulElement)



// 6 რა არის Event
// let button = document.getElementById('button')
// let bodyId = document.getElementById('color')
// button.addEventListener('click',function(){
//     bodyId.classList.toggle('active')
// })


// 6.1. Event Handling (ივენთების დამუშავება)('click', 'focus', 'keydown')

// 7. body -ს მიანიჭეთ ფერი , შემოიტანეთ ღილაკი, მასზე დაკლიკებით შეუცვალეთ ფერი, ხოლო შემდეგ გამოიყენეთ toggle .ღილაკზე დაკლიკებით ვამატებთ კლასის სახელს.

// 8. შექმენით ჰედერი, შემოიტანეთ ლოგო, ნავიგაცია და ბურგერ მენიუს აიქონი,ნოუთბუქის რეზოლუციაზე ბურგერ მენიუ არ უნდა ჩანდეს ,ტაბლეტის რეზოლუციაზე უნდა გამოჩნდეს ბურგერ მენიუს აიქონი და  მასზე დაკლიკებისას კი ნავიგაცია.

// ვასელექთებ ბურგერაიქონს,ნავიგაციას
let navigation = document.getElementById('navigation')
let burger = document.getElementById('burger')
// აიქონზე დაკლიკებისას 
burger.addEventListener('click',function(){
    if(navigation.classList.contains('activeNavigation')){
        navigation.classList.remove('activeNavigation')
        burger.innerHTML =' <i class="fa-solid fa-bars"></i>'

    }else{
        navigation.classList.add('activeNavigation')
        burger.innerHTML= '<i class="fas fa-times"></i>'

    }
})
// თუ ნავიგაციის კლასი არის  activeNavigation მაშინ მოაშორეთ ეს კლასის სახელი და ბურგერაიქონს innerHTML ით დაუმატეთ fa-bars, წინააღმდეგ შემთხვევაში ნავიგაციას დაუმატეთ კლასის სახელი activeNavigation და burgerIcon innerHtLM fa-times



