const api = "http://random-word-api.herokuapp.com/word"
const form = document.querySelector('form')
const score = document.querySelector('.score')
const words = document.querySelector('.random-word')
const loader = document.querySelector('.loader')
const input = document.querySelector('input')
const container = document.querySelector('.container')

let randomWord

let counter = 0

word(api)
function word(api) {
    fetch(api)
        .then(e => e.json())
        .then(getData)
    getData

    function getData(data) {
        loader.textContent = " "
        words.textContent = data[0]
        randomWord = data[0]
        // console.log(data[0]);
    }
}


document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) { e.preventDefault(); return false; }
})

form.addEventListener('input', () => {
    if (input.value.toLowerCase() == randomWord) {
        // console.log(1);
        word(api)
        form.reset()
        counter++
        score.textContent = `Your score:${counter}`
        let audio = new Audio('./sounds/correct.mp3')
        if(counter%10 !== 0){
            audio.play()
        }
        // randomBackgound()
        setColor()
        stages()
    }
})


// ----------------------------------------------random color start----------------------------------------
// function randomBackgound(){
    let letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    const body = document.querySelector('body') 
    function getColors(){
        let color = '#'
        for(let i = 0; i<6; i++){
            let random = Math.floor(Math.random() * letters.length)
            color += letters[random]
        }
        return color;
    }
    
    function setColor(){
        let color1 = getColors()
        let color2 = getColors()
        let getDeg = Math.floor(Math.random() * 360)
        // text.textContent = `linear-gradient(${getDeg}deg, ${color1} , ${color2})`
        container.style.background = `linear-gradient(${getDeg}deg, ${color1}, ${color2})`
    }
    
    // setColor()
    
    // }
// ----------------------------------------------random color end----------------------------------------

    
// ----------------------------------------------stage----------------------------------------

const st1 = document.querySelector('.images')


let audioWinner = new Audio('./sounds/winner.wav')
function stages(){
    if(counter >= 40){
        st1.innerHTML = `
        <img class="s1 stage" src="img/1.png" alt="">
        `
        if(counter%10 == 0){
            audioWinner.play()
        }
    }
    else if(counter >= 30){
        st1.innerHTML = `
        <img class="s1 stage" src="img/2.png" alt="">
        `
        if(counter%10 == 0){
            audioWinner.play()
        }
    }
    else if(counter >= 20){
        st1.innerHTML = `
        <img class="s1 stage" src="img/3.png" alt="">
        `
        if(counter%10 == 0){
            audioWinner.play()
        }
    }
    else if(counter >= 10){
        st1.innerHTML = `
        <img class="s1 stage" src="img/4.png" alt="">
        `
        if(counter%10 == 0){
            audioWinner.play()
        }
    }
}
