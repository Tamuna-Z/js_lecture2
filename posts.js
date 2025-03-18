// 14 მარტი
//  პოსტების წამოღება სერვერიდან

//1. დავასელექთოთ ელემენტები
let mainWrapperPost = document.getElementById('post-block')
let overLayContent = document.getElementById('overlay')
let closeOverLay = document.getElementById('close')
let content = document.getElementById('content')
// https://jsonplaceholder.typicode.com/posts

// 2.შევქმნათ ფუნქცია, სადაც გამოვიძახებთ new XMLHttpRequest() -ს,გადავიყვანთ მონაცემებს ჯავასკრიპტის ობიექტში,გადავუვლით forEach-ით და შევქმნით პოსტებს (გამოვიძახებთ createPost(element)-ს )
function ajax(){
    let request = new XMLHttpRequest()
    request.open('GET','https://jsonplaceholder.typicode.com/posts')
    request.addEventListener('load', function(){
        let data = JSON.parse(request.responseText);
        data.forEach(element => {
            createPost(element)
            
        });
    })
    request.send()
}

ajax()
//3. შევქმნათ createPost(item) ფუნქცია,(div, მივანიჭოთ კლასი, data-id ატრიბუტი h2, h3 მივანიჭოთ ტექსტი, ჩავაეფენდოთ დივში, დივს კლიკის დროს მივანიჭოთ data-id და გამოვიძახოთ openOverLay(id) , mainWraper ში ჩავაეფენდოთ divWraper  )
function createPost(item){
   

    let divWrapper = document.createElement('div')
    divWrapper.classList.add('posts')
    divWrapper.setAttribute('data-id',item.id)
    
    let h2Tag = document.createElement('h2')
    h2Tag.innerText = item.id

    let h3Tag = document.createElement('h3')
    h3Tag.innerText = item.title

    divWrapper.appendChild(h2Tag)
    divWrapper.appendChild(h3Tag)
    divWrapper.addEventListener('click',function(){
        let id = divWrapper.getAttribute('data-id')
        console.log(id);
    })



    mainWrapperPost.appendChild(divWrapper)


}




