console.log('hello from rollup!')
/*
import { itemColor } from './use/colors.js'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#generator')
*/

import { generateWords } from './use/randomWords'

document.addEventListener('DOMContentLoaded', () => {
  const gen = document.getElementById('generator')
  const text = gen.children[0].children[0]
  function newWord() {
    text.style.opacity = 0

    setTimeout(() => {
      let word = generateWords()
      word = word[0].toUpperCase() + word.slice(1)
      text.innerText = word
      text.style.opacity = 1
    }, 300)
  }
  newWord()
  gen.addEventListener('click', () => {
    newWord()
  })
})
