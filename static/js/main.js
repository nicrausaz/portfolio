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
