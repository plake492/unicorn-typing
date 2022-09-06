const wait = time =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve()
    }, time)
  )

export const init = () => {
  const rainbowFall = async () => {
    const colors = [...document.querySelectorAll('.rainbow-color-item')]
    for (let i = 0; i < colors.length; i++) {
      const el = colors[i]
      await wait(50)
      el.style.height = '100%'
    }
  }

  //   const rainbowColors = [
  //     '#FF0000',
  //     '#FF7F00',
  //     '#FFFF00',
  //     '#00FF00',
  //     '#0000FF',
  //     '#4B0082',
  //     '#9400D3'
  //   ]
  const rainbowColors = [...Array(99)].map(
    () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
  )
  console.log('rainbowColors==>>', rainbowColors)
  const rainbowBtn = document.getElementById('rainbow')

  rainbowBtn.addEventListener('click', () => {
    const doc = document
    const wrapperEl = document.createElement('div')
    wrapperEl.classList.add(
      'position-fixed',
      'top-0',
      'left-0',
      'w-100',
      'h-100',
      'd-flex'
    )

    for (let i = 0; i < rainbowColors.length; i++) {
      const el = rainbowColors[i]

      const elDiv = document.createElement('div')
      elDiv.style.width = `${100 / rainbowColors.length}%`
      elDiv.style.height = '0'
      elDiv.style.transition = 'height 200ms ease-in-out'
      elDiv.style.backgroundColor = el
      elDiv.classList.add('rainbow-color-item')
      wrapperEl.appendChild(elDiv)
    }

    document.body.appendChild(wrapperEl)

    rainbowFall()
  })
}
