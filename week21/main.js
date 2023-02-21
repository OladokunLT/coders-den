let tasks = document.querySelectorAll('li')
let wrapper = document.querySelector('.wrapper')
let title = document.querySelector('h1')
let linkText = document.querySelector('h2').textContent
let colorNames = ['blue', 'yellow', 'pink', 'tomato', 'green', 'purple']

// create aside element
let createAside = document.createElement('aside');
document.body.appendChild(createAside)
// document.querySelector('aside').textContent = 'Time place holder'

wrapper.style.width = '80%'
wrapper.style.margin = '20px auto' 

title.style.textAlign = 'center'
title.style.fontSize = '20px'

// Link header
document.querySelector('h2').innerHTML= `<a> ${linkText} </a>`
let anchor = document.querySelector('a')
let heading2 = document.querySelector('h2')
anchor.setAttribute('href', '#')
heading2.style.textAlign = 'center'
heading2.style.fontSize = '14px'


tasks.forEach((task, index) => {
  // console.log(index, typeof task.textContent)
  task.className = 'todos';
  task.style.padding = '5px'
  task.style.marginBottom = '2px'
  task.style.listStyleType = 'none'
  
  if(task.textContent.search(/done/gi) !== -1) {
    task.classList.add('done') 
    task.style.background = '#00ff0050';
    // console.log('first')
  }  
  
  if(task.textContent.search(/ongoing/gi) !== -1) {
    task.classList.add('ongoing')
    task.style.background= 'yellow'
  }  
  // console.log('second')
  if(task.textContent.search(/coming/gi) !== -1){
    task.classList.add('coming')
    task.style.backgroundColor = 'rgba(255,0,0,0.5)'
  }    
})  

// Time programming
function digitalClock (){
    let now = new Date();
  // console.log(now)
  let month = now.getMonth() +1
  let date = now.getDate()
  let year = now.getFullYear()
  let hr = now.getHours()
  let min = now.getMinutes()
  let sec = now.getSeconds()
  
  if (hr < 10) {
  hr = '0' + hr
  }
  if (min < 10) {
    min = '0' + min
  }
  if (sec < 10) {
    sec = '0' + sec
  }
  if (date < 10) {
    date = '0' + date
  }
//   console.log(month, date, hr, min, sec)   
let counter =   `${month}-${date}-${year} ${hr}:${min}:${sec}`
   return counter
}

let randomColor = (arr) => {
    let randomColorIndex = Math.floor(Math.random() * arr.length) 
    return arr[randomColorIndex]
}
   
document.querySelector('aside').style.display= 'inline'
// document.querySelector('aside').style.float= 'center'
document.querySelector('aside').style.padding= '15px'
document.querySelector('aside').style.textAlign= 'center'

setInterval(()=>{
    document.querySelector('aside').textContent = digitalClock()
    document.querySelector('aside').style.backgroundColor = randomColor(colorNames)
    document.querySelector('span').style.backgroundColor= randomColor(colorNames)
},1000)


