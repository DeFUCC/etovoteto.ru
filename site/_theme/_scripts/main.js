import VanillaScrollSpy from 'vanillajs-scrollspy'
import { generateWords } from './use/randomWords'

document.addEventListener('DOMContentLoaded', () => {
  scrollSpy()
  generator()
})

function generator() {
  const gen = document.getElementById('generator')
  const card = gen.children[0]
  const text = card.children[0]
  const generate = document.getElementById('generate')
  function newWord() {
    card.style.opacity = 0

    setTimeout(() => {
      let word = generateWords()
      word = word[0].toUpperCase() + word.slice(1)
      text.innerText = word
      card.style.opacity = 1
    }, 300)
  }
  newWord()
  generate.addEventListener('click', () => {
    newWord()
  })
}

function scrollSpy() {
  const targets = document.querySelectorAll('main > article'),
    options = {
      threshold: 0.2,
    }
  // check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    ;(() => {
      const inView = (target) => {
        const interSecObs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const elem = entry.target
            let currentNav = document.querySelector(`a[href='/#${elem.id}']`)

            if (currentNav) {
              entry.isIntersecting
                ? currentNav.classList.add('active')
                : currentNav.classList.remove('active')
            }
          })
        }, options)
        interSecObs.observe(target)
      }
      targets.forEach(inView)
    })()
  }
}
