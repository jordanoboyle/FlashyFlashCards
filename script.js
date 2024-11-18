
//DOM Selectors
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('questions');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

//Keep Track of Current Cards
let curentActiveCard = 0;

//Store DOM Cards
const cardsEl = [];

//Store the card Data ( Eventually from local storage)
const cardsData = [
  {
    question: "Who made the game Last of Us?",
    answer: "Naughty Dog Studios"
  },
  {
    question: "Who was the brainchild of Kirby's Dreamland?",
    answer: "Masahiro Sakurai"
  },
  {
    question: "What game was hunted down by Artari and burried in the NM desert?",
    answer: "ET"
  }
];

//Create All Cards
function createAllCards() {
  cardsData.forEach((data, index) =>  createCard(data, index));
}

//Create a single Card 
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
      <div class="inner-card">
        <div class="inner-card-front">
          <p>
            ${data.question}
          </p>
        </div>
        <div class="inner-card-back">
          <p>
          ${data.answer}
          </p>
        </div>
      </div>
  `;

  card.addEventListener('click', ( ) => card.classList.toggle('show-answer'));

  //Add to the DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

}

createAllCards();