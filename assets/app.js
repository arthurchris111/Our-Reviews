const img = document.getElementById("image");
const job = document.getElementById("job");
const author = document.getElementById("author");
const text = document.getElementById("text");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const reviews = [person = {
        id: 1,
        img: './70929863_2560581960831519_5638313021852876800_n.jpg',
        name: 'Christian',
        job: 'full stack web developer',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua."
    },

    {
        id: 2,
        img: 'https://mdbcdn.b-cdn.net/img/new/avatars/5.webp',
        name: 'Sandra',
        job: 'full stack web developer',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua."
    },

    {
        id: 3,
        img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
        name: 'Daniel',
        job: 'full stack web developer',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua."
    },

    {
        id: 4,
        img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
        name: 'Philip',
        job: 'full stack web developer',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.",
    },

    {
        id: 5,
        img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
        name: 'Micheal',
        job: 'full stack web developer',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.",
    },
];

let currentItem = 0;

// window.addEventListener("DOMContentLoaded", function () {
//     showPerson(currentItem)

// })


const showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text
}

currentItem++
if (currentItem > reviews.length - 1) {
    currentItem = 0;
}
showPerson(currentItem)

nextButton.addEventListener("click", function () {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem)
})


previousButton.addEventListener("click", function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem)
})