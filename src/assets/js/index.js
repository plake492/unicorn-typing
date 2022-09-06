import '../scss/index.scss'
import * as cornify from './cornify'
import { init as initRainbow } from './rainbow'

window.addEventListener('DOMContentLoaded', () => {
  const rowOne = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const rowTwo = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const rowThree = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  const rowFour = [' ']
  const keybordList = [rowOne, rowTwo, rowThree, rowFour]
  const words = [
    // 'Selah',
    // 'Mommy',
    // 'Clancy',
    // 'Daddy',
    // 'Nonni',
    // 'Papa',
    // 'Grams',
    // 'Pop pop',
    // 'J J',
    // 'Ralph',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]

  let letter
  let pos = 0
  let selectedWord
  let holdTyped = ''

  const numberOfRows = keybordList.length
  const totalLetters = keybordList.reduce((acc, cur) => cur.length + acc, 0)
  const keyboard = document.getElementById('keyboard')
  const textDisplay = document.getElementById('text-display')
  const inputDisplay = document.getElementById('input-display')

  const removeUnicorns = () => {
    for (let i = 0; i < cornify_count; i++) {
      cornify.cornify_click_cupcake_button()
    }
  }

  const highlightCurentKey = () => {
    const keyEl = [...document.querySelectorAll('[data-key]')]
    keyEl.forEach(el => {
      if (el.dataset.key.toLowerCase() === 's') {
        el.style.outline = '8px solid blue'
      }
    })
  }

  const showTyped = () => {
    inputDisplay.textContent = holdTyped
  }

  window.addEventListener('keyup', e => {
    const key = e.key
    const keyEl = [...document.querySelectorAll('[data-key]')]
    const highlightColor = '#efefef'
    let storeBG
    let isAnimating = false

    keyEl.forEach(el => {
      if (el.dataset.key.toLowerCase() === key) {
        if (isAnimating) return
        isAnimating = true
        storeBG = el.style.backgroundColor
        el.style.backgroundColor = highlightColor

        setTimeout(() => {
          el.style.backgroundColor = storeBG
          isAnimating = false
        }, 300)
      }
    })
    if ((e.which <= 90 && e.which >= 48) || key === ' ') holdTyped += key
    if (key === 'Backspace') holdTyped = holdTyped.slice(0, -1)

    showTyped()

    if (holdTyped.toLowerCase() === selectedWord.toLowerCase()) {
      cornify.cornify_add()
      pos++
      holdTyped = ''
      showTyped()
      selectWord()
    }
  })

  const selectWord = () => {
    selectedWord = words[pos]
    textDisplay.textContent = selectedWord
    highlightCurentKey()
  }

  const createKeyboard = () => {
    for (let i = 0; i < numberOfRows; i++) {
      const el = keybordList[i]
      const keyRow = document.createElement('div')
      keyRow.classList.add(
        'd-flex',
        'jsutify-content-center',
        'gap-sm',
        'key__row'
      )

      const isLast = i === numberOfRows - 1
      for (let j = 0; j < el.length; j++) {
        const elIn = el[j]

        const keyWrapper = document.createElement('div')
        const keyLetter = document.createElement('p')

        keyWrapper.style.backgroundColor = '#8400ff'
        keyWrapper.style.width = isLast ? '600px' : ''
        keyWrapper.dataset.key = elIn
        keyWrapper.classList.add(
          'd-flex',
          'flex-col',
          'align-items-center',
          'justify-content-center',
          'key__wrapper',
          'border-rounded',
          'box-shadow'
        )

        keyLetter.classList.add('v-100', 'text-lg')
        keyLetter.textContent = elIn.toUpperCase()

        keyWrapper.appendChild(keyLetter)

        keyRow.appendChild(keyWrapper)
      }
      keyRow.classList.add('d-flex', 'jsutify-content-center')
      keyboard.appendChild(keyRow)
    }

    selectWord()
  }

  // const displayWords = () => {
  //   word = words[pos]
  //   displayTarget.textContent = word
  // }
  // displayWords()
  createKeyboard()
})

initRainbow()
