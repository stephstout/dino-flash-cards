const startButton = document.querySelector("#start-button")

const previousButton = document.querySelector("#previous")
const nextButton = document.querySelector("#next")
const flipButton = document.querySelector("#flip")

const rightButton = document.querySelector("#right")
const wrongButton = document.querySelector("#wrong")

const flashFront = document.querySelector(".flash-card-front")
const flashBack = document.querySelector(".flash-card-back")

const score = document.querySelector('#score')
let scoreNumber = 0


let placeHolder = 0

let flashCards = [
    {
        question: "What is the longest dinosaur?",
        answer: "The Argentinosaurus which measured over 40 meters!",
    }, 
    {
        question: "What are the three time periods in which the dinosaurs lived?",
        answer: "Triassic, Jurassic, and Cretaceous",
    },
    {
        question: "more questions",
        answer: "another answer!",
    },
    {
        question: "one more set!",
        answer: "ghakdhgaldkhga",
    }
]

// const correctAnswers = []

startButton.addEventListener("click", () => {
    flashCards = [
        {
            question: "What is the longest dinosaur?",
            answer: "The Argentinosaurus which measured over 40 meters!",
        }, 
        {
            question: "What are the three time periods in which the dinosaurs lived?",
            answer: "Triassic, Jurassic, and Cretaceous",
        },
        {
            question: "more questions",
            answer: "another answer!",
        },
        {
            question: "one more set!",
            answer: "ghakdhgaldkhga",
        }
    ]
    placeHolder = 0
    scoreNumber = 0
    score.innerText = scoreNumber
    flashFront.innerText = flashCards[placeHolder].question
}) 

flipButton.addEventListener("click", () => { 
    flashFront.innerText = flashCards[placeHolder].answer 
})

nextButton.addEventListener("click", () => {
    placeHolder += 1
    if (flashCards[placeHolder] === undefined) {
        placeHolder = 0
    }
    flashFront.innerText = flashCards[placeHolder].question
    })

nextButton.addEventListener("onkeyup", () => {
    placeHolder += 1
    if (flashCards[placeHolder] === undefined) {
        placeHolder = 0
    }
    flashFront.innerText = flashCards[placeHolder].question
    })

previousButton.addEventListener("click", () => {
    placeHolder -= 1
    if (flashCards[placeHolder] === undefined) {
        placeHolder = flashCards.length-1
    }
    flashFront.innerText = flashCards[placeHolder].question
    })
    
rightButton.addEventListener("click", () => {
    // flashCards[placeHolder].answeredCorrectly = true
    scoreNumber += 5
    score.innerText = scoreNumber
    flashCards.splice(placeHolder, 1)
    if (flashCards.length === 0) {
        alert("Congrats! Game Over!")
        return 
    }
    console.log(flashCards)
    // placeHolder += 1
    let nextQuestion = flashCards[placeHolder]
    if (flashCards[placeHolder] === undefined) {
        placeHolder = 0
    }

    flashFront.innerText = flashCards[placeHolder].question
    })

// HELP ME
// -right cards push to array??
// -does functionality match requirements?
// -CSS
// -Do I even need a wrong button??
// spacebar key separate
  




// function finalScore(number) {
//     if (number === 20) {
//       return alert("You won!")
//     }
// }
// console.log(finalScore())




