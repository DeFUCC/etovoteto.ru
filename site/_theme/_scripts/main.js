console.log('hello from rollup!')

import { generateWords } from './use/randomWords'

document.addEventListener('DOMContentLoaded', () => {
  const gen = document.getElementById('generator')
  const card = gen.children[0]
  const text = card.children[0]
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
  gen.addEventListener('click', () => {
    newWord()
  })
})
