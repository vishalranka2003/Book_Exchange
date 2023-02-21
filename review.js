// local reviews data
const reviews = [
  {
    id: 1,
    name: "Rashmi K B",
    mail: "rashmikb.ise@bmsce.ac.in",
    img: "Review/rashmi.jpg",
    text: "I recently discovered this online book exchange store and have been thoroughly impressed with my experience. The website is user-friendly and easy to navigate, making it simple to search for and find the books. ",
    // star: '<i class="fas fa- star"> <br> <i class="fas fa-star">',
  },
  {
    id: 2,
    name: "Dr. P JAYAREKHA",
    mail: "jayarekha.ise@bmsce.ac.in",
    img: "Review/jayarekha.jpeg",
    text: "The search function was efficient and allowed me to find the specific book I was looking for quickly. The book listings included detailed information and user reviews, which helped me make informed decisions about which books to purchase.",
  },
  {
    id: 3,
    name: "Dr. H S GURUPRASAD",
    mail: "guru.ise@bmsce.ac.in",
    img: "Review/guruprasad.jpg",
    text: "I recently used an online book exchange platform called BookSwap and I was very impressed with my experience. The platform was easy to navigate and had a wide selection of books to choose from.",
  },
  {
    id: 4,
    name: "Dr. ROOPA R",
    mail: "roopa.ise@bmsce.ac.in",
    img: "Review/roopa.jpg",
    text: "I really liked the idea of getting books being exchanged in a small radius area",
  },
  {
    id: 5,
    name: "R INDRA",
    mail: "indra.ise@bmsce.ac.in",
    img: "Review/indra.jpg",
    text: "Last month I read over 8 new books, for just the cost of shipping through bookxchange. It is as easy as SEND a book and RECEIVE a book. that too at my doorstep. It is just amazing.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const mail = document.getElementById("mail");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  mail.textContent = item.mail;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  mail.textContent = item.mail;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
