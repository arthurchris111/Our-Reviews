const img = document.getElementById("image");
const job = document.getElementById("job");
const author = document.getElementById("author");
const text = document.getElementById("text");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const reviews = [person = {
        id: 1,
        name: 'Jonas',
        job: 'full stack web developer',
        img: '<img src="./70929863_2560581960831519_5638313021852876800_n.jpg" class="rounded-circle" id="image" style="width: 150px;" alt="Avatar"/>',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua."
    },

    {
        id: 2,
        name: 'Micheal',
        job: 'full stack web developer',
        img: '<img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" class="rounded-3" style="width: 150px;" alt="Avatar" />',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua."
    },

    {
        id: 3,
        name: 'Christian',
        job: 'full stack web developer',
        img: 'img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style="width: 150px;" alt="Avatar"/>',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua."
    },

    {
        id: 4,
        name: 'Philip',
        job: 'full stack web developer',
        img: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.",
    },
];

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem)

})

const showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text
}

nextButton.addEventListener("click", function () {
    currentItem++
    if (currentItem > reviews.length - 1) {
        return currentItem = 0;
    }
    showPerson(currentItem)
})