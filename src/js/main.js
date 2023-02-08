import '../css/main.scss'
import { documentReady } from './documentReady'

documentReady(() => {
  const navExpand = document.querySelector('#navExpand')
  const expandedMenu = document.querySelector('#expandedMenu')

  navExpand.addEventListener('click', (e) => {
    toggleClassOnElement(navExpand, 'active')
    toggleClassOnElement(expandedMenu, 'active')
  })

  handleCarousel()
})

const toggleClassOnElement = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    element.classList.add(className)
  }
}

// Unfinished carousel
const handleCarousel = () => {
  const carousel = document.querySelector('#carousel')
  const carouselItems = carousel.querySelectorAll('.carousel-item')
  let itemWidth = carouselItems[0].offsetWidth
  const carouselBtn = document.querySelector('#carouselBtn')
  let left = 0
  let count = 0

  carouselBtn.addEventListener('click', (e) => {
    left = left + itemWidth
    count++
    carousel.style.left = `${left}px`
    addItemToStart()
  })

  window.addEventListener('resize', (e) => {
    itemWidth = carouselItems[0].offsetWidth
    left = itemWidth * count
    carousel.style.left = `${left}px`
  })

  const addItemToStart = () => {
    console.log(carouselItems[0])
    carousel.insertBefore(carouselItems[0], carousel.firstChild)
  }
}
