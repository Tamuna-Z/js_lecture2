


// 2.accordion  მეორე გზა for ით
// let accordion = document.getElementsByClassName('accordion-container')

// for(let i=0; i< accordion.length; i++){
//     accordion[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// }

// ლექციის შემდეგ დაწერილი კოდი
let accordion = document.querySelectorAll('.accordion-container');


accordion.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});



// ეს ლექციაზე დაწერილი კოდია 


// accordion.forEach(item => {
//     item.addEventListener('click', function() {
//         this.classList.toggle('active');
//     });
// });



// 3.slider

// სხვა სურათის ლინკები შემოვიტანე
let data = [
    {
        id: 1,
        title:'dried fruit',
        imageUrl: 'https://images.bolt.eu/store/2022/2022-07-20/289e90b8-fa1c-4fb9-b90a-6758a016d650.jpeg',
       
    },
    {
        id: 2,
        title:'sweetpaste',
        imageUrl: 'https://thumbs.dreamstime.com/z/traditional-georgian-sweets-called-churchkhela-churchela-candle-shaped-grape-juice-candy-nuts-inside-traditional-georgian-161801425.jpg',
        
    },
    {
        id: 3,
        title:'churchkhela',
        imageUrl: 'https://images.bolt.eu/store/2022/2022-07-20/65c4b4ec-6829-4d24-8c98-9171219e8ab8.jpeg',
        
    }
    
   
];
let sliderContainer = document.getElementById('slider')
let arrowLeft =document.getElementById('arrow-left')
let arrowRight =document.getElementById('arrow-right')

let sliderIndex = 0



function createImg (item){
    sliderContainer.style.backgroundImage = `url(${item.imageUrl})`
    sliderContainer.style.backgroundRepeat= 'no-repeat'
    sliderContainer.style.backgroundSize= 'cover'
 }
 
function createH2tag(item){
    let h2tag = document.createElement('h2')
    h2tag.innerText =item.title
    h2tag.classList.add('slider-title')
    return h2tag

}

function setSlider(){
    createImg(data[sliderIndex])
    let title= createH2tag(data[sliderIndex])

    sliderContainer.appendChild(title)

}


// function arrowLeft(){
//     if(sliderIndex === 0){
//         sliderIndex = data.length-1
//     }else{
//         sliderIndex --
//     }
//     setSlider()


// }


// function arrowRight(){
//     if(sliderIndex === data.length-1){
//         sliderIndex = 0
//     }else{
//         sliderIndex ++
//     }
//     setSlider()
// }



setSlider()















