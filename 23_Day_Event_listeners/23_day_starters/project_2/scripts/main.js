const mainEl = document.getElementById('main')
const divEl = document.getElementsByTagName('div')
const keyNameEl = document.getElementById('keyName')
const keyCodeEl = document.getElementById('keyCode')

document.body.addEventListener('keydown', (e) => {
    keyCodeEl.textContent = e.keyCode
    keyNameEl.textContent = `${e.key}`
})


// styles

// document.body.style.background = 'green';
document.body.style.display = 'grid';
document.body.style.placeItems = 'center';
document.body.style.height = '100vh';
document.body.style.fontFamily = 'sans-serif';
document.body.style.fontFamily = 'sans-serif';
document.body.style.fontSize = "40px"
// document.body.style.textDecoration = "strong"
document.body.style.fontWeight = "700"

for (const div of divEl) {
    // div.style.background ='blue'
    div.style.marginBlock = '20px'
    div.style.padding = '20px'
    div.style.textAlign = 'center'
    div.style.boxShadow = '1px 1px 5px 1px rgba(0,0,0,0.5)'    
}

keyNameEl.style.color = 'rgb(0,220, 0)'
keyCodeEl.style.color = 'rgb(0,220, 0)'

// mainEl.style.background = '';
// mainEl.style.display = '';
// mainEl.style.placeItems = '';

