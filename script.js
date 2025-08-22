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
const losesCount = document.querySelector('.loses-count');
const winsCount = document.querySelector('.wins-count');

const userName = localStorage.getItem('userName');
const userAvatar = localStorage.getItem('userAvatar');
const userWins = localStorage.getItem('userWins');
const userLoses = localStorage.getItem('userLoses');

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

const player = {playerName: 777, avatar: './assets/img/default.png', playerHealth: 150, remainingPlayerHealth: 150, numOfAttackZones: 1, numOfDefenceZones: 2, hitPower: 10};
const remainingPlayerHealth = document.querySelector('.player-current-health');

const currentEnemy = chooseRandomEnemy();
const enemyName = document.querySelector('.enemy-name');
const enemyAvatar = document.querySelector('.enemy-avatar');
const enemyInitialHealth = document.querySelector('.enemy-initial-health');
const remainingEnemyHealth = document.querySelector('.remaining-enemy-health');
const fightLog = document.querySelector('.log');
const battlePopupContainer = document.querySelector('.battle-popup-container');
const battlePopup = document.querySelector('.battle-popup');
const battleResult = document.querySelector('.battle-result');
const resultCloseButton = document.querySelector('.result-close-button');
const playerHealthLevel = document.querySelector('.player-health');
const enemyHealthLevel = document.querySelector('.enemy-health');

let fightIsGoing = false;

avatar.src = userAvatar || './assets/img/default.jpg';
avatarBattle.src = userAvatar || './assets/img/default.jpg';

// Wins & Loses Count  

if (!userWins && !userLoses) {
  localStorage.setItem('userLoses', 0);
  localStorage.setItem('userWins', 0);
  losesCount.textContent = localStorage.getItem('userLoses');
  winsCount.textContent = localStorage.getItem('userWins');
} else {
  losesCount.textContent = localStorage.getItem('userLoses');
  winsCount.textContent = localStorage.getItem('userWins');
}


// Choose enemy

function chooseRandomEnemy() {
  const enemies = [
    {enemyName: 'Snow troll', avatar: './assets/img/snowtroll.png', enemyHealth: 150, remainingEnemyHealth: 150, numOfAttackZones: 1, numOfDefenceZones: 3, hitPower: 20},
    {enemyName: 'Space marine', avatar: './assets/img/spacemarine.png', enemyHealth: 120, remainingEnemyHealth: 120, numOfAttackZones: 1, numOfDefenceZones: 2, hitPower: 20},
    {enemyName: 'Spider', avatar: './assets/img/spider.png', enemyHealth: 100, remainingEnemyHealth: 100, numOfAttackZones: 2, numOfDefenceZones: 1, hitPower: 10},
  ];
  const randomIndex = Math.floor(Math.random() * enemies.length);
  return enemies[randomIndex];
}

// Registration form

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

// FIGHT PAGE START

fightButton.addEventListener('click', function() {
  charPage.style.display = 'none';
  settingsPage.style.display = 'none';
  homePage.style.display = 'none';
  battlePage.style.display = 'flex';
  pageName.textContent = 'Battle';
  chooseRandomEnemy();
  console.log(currentEnemy);
  enemyName.textContent = currentEnemy.enemyName;
  enemyAvatar.src = currentEnemy.avatar;
  enemyInitialHealth.textContent = currentEnemy.enemyHealth;
  remainingEnemyHealth.textContent = currentEnemy.remainingEnemyHealth;
})

// FIGHT

const attackButton = document.querySelector('.attack-button');
const attackZonesForm = document.querySelectorAll('input[name="attack-zones"]');
const defenceZonesForm = document.querySelectorAll('input[name="defence-zones"]');

function changePlayerHealthLevel() {
  let percent = ((player.remainingPlayerHealth / 150) * 100);
  playerHealthLevel.style.width = `${percent}%`;
}

function changeEnemyHealthLevel() {
  let percent = ((currentEnemy.remainingEnemyHealth / currentEnemy.enemyHealth) * 100);
  enemyHealthLevel.style.width = `${percent}%`;
}

function battleFormValidation() {
  const radioButtons = [...attackZonesForm].filter(item => item.checked).length;
  const checkBoxes = [...defenceZonesForm].filter(item => item.checked).length;
  attackButton.disabled = !(radioButtons === 1 && checkBoxes === 2);
}; 

