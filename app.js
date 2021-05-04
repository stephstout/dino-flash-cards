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
        question: "Question: What is the longest dinosaur?",
        answer: "Answer: The Argentinosaurus which measured over 40 meters!",
    }, 
    {
        question: "Question: What are the three time periods in which the dinosaurs lived?",
        answer: "Answer: Triassic, Jurassic, and Cretaceous",
    },
    {
        question: "Question: What do you call a person who studies dinosaurs?",
        answer: "Answer: paleontologist",
    },
    {
        question: "Question: What does Velociraptor mean?",
        answer: "Answer: speedy thief",
    },
    {
        question: "Question: What is the oldest dinosaur found so far?",
        answer: "Answer: The Euroraptor was found in Argentina and is 230 million years old.",
    },
    {
        question: "Question: When was the mass extinction of dinosaurs?",
        answer: "Answer: 65 million years ago",
    },
    {
        question: "Question: Which dinosaur had the smallest brain?",
        answer: "Amswer: Stegosaurus",
    },
    {
        question: "Question: How much food did a Tyrannosaurus rex consume each year?",
        answer: "Answer: 22 tons of meat",
    }
]

startButton.addEventListener("click", () => {
    flashCards = [
        {
            question: "Question: What is the longest dinosaur?",
            answer: "Answer: The Argentinosaurus which measured over 40 meters!",
        }, 
        {
            question: "Question: What are the three time periods in which the dinosaurs lived?",
            answer: "Answer: Triassic, Jurassic, and Cretaceous",
        },
        {
            question: "Question: What do you call a person who studies dinosaurs?",
            answer: "Answer: paleontologist",
        },
        {
            question: "Question: What does Velociraptor mean?",
            answer: "Answer: speedy thief",
        },
        {
            question: "Question: What is the oldest dinosaur found so far?",
            answer: "Answer: The Euroraptor was found in Argentina and is 230 million years old.",
        },
        {
            question: "Question: When was the mass extinction of dinosaurs?",
            answer: "Answer: 65 million years ago",
        },
        {
            question: "Question: Which dinosaur had the smallest brain?",
            answer: "Amswer: Stegosaurus",
        },
        {
            question: "Question: How much food did a Tyrannosaurus rex consume each year?",
            answer: "Answer: 22 tons of meat",
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
    scoreNumber += 5
    score.innerText = scoreNumber
    flashCards.splice(placeHolder, 1)
    if (flashCards.length === 0) {
        alert("Congrats! Game Over!")
        return 
    }
    console.log(flashCards)
    let nextQuestion = flashCards[placeHolder]
    if (flashCards[placeHolder] === undefined) {
        placeHolder = 0
    }

    flashFront.innerText = flashCards[placeHolder].question
    })







