import { cocktails } from "./data.js";

const cocktailsWrapper = document.querySelector('.cocktails')
const choice = document.querySelectorAll('.choice')
const yes = document.getElementById('yes')
const no = document.getElementById('no')
const input = document.querySelector('#input')
const btn = document.getElementById('btn')


yes.addEventListener('click', ()=> {
    btn.classList.remove('d-none')
    btn.classList.add('d-block')
    input.focus()
})

no.addEventListener('click', ()=> {
    btn.classList.remove('d-block')
    btn.classList.add('d-none')
    input.focus()
})

btn.addEventListener('click', ()=>{
    cocktailsWrapper.innerHTML = ''
    printElements(findObject(cocktails, input.value))
    input.value = null
})

input.addEventListener('keydown', (evt)=>{
    if(evt.code === 'Enter'){
        cocktailsWrapper.innerHTML = ''
        printElements(findObject(cocktails, input.value))
        input.value = null
    }
})

printElements(cocktails)

choice.forEach(el => {
    el.addEventListener('click', (event)=>{
        cocktailsWrapper.innerHTML = ''
        printElements(filterObjects(cocktails, event.target.innerText))
    })
})

function findObject(arr, name){
     return arr.filter(obj => obj.strDrink === name)
 }

function filterObjects(arr, category){
   if(category === 'All'){
    return cocktails
   }
   else return arr.filter(obj => obj.strCategory === category)
}

function printElements(object){
    for( let el of object){
        cocktailsWrapper.innerHTML += createElement(el)
    }
}

function createElement(item){
    let element = `
    <div id="${item.idDrink}" class="item">
    <div class="img-wrapper">
        <img src="${item.strDrinkThumb}" alt="">
        <p class="cocktailName">${item.strDrink}</p>
     </div>
</div>`
    return element
}