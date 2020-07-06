
const col1 = document.getElementById('column1')
const col2 = document.getElementById('column2')
const col3 = document.getElementById('column3')
const col4 = document.getElementById('column4')
const columnFormatting = document.getElementsByClassName('col')

// PAGES
const mainPage = document.querySelector('.holder')
const aboutPage = document.querySelector('.about-container')
const projectPage = document.querySelector('.projects-container')
const skillPage = document.querySelector('.skill-container')
const archPage = document.querySelector('.arch-container')

// ABOUT
const aboutBackButton = document.querySelector('.button-styling')
const mobileAboutBackButton = document.querySelector('.mobile-about-back-button')
const aboutToProjectButton = document.getElementById('nav-about-to-project')
const aboutToSkillsButton = document.getElementById('nav-about-to-skills')

// PROJECT
const projectBackButton = document.getElementById('project-back')
const projectToAboutButton = document.getElementById('nav-project-to-about')
const projectToSkillsButton = document.getElementById('nav-project-to-skills')

//  SKILLS
const skillsBackButton = document.getElementById('desktop-skill-back')
const mobileSkillsBackButton = document.querySelector('.mobile-skill-back-button')
const skillsToAboutButton = document.getElementById('nav-skills-to-about')
const skillsToProjectButton = document.getElementById('nav-skills-to-project')

//  ARCH
const archBackButton = document.getElementById('desktop-arch-back')
const mobileArchBackButton = document.querySelector('.mobile-arch-back-button')
const archToAboutButton = document.getElementById('nav-arch-to-about')



const showToggleOne = document.getElementById('show-toggle-one')
const projectOne = document.getElementById('project-one')
const showToggleTwo = document.getElementById('show-toggle-two')
const projectTwo = document.getElementById('project-two')
const showToggleThree = document.getElementById('show-toggle-three')
const projectThree = document.getElementById('project-three')
const showToggleFour = document.getElementById('show-toggle-four')
const projectFour = document.getElementById('project-four')
const showToggleFive = document.getElementById('show-toggle-five')
const projectFive = document.getElementById('project-five')


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

mobileAboutBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  aboutPage.classList.add('hide')
})

aboutToProjectButton.addEventListener('click', ()=> {
  aboutPage.classList.add('hide')
  projectPage.classList.remove('hide')
  projectPage.classList.add('show')
})

aboutToSkillsButton.addEventListener('click', ()=> {
  aboutPage.classList.add('hide')
  skillPage.classList.remove('hide')
  skillPage.classList.add('show')
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
  if (projectTwo.classList.contains('show-project-two')){
    projectTwo.classList.remove('show-project-two')
    showToggleTwo.innerHTML = 'MORE'
  } else {
    projectTwo.classList.add('show-project-two')
    showToggleTwo.innerHTML = 'LESS'
  }
})

showToggleThree.addEventListener('click', ()=> {
  if (projectThree.classList.contains('show-project-three')){
    projectThree.classList.remove('show-project-three')
    showToggleThree.innerHTML = 'MORE'
  } else {
    projectThree.classList.add('show-project-three')
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

showToggleFive.addEventListener('click', ()=> {
  if (projectFive.classList.contains('show-project-five')){
    projectFive.classList.remove('show-project-five')
    showToggleFive.innerHTML = 'MORE'
  } else {
    projectFive.classList.add('show-project-five')
    showToggleFive.innerHTML = 'LESS'
  }
})

projectBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  projectPage.classList.add('hide')
})

projectToSkillsButton.addEventListener('click', ()=> {
  projectPage.classList.add('hide')
  skillPage.classList.remove('hide')
  skillPage.classList.add('show')
})

projectToAboutButton.addEventListener('click', ()=> {
  projectPage.classList.add('hide')
  aboutPage.classList.remove('hide')
  aboutPage.classList.add('show')
})



// SKILL SECTION

col3.addEventListener('click', ()=> {
  mainPage.classList.add('hide')
  skillPage.classList.remove('hide')
  skillPage.classList.add('show')
})

skillsBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  skillPage.classList.add('hide')
})
mobileSkillsBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  skillPage.classList.add('hide')
})

skillsToAboutButton.addEventListener('click', ()=> {
  skillPage.classList.add('hide')
  aboutPage.classList.remove('hide')
  aboutPage.classList.add('show')
})

skillsToProjectButton.addEventListener('click', ()=> {
  skillPage.classList.add('hide')
  projectPage.classList.remove('hide')
  projectPage.classList.add('show')
})

// ARCH SECTION

col4.addEventListener('click', ()=> {
  mainPage.classList.add('hide')
  archPage.classList.remove('hide')
  archPage.classList.add('show')
})

archBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  archPage.classList.add('hide')
})

archToAboutButton.addEventListener('click', ()=> {
  archPage.classList.add('hide')
  aboutPage.classList.remove('hide')
  aboutPage.classList.add('show')
})

mobileArchBackButton.addEventListener('click', ()=> {
  mainPage.classList.remove('hide')
  mainPage.classList.add('show')
  archPage.classList.add('hide')
})