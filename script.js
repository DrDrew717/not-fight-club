const nameInput = document.querySelector('.reg-form-input');
const regButton = document.querySelector('.reg-form-button');
const mainMenu = document.querySelector('.main-menu-container');
const regPage = document.querySelector('.reg-form-container');
const homePage = document.querySelector('.home-container');
const charPage = document.querySelector('.character-container')
const settingsPage = document.querySelector('.settings-container');
const battlePage = document.querySelector('.battle-container');
const homeButton = document.querySelector('.home-button');
const charButton = document.querySelector('.character-button');
const settingsButton = document.querySelector('.settings-button');
const fightButton = document.querySelector('.fight-button');
const pageName = document.querySelector('.page-name');
const playerName = document.querySelectorAll('.player-name');
const nameEditButton = document.querySelector('.name-edit-button');

const userName = localStorage.getItem('userName');
const userAvatar = localStorage.getItem('userAvatar');

const settingsInput = document.querySelector('.settings-input');
const saveButton = document.querySelector('.save-button');
const settingsPlayerName = document.querySelector('.settings-player-name');
const avatarBtn = document.querySelector('.avatar-button');
const avatarPopup = document.querySelector('.avatar-popup');
const overlay = document.querySelector('.avatar-popup-container');
const avatarCloseButton = document.querySelector('.close-button');

const avatarButton1 = document.querySelector('.avatar-button1');
const avatarButton2 = document.querySelector('.avatar-button2');
const avatarButton3 = document.querySelector('.avatar-button3');
const avatarButton4 = document.querySelector('.avatar-button4');
const avatar = document.querySelector('.avatar');
const avatarBattle = document.querySelector('.player-avatar');

avatar.src = userAvatar || './assets/img/default.jpg';
avatarBattle.src = userAvatar || './assets/img/default.jpg';

if (!userName) {
  charPage.style.display = 'none';
  regPage.style.display = 'flex';
  mainMenu.style.display = 'none';
  homePage.style.display = 'none';
  settingsPage.style.display = 'none';
  battlePage.style.display = 'none';
} else {
  charPage.style.display = 'none';
  regPage.style.display = 'none';
  mainMenu.style.display = 'flex';
  homePage.style.display = 'flex';
  settingsPage.style.display = 'none';
  battlePage.style.display = 'none';
  playerName.forEach((item) => item.textContent = localStorage.getItem('userName'));
}

nameInput.addEventListener('input', function() {
  if (nameInput.value.trim() !== '') {
    regButton.disabled = false;
  } else {
    regButton.disabled = true;
  }
})

regButton.addEventListener('click', function() {
  localStorage.setItem('userName', nameInput.value);
  regPage.style.display = 'none';
  mainMenu.style.display = 'flex';
  homePage.style.display = 'flex';
  playerName.forEach((item) => item.textContent = localStorage.getItem('userName'));
  settingsInput.value = localStorage.getItem('userName');
})

charButton.addEventListener('click', function() {
  charPage.style.display = 'flex';
  homePage.style.display = 'none';
  settingsPage.style.display = 'none';
  battlePage.style.display = 'none';
  pageName.textContent = 'Character';
})

homeButton.addEventListener('click', function() {
  charPage.style.display = 'none';
  homePage.style.display = 'flex';
  settingsPage.style.display = 'none';
  battlePage.style.display = 'none';
  pageName.textContent = 'Main';
})

settingsButton.addEventListener('click', function() {
  charPage.style.display = 'none';
  settingsPage.style.display = 'flex';
  homePage.style.display = 'none';
  battlePage.style.display = 'none';
  pageName.textContent = 'Settings';
})

fightButton.addEventListener('click', function() {
  charPage.style.display = 'none';
  settingsPage.style.display = 'none';
  homePage.style.display = 'none';
  battlePage.style.display = 'flex';
  pageName.textContent = 'Battle';
})

nameEditButton.addEventListener('click', function() {
  saveButton.style.display = 'inline-block';
  settingsInput.value = localStorage.getItem('userName');
  settingsInput.style.display = 'inline-block';
  nameEditButton.style.display = 'none';
  settingsPlayerName.style.display = 'none';

})

saveButton.addEventListener('click', function() {
  saveButton.style.display = 'none';
  settingsInput.style.display = 'none';
  nameEditButton.style.display = 'inline';
  settingsPlayerName.style.display = 'inline';
  localStorage.setItem('userName', settingsInput.value);
  playerName.forEach((item) => item.textContent = localStorage.getItem('userName'));
})

settingsInput.addEventListener('input', function() {
  if (settingsInput.value.trim() !== '') {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
})

// Avatar popup

avatarBtn.addEventListener('click', function() {
  avatarPopup.style.display = 'flex';
  overlay.style.display = 'flex';
})

avatarCloseButton.addEventListener('click', function() {
  overlay.style.display = 'none';
  avatarPopup.style.display = 'none'; 
})

overlay.addEventListener('click', function(event) {
  if (event.target.className === 'avatar-popup-container') {
    overlay.style.display = 'none';
    avatarPopup.style.display = 'none';
  }
})

avatarButton1.addEventListener('click', function(event) {
  console.log(event.target);
  avatar.src = './assets/img/default.jpg';
  avatarBattle.src = './assets/img/default.jpg';
  localStorage.setItem('userAvatar', './assets/img/default.jpg');
})

avatarButton2.addEventListener('click', function(event) {
  console.log(event.target);
  avatar.src = './assets/img/avatar1.png';
  avatarBattle.src = './assets/img/avatar1.png';
  localStorage.setItem('userAvatar', './assets/img/avatar1.png');
})

avatarButton3.addEventListener('click', function() {
  avatar.src = './assets/img/avatar2.jpg';
  avatarBattle.src = './assets/img/avatar2.jpg';
  localStorage.setItem('userAvatar', './assets/img/avatar2.jpg');
})

avatarButton4.addEventListener('click', function() {
  avatar.src = './assets/img/avatar3.jpg';
  avatarBattle.src = './assets/img/avatar3.jpg';
  localStorage.setItem('userAvatar', './assets/img/avatar3.jpg');
})