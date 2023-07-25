// Show menu list when mobile icon is clicked at header

const mobileAction = document.getElementById('mobile-toggle')
const mobileMenu = document.querySelector('.top-header nav ul')
const mobileState = {
    isActive: false
} 

mobileAction.addEventListener('click', e => {
    onChangeMobileState()
})

const onChangeMobileState = () => {
    !mobileState.isActive ? mobileModeActivate() : mobileModeDeactivate()
}

const mobileModeActivate = () => {
    mobileState.isActive = true
    mobileMenu.classList.add('active')
}

const mobileModeDeactivate = () => {
    mobileState.isActive = false
    mobileMenu.classList.remove('active')
}

//Show header when user scroll up and hide header when he does the oposity

const header = document.querySelector('.top-header')
const headerMustAppears = 50;
let lastScroll = 0

window.addEventListener('scroll', e => {
    const position = window.scrollY
    if( position < lastScroll && position > headerMustAppears ) {
        showHeaderOnScrollUp()
        lastScroll = position
        return
    }

    showHeaderOnTop()
    lastScroll = position
})

const showHeaderOnTop = () => {
    header.classList.remove('header-on-scroll')
    header.classList.add('header-on-top')
}

const showHeaderOnScrollUp = () => {
    header.classList.remove('header-on-top')
    header.classList.add('header-on-scroll')
    mobileModeDeactivate()
}