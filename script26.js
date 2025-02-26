

// 24* თებერვლის ლექცია 
 
// 1. script.js ფაილის დაკავშირების მეთოდები defer ატრიბუტი

// 2.გლობალური ობიექტი -- window

// 3. window -ს მეთოდები ( alert, confirm, propmt)
// 4. window -ს თვისებები(document, location,console, navigator,history???)

// 5.DOM - Document Object Model (WEB API -ის ნაწილი)
// API -Application Programming Interface-API-ის მეშვეობით პროგრამული მოდულები ან სისტემები ერთმანეთთან "ლაპარაკობენ" და ინფორმაციის გაცვლას ახდენენ.

// 5.1.Element Selection Methods - როგორ მივწვდეთ ელემენტებს HTML -ში

// 5.2.Element Manipulation Methods- კლასის , ატრიბუტის , კონტენტის მინიჭება ,გადაწერა,წაშლა,ფერის დამატება

// 5.3. Element Creation and Insertion Methods- ელემენტის შექმნა, ჩასმა



// 26 თებერვალი

// 1 რა არის Event
// 1.1 event.target , which property
// let button = document.getElementById('button')
// button.addEventListener('click',function(event){
//     console.log(event);
    // })


// 1.2 Event Handling (ივენთების დამუშავება)('click', 'focus', 'keydown')

//1.3 input- ში  ჩაწერის დროს შეუცვალეთ უკანაფონის ფერი 
// let input = document.getElementById('input')
// input.addEventListener('keydown',function(){
//     input.style.backgroundColor = 'pink'
// })

// 1.4. input ში ჩაწერილი სიტყვა რომ დაემატოს სიაში <ul> ში

// ვასელექთებ button, input, ul -ს
// button ზე დაკლიკებისას ..........
// 1.ვინახავ input ის მნიშვნელობას value -ში
// ვქმნი li -s, ვანიჭებ textContent -ს,(ვქმნი delete button -ს,ვანიჭებ კონტენტს,,delete ზე დაკლიკებისას ვშლი remove()-ით.
//  li ში ვაეფენდებ delete Button ს)
//  ul -ში ვაეფენდებ li -ს
//  input value -ს ვასუფთავებ



// 2.  რა არის this, რა განსხვავებაა window და this შორის 
// console.log(this);

// function showThis() {
//     console.log(this);
//   }
//   showThis();


// const userName = {
//     name: "David",
//     greet: function() {
//       console.log(this.name);
//     }
//   };
//   userName.greet();

// 3. როგორ წამოვიღოთ სერვერიდან ინფორმაცია, როგორ გავაკეთოთ ასინქრონული ოპერაცია
//3.1 როგორ მუშაობს AJAX(Asynchronous JavaScript and XML) 
// 3.2სინქრონული და ასინქრონული კოდი
// console.log(" დავალება 1");
// console.log(" დავალება 2");
// console.log(" დავალება 3");


// console.log("დავალება 1");

// setTimeout(() => {
//   console.log("დავალება 2 ");
// }, 5000);

// console.log("დავალება 3");

// როგორ განვახორციელოთ AJAX Request ?
// 3.3 XMLHttpRequest()
function getUsers(){
    let request = new XMLHttpRequest()
    request.addEventListener('load',render)
    request.addEventListener('error',errorRender)

    request.open('GET','https://reqres.in/api/users?page=1')
    request.send()

}

function render(){
    let response=this.response
    let responseData = JSON.parse(response)
    console.log(responseData);
    let container = document.getElementById('container')
    let ul = document.createElement('ul')
    responseData.data.forEach(function(item){
        let li = document.createElement('li')
        li.textContent =item.email
        let image = document.createElement('img')
        image.src = item.avatar
        ul.appendChild(li)
        ul.appendChild(image)
        container.appendChild(ul)

    })

  

    
   

    
}

function errorRender(){
    let container = document.getElementById('container')
    let p = document.createElement('p')
    p.textContent = 'server error'
    container.appendChild(p)

}

getUsers()


// 3.4 fetch()

























