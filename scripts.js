function togglePopup() {
    const popup = document.querySelector('.popup');
    if (popup.style.display === 'none' || !popup.style.display) {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

function ninjaClicked() {
    const checkbox = document.querySelector('#robot-checkbox');
    const successMessage = document.querySelector('.success-message');
    const failedMessage = document.querySelector('.failed-message');
    checkbox.checked = true;
    togglePopup();
    successMessage.style.display = 'inline';
    failedMessage.style.display = 'none';
}

function dogClicked() {
    const checkbox = document.querySelector('#robot-checkbox');
    const successMessage = document.querySelector('.success-message');
    const failedMessage = document.querySelector('.failed-message');
    checkbox.checked = false;
    togglePopup();
    successMessage.style.display = 'none';
    failedMessage.style.display = 'inline';
}


function onNinjaDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function onPointBDragOver(event) {
    event.preventDefault();
}

function onPointBDrop(event) {
    const id = event.dataTransfer.getData('text/plain');
    if (id === 'ninja') {
        ninjaDragged();
    }
    event.preventDefault();
}

function ninjaDragged() {
    const checkbox = document.querySelector('#robot-checkbox');
    const successMessage = document.querySelector('.success-message');
    const failedMessage = document.querySelector('.failed-message');
    const ninja = document.getElementById('ninja');
    checkbox.checked = true;
    togglePopup();
    successMessage.style.display = 'inline';
    failedMessage.style.display = 'none';
    ninja.style.display = 'none';
}

// Add these event listeners to your existing scripts.js file
document.getElementById('ninja').addEventListener('dragstart', onNinjaDragStart);
document.getElementById('boxB').addEventListener('dragover', onPointBDragOver);
document.getElementById('boxB').addEventListener('drop', onPointBDrop);
