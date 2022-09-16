const image = document.getElementById("image");
const job = document.getElementById("job");
const author = document.getElementById("author");
const text = document.getElementById("text");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

const reviews = [{
        id: 1,
        name: 'Jonas',
        job: 'full stack web developer',
        image: '<img src="./70929863_2560581960831519_5638313021852876800_n.jpg" class="rounded-circle" id="image" style="width: 150px;" alt="Avatar"/>',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua."
    },

    {
        id: 2,
        name: 'Micheal',
        job: 'full stack web developer',
        image: '<img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" class="rounded-3" style="width: 150px;" alt="Avatar" />',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },

    {
        id: 3,
        name: 'Christian',
        job: 'full stack web developer',
        image: 'img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style="width: 150px;" alt="Avatar"/>',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },

    {
        id: 4,
        name: 'Philip',
        job: 'full stack web developer',
        image: 'img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style="width: 150px;" alt="Avatar"/>',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
];

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    image.src = item.image;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    text.innerHTML = item.text

})