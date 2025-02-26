// 3. HTML ელემენტზე და js -ში  onClick() ის გამოყენება

// let input =document.getElementById('inputEl')
// let button = document.getElementById('change')
// let ul = document.getElementById('ulEl')
// button.addEventListener('click' , function(){
//     let value = input.value;
    
//     let li = document.createElement('li')
//     li.textContent = value
//     let deleteButton = document.createElement('button')
//     deleteButton.textContent = 'delete'
//     deleteButton.addEventListener('click',function(){
//         li.remove()

//     })
//     li.appendChild(deleteButton)
  
//     ul.appendChild(li)
//     input.value = " "
// })







    
    
// let burger =document.getElementById('burger')
// let navigation = document.getElementById('navigation')
// burger.addEventListener('click', function(){
//     if(navigation.classList.contains('activeNavigation')){
//         navigation.classList.remove('activeNavigation')
//         burger.innerHTML = '<i class="fa-solid fa-bars"></i>'

//     }else{
//          navigation.classList.add('activeNavigation')
//         burger.innerHTML = '<i class="fas fa-times"></i>'

//     }
// })





// let site = document.getElementById('site')
// site.addEventListener('click', function(event){
//     event.preventDefault()
//     console.log('google is clicked');
    
// })
// 2. preventDefault() გამოყენება ,როდესაც <a></a> -ს ვაკლიკებ, default action რომ არ მოხდეს.