[...attackZonesForm, ...defenceZonesForm].forEach(item => item.addEventListener("change", battleFormValidation));

function randomAttackZones(numOfAttackZones) {
  const count = 5;
  const arr = Array(count).fill(false);
  const indices = [];

  while (indices.length < numOfAttackZones) {
    const random = Math.floor(Math.random() * count);
    if (!indices.includes(random)) {
      indices.push(random);
      arr[random] = true;
    }
  }
  return arr;
}

function randomDefenceZones(numOfDefenceZones) {
  const count = 5;
  const arr = Array(count).fill(false);
  const indices = [];

  while (indices.length < numOfDefenceZones) {
    const random = Math.floor(Math.random() * count);
    if (!indices.includes(random)) {
      indices.push(random);
      arr[random] = true;
    }
  }
  return arr;
}

function makeTurn(arr1, arr2, arr3, arr4, obj) {
  for (let i = 0; i < 5; i++) {
    if (arr1[i] === true) {
      if (arr2[i] === true) {
        fightLog.innerHTML = 'противник получил 0 урона, удар в блок!<br>' + fightLog.innerHTML;
      } else {
        fightLog.innerHTML = 'противник получил -10 урона, удар попал в цель!<br>' + fightLog.innerHTML;
        obj.remainingEnemyHealth = obj.remainingEnemyHealth - 10;
        remainingEnemyHealth.textContent = currentEnemy.remainingEnemyHealth;
        changeEnemyHealthLevel();
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    if (arr3[i] === true) {
      if (arr4[i] === true) {
        fightLog.innerHTML = 'игрок получил 0 урона, удар в блок!<br>' + fightLog.innerHTML;
      } else {
        fightLog.innerHTML = 'игрок получил -10 урона, удар попал в цель!<br>' + fightLog.innerHTML;
        player.remainingPlayerHealth = player.remainingPlayerHealth - 10;
        remainingPlayerHealth.textContent = player.remainingPlayerHealth;
        changePlayerHealthLevel();
      }
    }
  }
  if (player.remainingPlayerHealth <=0) {
    remainingPlayerHealth.textContent = 0;
    battlePopupContainer.style.display = 'flex';
    battlePopup.style.display = 'flex';
    battleResult.textContent = "Maybe next time :(";
    localStorage.setItem('userLoses', Number(localStorage.getItem('userLoses')) + 1);
  }
  if (obj.remainingEnemyHealth <=0) {
    remainingEnemyHealth.textContent = 0;
    battlePopupContainer.style.display = 'flex';
    battlePopup.style.display = 'flex';
    battleResult.textContent = "Congratulations on your win!";
    localStorage.setItem('userWins', Number(localStorage.getItem('userWins')) + 1);
  }
}

attackButton.addEventListener('click', function() {
  fightIsGoing = true;
  const playerAttackZones = [...attackZonesForm].map(item => item.checked);
  const playerDefenceZones = [...defenceZonesForm].map(item => item.checked);
  console.log('PAZ', playerAttackZones);
  console.log('PDZ', playerDefenceZones);
  console.log('EAZ', randomAttackZones(currentEnemy.numOfAttackZones));
  console.log('EDZ', randomDefenceZones(currentEnemy.numOfDefenceZones));
  makeTurn(playerAttackZones, randomDefenceZones(currentEnemy.numOfDefenceZones), randomAttackZones(currentEnemy.numOfAttackZones), playerDefenceZones, currentEnemy);
})

resultCloseButton.addEventListener('click', function() {
  charPage.style.display = 'flex';
  settingsPage.style.display = 'none';
  homePage.style.display = 'none';
  battlePage.style.display = 'none';
  battlePopupContainer.style.display = 'none';
  battlePopup.style.display = 'none';
  losesCount.textContent = localStorage.getItem('userLoses');
  winsCount.textContent = localStorage.getItem('userWins');
  player.remainingPlayerHealth = 150;
  currentEnemy.remainingEnemyHealth = currentEnemy.enemyHealth;
  remainingPlayerHealth.textContent = player.remainingPlayerHealth;
  changeEnemyHealthLevel();
  changePlayerHealthLevel();
})
