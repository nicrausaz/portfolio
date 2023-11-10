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
  targets: '#call-to-scroll',
  opacity: 1,
  duration: 1000,
  delay: 4000,
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

  menu.classList.toggle('hidden')

  // if (menu.classList.contains('hidden')) {
  //   anime({
  //     targets: '#mobile-menu',
  //     opacity: 1,
  //     duration: 1000,
  //     easing: 'easeOutExpo',
  //   })
  // } else {
  //   anime({
  //     targets: '#mobile-menu',
  //     opacity: 0,
  //     duration: 1000,
  //     easing: 'easeOutExpo',
  //   })
  // }
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

        // tabs.forEach((tab) => {
        //   tab.classList.remove('bg-emerald-500')
        //   tab.classList.remove('text-emerald-500')
        // })
        // tab.classList.add('bg-emerald-500')
        // tab.classList.add('text-white')

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
