
//DOM Selectors
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('previous');
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
let currentActiveCard = 0;

//Store DOM Cards
const cardsEl = [];

//Store the card Data ( Eventually from local storage)
const cardsData = getCardsData();
//PROOF OF CONCEPT DATA BELOW
// const cardsData = [
//   {
//     question: "Who made the game Last of Us?",
//     answer: "Naughty Dog Studios"
//   },
//   {
//     question: "Who was the brainchild of Kirby's Dreamland?",
//     answer: "Masahiro Sakurai"
//   },
//   {
//     question: "What game was hunted down by Artari and burried in the NM desert?",
//     answer: "ET"
//   }
// ];

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

  updateCurrentText();

}

//show the number of cards
// Shows the number of cards available and the card number you are on.
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
}

//GET CARDS FROM LOCAL STORAGE
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  //Local storage only stores strings, so we have to put them in there like that and pull them out like that as well (parse back into array). 
  return cards === null ? [] : cards;
  //ternairy operator is shorthand shift statement.

}

createAllCards();


//EVENT LISTENERS
nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';
  // className vs classList... Name overwrites what is there. List adds to what is already there. This is an important distinction.

  //GET NEW CARD INDEX
  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }
  //This prevents the cards from going further than the end.

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }
  //This prevents from going past 0 index.

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});


//Show add container
showBtn.addEventListener('click', () => {
  addContainer.classList.add('show');
});
hideBtn.addEventListener('click', () => {
  addContainer.classList.remove('show');
})