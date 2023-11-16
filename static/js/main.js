// Observers for every sections that update the navbar links when the section is in the viewport
const sections = document.querySelectorAll('.section')
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.target.id) {
      return
    }

    const menuLink = document.querySelector(`[data-section=${entry.target.id}]`)
    if (entry.isIntersecting) {
      anime({
        targets: '#nav-content',
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo',
      })
      anime({
        targets: `#${entry.target.id}`,
        opacity: 1,
        easing: 'easeInOutSine',
      })
      menuLink.classList.add('navbar-active')
    } else {
      menuLink.classList.remove('navbar-active')
    }
  })
}

const observer = new IntersectionObserver(callback, options)
sections.forEach((section) => {
  observer.observe(section)
})

// Animations
anime({
  targets: '#main-title',
  opacity: 1,
  duration: 2000,
  delay: 1000,
  easing: 'easeOutExpo',
})

anime({
  targets: '#social-block',
  opacity: 1,
  duration: 2000,
  delay: 2000,
  easing: 'easeOutExpo',
})

anime({
  targets: '#call-to-scroll',
  opacity: 1,
  duration: 1000,
  delay: 3000,
  easing: 'easeOutExpo',
})

anime({
  targets: '#main-title > h4',
  translateX: 100,
  direction: 'alternate',
  easing: 'easeInExpo',
})

// Menu mobile
document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu')

  // TODO: better animation
  if (menu.classList.contains('hidden')) {
    anime({
      targets: '#mobile-menu',
      duration: 1000,
      begin: () => {
        menu.classList.remove('hidden')
      },
    })
  } else {
    anime({
      targets: '#mobile-menu',
      duration: 1000,
      begin: () => {
        menu.classList.add('hidden')
      },
    })
  }
})

// Bouton expériences
const buttons = document.querySelectorAll('.exp-button')
const cards = document.querySelectorAll('.exp-section')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentButton = button
    const currentCard = document.querySelector(`#sect${currentButton.dataset.id}`)

    anime({
      targets: cards,
      opacity: 0,
      duration: 300,
      easing: 'linear',
      complete: () => {
        cards.forEach((card) => {
          card.classList.add('hidden')
        })

        buttons.forEach((button) => {
          button.classList.remove('bg-emerald-500')
        })

        currentCard.classList.remove('hidden')
        currentButton.classList.add('bg-emerald-500')

        anime({
          targets: currentCard,
          opacity: 1,
          duration: 300,
          easing: 'linear',
        })
      },
    })
  })
})

// Bouton projets
const tabs = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab-content')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-target')
    const targetContent = document.getElementById(targetId)

    anime({
      targets: contents,
      opacity: 0,
      duration: 300,
      easing: 'linear',
      complete: () => {
        contents.forEach((content) => {
          content.classList.add('hidden')
        })
        targetContent.classList.remove('hidden')

        tabs.forEach((tab) => {
          tab.classList.remove('project-active')
        })
        tab.classList.add('project-active')

        anime({
          targets: targetContent,
          opacity: 1,
          duration: 300,
          easing: 'linear',
        })
      },
    })
  })
})

function myAge() {
  const birthday = new Date(1999, 7, 3)
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Remplace le texte par l'âge
const age = document.getElementById('age')
age.innerHTML = myAge()

// Anime the experience path
const experiencePathParent = document.getElementById('progress-exp-parent')
experiencePathParent.addEventListener('load', () => {
  const svgDocument = experiencePathParent.contentDocument
  const svgElement = svgDocument.getElementById('progress-line-experience')
  const paths = [...svgElement.querySelectorAll('path')].reverse()

  animatePaths(paths, 0)
})

// Fonction pour animer les chemins SVG progressivement
function animatePaths(paths, index) {
  if (index < paths.length) {
    paths[index].style.stroke = '#57c2a6'
    paths[index].style.fill = '#57c2a6'
    paths[index].style.transition = 'stroke-dasharray 1.5s ease-in-out'
    paths[index].style.strokeDasharray = paths[index].getTotalLength()
    paths[index].style.strokeDashoffset = paths[index].getTotalLength()
    setTimeout(() => {
      paths[index].style.strokeDashoffset = '0'
      animatePaths(paths, index + 1)
    }, 50)
  }
}