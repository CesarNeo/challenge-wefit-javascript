const menuButtons = $('div.btn-group-vertical')
const menuButtonsItems = menuButtons.find('button')

menuButtons.css({
  'flex-direction': 'row',
  'align-items': 'center',
  'gap': '4px',
})

menuButtonsItems.css({
  'border-radius': '4px',
  'width': 'fit-content',
})

const header = $('div.jumbotron')

header.css({
  'color': 'white',
  'background':'#5a6268',
  'text-align': 'right',
})

const headerButton = header.find('a[role="button"]')
headerButton.removeClass('btn-primary').addClass('btn-success')

const containersRow = $('div.row')
const cardsContainer = containersRow.eq(2)
const cards = cardsContainer.find('div.col-lg-3')
const cardAnimals = cards.eq(0)
const cardTechnology = cards.eq(1)
const cardPeople = cards.eq(2)
const cardNature = cards.eq(3)

cards.remove()
cardsContainer.append(cardNature, cardAnimals, cardPeople,cardTechnology)

const secondCard = cards.eq(1)
const secondCardButton = secondCard.find('a.btn')
secondCardButton.removeClass('btn-primary').addClass('btn-success')

const listContainer = containersRow.eq(3)
const listItemsUl = listContainer.find('ul.list-group')
const itemActive = listItemsUl.find('li.active')

itemActive.removeClass('active')

const newItemsInUl = ['<li class="list-group-item active">Quarto item</li>', '<li class="list-group-item">Quinto item</li>']

listItemsUl.append(newItemsInUl)


