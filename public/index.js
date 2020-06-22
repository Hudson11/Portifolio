const fab = document.getElementById('fabButton')
const closeButton = document.getElementById('closeButton')
const modal = document.getElementById('modal')

fab.addEventListener('click', event => {
    const name = modal.className.split(' ')
    if(name[2] === 'openModal' || modal.className === null) {
        modal.classList.remove('openModal')
        modal.classList.add('closedModal')
    }
    else if(name[2] === 'none' ){
        modal.classList.remove('none')
        modal.classList.add('openModal')
    }
    else {
        modal.classList.remove('closedModal')
        modal.classList.add('openModal')
    }
})

closeButton.addEventListener('click', event => {
    modal.classList.remove('openModal')
    modal.classList.add('closedModal')
})