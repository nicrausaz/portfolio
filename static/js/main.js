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

// anime({
//   targets: '#experience-progress-line',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 3000,
//   direction: 'alternate',
//   loop: true
// });

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

// On page load
const svgDocument = document.getElementById('progress-exp-parent').contentDocument
var svgElement = svgDocument.getElementById('progress-line-experience')
console.log(svgElement)
if (svgElement) {
  svgElement.style.fill = 'red' // Changer la couleur de remplissage en rouge
}

// Fonction pour animer les chemins SVG progressivement
// function animatePaths(paths, index) {
//   if (index < paths.length) {
//     console.log(paths[index])
//     paths[index].style.stroke = '#fff'
//     paths[index].style.fill = '#fff'
//     paths[index].style.transition = 'stroke-dasharray 1.5s ease-in-out'
//     paths[index].style.strokeDasharray = paths[index].getTotalLength()
//     paths[index].style.strokeDashoffset = paths[index].getTotalLength()
//     setTimeout(() => {
//       paths[index].style.strokeDashoffset = '0'
//       animatePaths(paths, index + 1)
//     }, 500)
//   }
// }

// animatePaths(paths, 0)

// Cursor
// const bigBall = document.querySelector('.cursor__ball--big');
// const smallBall = document.querySelector('.cursor__ball--small');
// const hoverables = document.querySelectorAll('.hoverable');

// // Listeners
// document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < hoverables.length; i++) {
//   hoverables[i].addEventListener('mouseenter', onMouseHover);
//   hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// // Move the cursor
// function onMouseMove(e) {
//   smallBall.style.left = e.pageX - 5  + 'px';
//   smallBall.style.top = e.pageY - 7  + 'px';
// }

// // Hover an element
// function onMouseHover() {
//   smallBall.style.transition = 'transform 0.3s ease';
//   smallBall.style.transform = 'scale(4)';
// }

// function onMouseHoverOut() {
//   smallBall.style.transition = 'transform 0.3s ease';
//   smallBall.style.transform = 'scale(1)';
// }