
const col1 = document.getElementById('column1')
const col2 = document.getElementById('column2')
const col3 = document.getElementById('column3')
const col4 = document.getElementById('column4')
const columnFormatting = document.getElementsByClassName('col')


const mainPage = document.querySelector('.holder')
const aboutPage = document.querySelector('.about-container')
const projectPage = document.querySelector('.projects-container')

const aboutBackButton = document.querySelector('.button-styling')
const mobileBackButton = document.querySelector('.mobile-back-button')
const aboutToProjectButton = document.getElementById('nav-about-to-project')

const projectBackButton = document.getElementById('project-back')

const showToggleOne = document.getElementById('show-toggle-one')
const projectOne = document.getElementById('project-one')
const showToggleTwo = document.getElementById('show-toggle-two')
const projectTwo = document.getElementById('project-two')
const showToggleThree = document.getElementById('show-toggle-three')
const projectThree = document.getElementById('project-three')
const showToggleFour = document.getElementById('show-toggle-four')
const projectFour = document.getElementById('project-four')
const aboutMeProject = document.getElementById('project-about-me-button')


// COLUMN DYNAMIC STYLING ON MOUSEOVER
col1.addEventListener('mouseover', function () {
  if (window.innerWidth > 1000) {
    col1.style.width = '30%'
    col2.style.width = '18%'
    col3.style.width = '24%'
    col4.style.width = '24%'
  }
  
})
col2.addEventListener('mouseover', function () {
  if (window.innerWidth > 1000) {
    col1.style.width = '21%'
    col2.style.width = '30%'
    col3.style.width = '21%'
    col4.style.width = '24%'
  }
})
col3.addEventListener('mouseover', function () {
  if (window.innerWidth > 1000) {
    col1.style.width = '24%'
    col2.style.width = '21%'
    col3.style.width = '30%'
    col4.style.width = '21%'
  }
})
col4.addEventListener('mouseover', function () {
  if (window.innerWidth > 1000) {
    col1.style.width = '24%'
    col2.style.width = '24%'
    col3.style.width = '18%'
    col4.style.width = '30%'
  }
})

// SET COLUMN HEIGHTS AND RESET STYLING ON MOUSELEAVE
for (let i = 0; i < columnFormatting.length; i++) {
  columnFormatting[i].height = window.innerHeight
  columnFormatting[i].addEventListener('mouseleave', function () {
    
    this.style.filter = 'grayscale(100%)'
    this.getElementsByClassName('inner-text')[0].style.visibility = 'hidden'
    this.getElementsByTagName('h3')[0].removeAttribute('class')
    if (window.innerWidth > 1000) {
      col1.style.width = '24%'
      col2.style.width = '24%'
      col3.style.width = '24%'
      col4.style.width = '24%'
    }
  })

  // COLUMN STYLING ON MOUSEOVER
  columnFormatting[i].addEventListener('mouseover', function () {
    this.style.filter = 'grayscale(50%)'
    this.getElementsByClassName('inner-text')[0].style.visibility = 'visible'
    this.getElementsByTagName('h3')[0].setAttribute('class', 'highlighted')

  })
}

// Handle popup navbar
const dropdownButton = document.getElementById('drop-down-btn')
const fadedBackground = document.getElementById('faded-view')
const navbar = document.getElementById('dropdown-social')
dropdownButton.addEventListener('click', ()=> {
  navbar.classList.add('show')
  fadedBackground.style.display = 'block'
})

fadedBackground.addEventListener('click', ()=> {
  navbar.classList.remove('show')
  fadedBackground.style.display = 'none'
})


// ABOUT ME SECTION

col1.addEventListener('click', ()=> {
  mainPage.classList.add('hide')
  aboutPage.classList.remove('hide')
  aboutPage.classList.add('show')
})

aboutBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  aboutPage.classList.add('hide')
})
mobileBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  aboutPage.classList.add('hide')
})

// PROJECT SECTION

col2.addEventListener('click', ()=> {
  mainPage.classList.add('hide')
  projectPage.classList.remove('hide')
  projectPage.classList.add('show')
})

showToggleOne.addEventListener('click', ()=> {
  if (projectOne.classList.contains('show-project')){
    projectOne.classList.remove('show-project')
    showToggleOne.innerHTML = 'MORE'
  } else {
    projectOne.classList.add('show-project')
    showToggleOne.innerHTML = 'LESS'
  }
})

showToggleTwo.addEventListener('click', ()=> {
  if (projectTwo.classList.contains('show-project')){
    projectTwo.classList.remove('show-project')
    showToggleTwo.innerHTML = 'MORE'
  } else {
    projectTwo.classList.add('show-project')
    showToggleTwo.innerHTML = 'LESS'
  }
})

showToggleThree.addEventListener('click', ()=> {
  if (projectThree.classList.contains('show-project')){
    projectThree.classList.remove('show-project')
    showToggleThree.innerHTML = 'MORE'
  } else {
    projectThree.classList.add('show-project')
    showToggleThree.innerHTML = 'LESS'
  }
})

showToggleFour.addEventListener('click', ()=> {
  if (projectFour.classList.contains('show-project')){
    projectFour.classList.remove('show-project')
    showToggleFour.innerHTML = 'MORE'
  } else {
    projectFour.classList.add('show-project')
    showToggleFour.innerHTML = 'LESS'
  }
})

aboutToProjectButton.addEventListener('click', ()=> {
  aboutPage.classList.add('hide')
  projectPage.classList.remove('hide')
  projectPage.classList.add('show')
})

projectBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  projectPage.classList.add('hide')
})