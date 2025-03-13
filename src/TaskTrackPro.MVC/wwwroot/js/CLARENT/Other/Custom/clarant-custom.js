//user is tabbing
function handleFirstTab(e) {
    document.body.classList.add('user-is-tabbing');
    document.removeEventListener('keyup', handleFirstTab);
    document.addEventListener('mousedown', handleMouseDownOnce);
}

function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');
    document.removeEventListener('mousedown', handleMouseDownOnce);
    document.addEventListener('keyup', handleFirstTab);
}

window.addEventListener('keyup', handleFirstTab);
