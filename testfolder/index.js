
const col1 = document.getElementById('column1')
const col2 = document.getElementById('column2')
const col3 = document.getElementById('column3')
const col4 = document.getElementById('column4')
const columnFormatting = document.getElementsByClassName('col')

// PAGES
const mainPage = document.querySelector('.holder')
const aboutPage = document.querySelector('.about-container')
const projectPage = document.querySelector('.project-container')
const skillPage = document.querySelector('.skill-container')
const archPage = document.querySelector('.arch-container')

// ABOUT
const backButton = document.querySelectorAll('.main-back-button')


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

backButton.forEach(button => {
  button.addEventListener('click', ()=> {
    mainPage.classList.remove('hide')
    mainPage.classList.add('show')
    aboutPage.classList.add('hide')
    aboutPage.classList.remove('show')
    archPage.classList.add('hide')
    archPage.classList.remove('show')
    skillPage.classList.add('hide')
    skillPage.classList.remove('show')
    projectPage.classList.add('hide')
    projectPage.classList.remove('show')
  })
})



// ABOUT ME SECTION

col1.addEventListener('click', ()=> {
  mainPage.classList.add('hide')
  aboutPage.classList.remove('hide')
  aboutPage.classList.add('show')
})



// PROJECT SECTION

col2.addEventListener('click', ()=> {
  mainPage.classList.add('hide')
  projectPage.classList.remove('hide')
  projectPage.classList.add('show')
})



// SKILL SECTION

col3.addEventListener('click', ()=> {
  mainPage.classList.add('hide')
  skillPage.classList.remove('hide')
  skillPage.classList.add('show')
})


// ARCH SECTION

col4.addEventListener('click', ()=> {
  mainPage.classList.add('hide')
  archPage.classList.remove('hide')
  archPage.classList.add('show')
})
