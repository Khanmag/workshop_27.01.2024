const orderedCards = [
  { img: './assets/cards/1.png', name: 'Лев' },
  { img: './assets/cards/2.png', name: 'Тигр' },
  { img: './assets/cards/3.png', name: 'Леопард' },
  { img: './assets/cards/4.png', name: 'Буйвол' },
  // { img: './assets/cards/5.png', name: 'Корова'},
  // { img: './assets/cards/6.png', name: 'Лама'},
  // { img: './assets/cards/7.png', name: 'Слон'},
  // { img: './assets/cards/8.png', name: 'Фламинго'},
  // { img: './assets/cards/9.png', name: 'Жираф'},
  // { img: './assets/cards/10.png', name: 'Козёл'},
  // { img: './assets/cards/11.png', name: 'Ёжик'},
  // { img: './assets/cards/12.png', name: 'Бегемот'},
  // { img: './assets/cards/13.png', name: 'Конь'},
  // { img: './assets/cards/14.png', name: 'Панда'},
  // { img: './assets/cards/15.png', name: 'Зебра'},
  // { img: './assets/cards/16.png', name: 'Пёс'},
  // { img: './assets/cards/17.png', name: 'Носорог'},
  // { img: './assets/cards/18.png', name: 'Овца'},
]

function startGame(cards) {
  const root = document.getElementById("card_container")
  // создать карточки на основе orderedCards положить карточки в root
  createCards(cards, root)
}

function createCards(cards, rootEl) {
  for ( item in cards) {
    const newCard = document.createElement("div")
    // newCard.style.backgroundImage = `url(${item.img})`
    newCard.style.backgroundImage = 'url("' + item.img + '")'
    newCard.className = "card opened_card"
    rootEl.append(newCard)
  }

}


startGame([...orderedCards, ...orderedCards])
