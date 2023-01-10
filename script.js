const homePoints = document.getElementById('homePoints')
const guestPoints = document.getElementById('guestPoints')

const homePlusOne = document.getElementById('homePlusOne')
const homePlusTwo = document.getElementById('homePlusTwo')
const homePlusThree = document.getElementById('homePlusThree')
const guestPlusOne = document.getElementById('guestPlusOne')
const guestPlusTwo = document.getElementById('guestPlusTwo')
const guestPlusThree = document.getElementById('guestPlusThree')

let homeCount = 0
let guestCount = 0

homePlusOne.addEventListener('click', () => {
  homeCount++
  homePoints.textContent = homeCount
})
homePlusTwo.addEventListener('click', () => {
  homeCount += 2
  homePoints.textContent = homeCount
})
homePlusThree.addEventListener('click', () => {
  homeCount += 3
  homePoints.textContent = homeCount
})

guestPlusOne.addEventListener('click', () => {
  guestCount++
  guestPoints.textContent = guestCount
})
guestPlusTwo.addEventListener('click', () => {
  guestCount += 2
  guestPoints.textContent = guestCount
})
guestPlusThree.addEventListener('click', () => {
  guestCount += 3
  guestPoints.textContent = guestCount
})
