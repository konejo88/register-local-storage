const inputOne=document.querySelector('.one')
const inputTwo=document.querySelector('.two')
const inputThree=document.querySelector('.three')
const textar=document.querySelector('.text')
const button=document.querySelector('.but')
button.addEventListener('click',getItem)
function getItem () {
    const value=inputOne.value
    const valuetwo=inputTwo.value
    const valuethree=inputThree.value
    const valuetext=textar.value
    // console.log(value)

    localStorage.setItem('name',value)
    localStorage.setItem('mail',valuetwo)
    localStorage.setItem('pass',valuethree)
    localStorage.setItem('message',valuetext)
    // localStorage.clear()

    const conteiner=[]
    conteiner.push(value,valuetwo,valuethree,valuetext)
    console.log(conteiner);

const conteiner1=[]
conteiner1.push({
    test:value,
    test1:valuetwo,
    test2:valuethree,
    test3:valuetext
})    
// console.log(conteiner1);


let conteiner2=JSON.stringify(conteiner1)
console.log(conteiner2);
localStorage.setItem('key',conteiner2)


const data=localStorage.getItem('key')
const array=JSON.parse(data)
console.log(array);


}

